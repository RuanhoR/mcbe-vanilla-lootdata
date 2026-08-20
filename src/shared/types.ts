import type { Block, Entity, ItemStack, RawMessage } from "@minecraft/server";
import type { LootStack } from "./node-compatibility";

export const enchant = [
  "protection",
  "fire_protection",
  "feather_falling",
  "blast_protection",
  "projectile_protection",
  "thorns",
  "respiration",
  "depth_strider",
  "aqua_affinity",
  "sharpness",
  "smite",
  "bane_of_arthropods",
  "knockback",
  "fire_aspect",
  "looting",
  "efficiency",
  "silk_touch",
  "unbreaking",
  "fortune",
  "power",
  "punch",
  "flame",
  "infinity",
  "luck_of_the_sea",
  "lure",
  "frost_walker",
  "mending",
  "binding",
  "vanishing",
  "impaling",
  "riptide",
  "loyalty",
  "channeling",
  "multishot",
  "piercing",
  "quick_charge",
  "soul_speed",
  "swift_sneak",
  "wind_burst",
  "density",
  "breach",
  "lunge",
] as const;
export type EnchEnum = (typeof enchant)[number];

export interface BlockLootDataValue {
  /**
   * Orb Cout
   */
  lootOrb?: {
    min: number;
    max: number;
  };
  /**
   * Can Destory in Survival
   */
  canDestory?: boolean;
  /**
   * If use fortune, will increase the drop amount
   */
  fortune?: boolean;
  item?: LootItem;
  /**
   * Use `silk_touch` destory the block, loot item(no `BlockLootDataValue.item`)
   */
  silkTouchLoot?: LootItem;
  /**
   * If no sapi(like lectern's block), enable the option, handle via command
   */
  HandleUseCommand?: boolean;
}
export interface EntityLootDataValue {
  /**
   * Orb Cout
   */
  lootOrb?: {
    min: number;
    max: number;
  };
  item?: LootItem;
  /**
   * If Entity include conationer, loot?
   */
  lootConatiner?: boolean;
  UseEnchLooting?: boolean;
}
/**
 * Loot item
 * @example
 * { "minecraft:diamond": 100 } : 100% loot diamond
 * every item all loot, not over all loot item
 * [1] = cout
 * [2] = weight
 */
export type LootItem = [
  ItemDefine,
  {
    min: number;
    max?: number;
  },
  number,
];
/**
 * Define A Item, but no vanilla ItemStack
 */
export type ItemDefine =
  | string
  | {
      id: string;
      ench: { id: EnchEnum; level: number | { max: number; min: number } }[];
      functions?: {
        setLore(lore: string[] | RawMessage[]): void;
      };
    };
export interface InputOptions {
  type: "entity" | "block";
  origin: Block | Entity | string;
  /** Tool used to break/kill: native `ItemStack`, a {@link LootStack} compat stack, or a plain item id string. */
  useItem: string | LootStack;
  isSurvival: boolean;
  flags?: {
    lootOrb?: boolean;
  };
}
