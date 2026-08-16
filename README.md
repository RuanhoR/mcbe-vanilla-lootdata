# @ojang/vanilla-lootdata

Minecraft Vanilla LootTable Loot for Script API (SAPI).

`@ojang/vanilla-lootdata` reproduces the vanilla survival loot drops of **blocks** and **entities** in Minecraft Bedrock inside your Minecraft addon. It ships with built-in vanilla loot data for **1232 blocks** and **149 entities**, and lets you override or extend any entry with your own custom loot.

It works entirely in pure JavaScript/TypeScript on top of `@minecraft/server` — no commands, no world editing, no JSON loot tables required.

## Features

- Vanilla-accurate block loot: correct drops, count ranges, drop weights, XP orbs, silk-touch and fortune handling
- Vanilla-accurate entity loot: item drops, count ranges, looting enchants, container (mob inventory) loot
- Built-in data for 1232 blocks and 149 entities
- Customize anything: override existing entries or add your own via `registryBlockData` / `registryEntityData`
- Supports enchanted drops (e.g. enchanted books / items) and item lore
- Tiny, dependency-free runtime (peer-depends only on `@minecraft/server`)

## Requirements

- Minecraft Bedrock with **Script API** enabled
- `@minecraft/server` `^2.10.0-beta.1.26.44-stable` (peer dependency)
- Node.js `>= 18.0.0` for building

## Installation

```bash
pnpm add @ojang/vanilla-lootdata @minecraft/server
# or
npm install @ojang/vanilla-lootdata @minecraft/server
```

## Usage

### Block loot

```ts
import { getBlockLoot, world, EntityComponentTypes, EquipmentSlot, } from "@minecraft/server"; // + the lib
import { getLoot } from "@ojang/vanilla-lootdata";

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const { block, player } = event;
  const result = getLoot({
    type: "block",
    origin: block,
    useItem: player
      .getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Mainhand);
    isSurvival: player.getGameMode() === "Survival",
    flags: { lootOrb: true },
  });

  const location = block.location;
  for (const item of result.items) {
    block.dimension.spawnItem(item, location);
  }
  if (result.orb > 0) {
    block.dimension.spawnEntity("minecraft:xp_orb", location); // scale by result.orb as needed
  }
});
```

### Entity loot

```ts
import { getLoot } from "@ojang/vanilla-lootdata";
import { EntityComponentTypes, EquipmentSlot } from "@minecraft/server";
world.afterEvents.entityDie.subscribe((event) => {
  const { deadEntity, damageSource } = event;
  const useItem = damageSource.damagingEntity
    .getComponent(EntityComponentTypes.Equippable)
    ?.getEquipment(EquipmentSlot.Mainhand);

  const result = getLoot({
    type: "entity",
    origin: deadEntity,
    useItem: useItem ?? new ItemStack("minecraft:air"),
    isSurvival: true,
    flags: { lootOrb: true },
  });

  for (const item of result.items) {
    deadEntity.dimension.spawnItem(item, deadEntity.location);
  }
});
```

> `origin` accepts a `Block` / `Entity` instance or a plain id string. Ids may be namespaced (`"minecraft:stone"`) or not (`"stone"`).

## API

### `getLoot(options: InputOptions): LootReturn`

Dispatcher for both block and entity loot based on `options.type`.

### `getBlockLoot(options): LootReturn`

Computes the vanilla loot of a mined block. Returns:

```ts
interface LootReturn {
  /** Item stacks to spawn. */
  items: ItemStack[];
  /** Experience orb count to spawn. */
  orb: number;
  /** True when the block needs command handling (e.g. lectern). */
  useCommand?: boolean;
}
```

### `getEntityLoot(options): LootReturn`

Computes the vanilla loot of a killed entity. Returns the same `LootReturn`. If the entity carries an inventory (e.g. a donkey), its container contents are included.

### `InputOptions`

```ts
interface InputOptions {
  type: "entity" | "block";
  origin: Block | Entity | string;
  useItem: ItemStack; // the item/tool used to break/kill
  isSurvival: boolean; // creative mode drops nothing
  flags?: { lootOrb?: boolean };
}
```

### Customizing loot data

The built-in vanilla tables are read-only (`internalBlockData` / `internalEntityData`). To override or extend them, register your own entries — registered ids fully replace the vanilla defaults, everything else keeps vanilla behavior:

```ts
import { registryBlockData, registryEntityData } from "@ojang/vanilla-lootdata";

// Override stone to drop apples
registryBlockData({
  stone: {
    canDestory: true,
    item: ["minecraft:apple", { min: 1, max: 1 }, 100],
  },
});

// Add a custom mob
registryEntityData({
  custom_mob: { item: ["minecraft:emerald", { min: 1, max: 2 }, 100] },
});

// Also exported: getBlockData(id), getEntityData(id) to look entries up.
```

#### Loot item format

Every drop is a 3-tuple `[item, count, weight]`:

```ts
type LootItem = [
  ItemDefine, // item to drop
  { min: number; max?: number }, // count range
  number, // drop chance as a percentage (0-100)
];
```

- `["minecraft:diamond", { min: 1, max: 1 }, 100]` — always drops 1 diamond.
- `["minecraft:book", { min: 3, max: 3 }, 100]` — always drops 3 books (bookshelf).

`ItemDefine` is either a plain item id string, or an object for enchanted/custom items:

```ts
{
  id: "minecraft:diamond_sword",
  ench: [{ id: "sharpness", level: { min: 3, max: 5 } }], // fixed level also allowed
  functions?: { setLore(lore: string[] | RawMessage[]): void },
}
```

Enchant levels can be a fixed number or a random range. `functions.setLore` is called with the stack's current lore so you can customize it via closure.

#### Data fields

Block entries (`BlockLootDataValue`):

| Field              | Meaning                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------- |
| `item`             | Drop when mined (silks-touch disabled).                                                     |
| `silkTouchLoot`    | Drop when mined with silk touch (falls back to `item`).                                     |
| `lootOrb`          | XP orb range `{ min, max }`.                                                                |
| `fortune`          | If true, fortune increases the drop amount.                                                 |
| `canDestory`       | Whether the block can be destroyed in survival (false = bedrock, air, ...).                 |
| `HandleUseCommand` | If true (e.g. lectern), the block needs command handling — sets `useCommand` on the result. |

Entity entries (`EntityLootDataValue`):

| Field            | Meaning                                                        |
| ---------------- | -------------------------------------------------------------- |
| `item`           | Drop when killed.                                              |
| `lootOrb`        | XP orb range `{ min, max }`.                                   |
| `UseEnchLooting` | If true, looting increases the drop amount.                    |
| `lootConatiner`  | If true, the entity's inventory container contents are looted. |

## Notes & Limitations

- The built-in data targets a recent vanilla version and may lag behind new game updates. Use `registryBlockData` / `registryEntityData` to fill gaps.
- `useCommand` (lectern) indicates a block that can't be dropped via a plain `ItemStack`; handle it with a command in your own code.
- Drop chances are simulated with `Math.random()`; results are not cryptographically random but statistically match vanilla.

## License

[MIT](./LICENSE)
