import type { EntityLootDataValue } from "../types";
import { assertCustomId, toNamespacedId } from "../utils";

export const internalEntityData = {
  "minecraft:allay": {},
  "minecraft:area_effect_cloud": {},
  "minecraft:armadillo": {
    item: ["minecraft:armadillo_scute", { min: 1, max: 1 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:armor_stand": {},
  "minecraft:arrow": {},
  "minecraft:axolotl": {},
  "minecraft:bat": {},
  "minecraft:bee": {},
  "minecraft:black_cushion": {},
  "minecraft:blaze": {
    item: ["minecraft:blaze_rod", { min: 0, max: 1 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:blue_cushion": {},
  "minecraft:boat": {},
  "minecraft:bogged": {
    item: ["minecraft:bone", { min: 0, max: 2 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:breeze": {},
  "minecraft:breeze_wind_charge_projectile": {},
  "minecraft:brown_cushion": {},
  "minecraft:camel": {},
  "minecraft:camel_husk": {},
  "minecraft:cat": {},
  "minecraft:cave_spider": {
    item: ["minecraft:string", { min: 0, max: 2 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:chest_boat": {},
  "minecraft:chest_minecart": {},
  "minecraft:chicken": {
    item: ["minecraft:feather", { min: 0, max: 2 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:cod": {
    item: ["minecraft:cod", { min: 1, max: 1 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:command_block_minecart": {},
  "minecraft:copper_golem": {},
  "minecraft:cow": {
    item: ["minecraft:leather", { min: 0, max: 2 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:creaking": {},
  "minecraft:creeper": {
    item: ["minecraft:gunpowder", { min: 0, max: 2 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:cushion": {},
  "minecraft:cyan_cushion": {},
  "minecraft:dolphin": {},
  "minecraft:donkey": {
    item: ["minecraft:leather", { min: 0, max: 2 }, 100],
    lootConatiner: true,
    UseEnchLooting: true,
  },
  "minecraft:dragon_fireball": {},
  "minecraft:drowned": {
    item: ["minecraft:rotten_flesh", { min: 1, max: 3 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:egg": {},
  "minecraft:elder_guardian": {
    item: ["minecraft:prismarine_shard", { min: 0, max: 2 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:elder_guardian_ghost": {},
  "minecraft:ender_crystal": {},
  "minecraft:ender_dragon": {},
  "minecraft:ender_pearl": {},
  "minecraft:enderman": {
    item: ["minecraft:ender_pearl", { min: 0, max: 1 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:endermite": {},
  "minecraft:evocation_fang": {},
  "minecraft:evocation_illager": {
    item: ["minecraft:totem_of_undying", { min: 1, max: 1 }, 100],
  },
  "minecraft:eye_of_ender_signal": {},
  "minecraft:falling_block": {},
  "minecraft:fireball": {},
  "minecraft:fireworks_rocket": {},
  "minecraft:fishing_hook": {},
  "minecraft:fox": {},
  "minecraft:frog": {},
  "minecraft:ghast": {
    item: ["minecraft:ghast_tear", { min: 0, max: 1 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:glow_squid": {
    item: ["minecraft:glow_ink_sac", { min: 1, max: 3 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:goat": {
    item: ["minecraft:mutton", { min: 0, max: 2 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:gray_cushion": {},
  "minecraft:green_cushion": {},
  "minecraft:guardian": {
    item: ["minecraft:prismarine_shard", { min: 0, max: 2 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:happy_ghast": {},
  "minecraft:hoglin": {
    item: ["minecraft:porkchop", { min: 1, max: 3 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:hopper_minecart": {},
  "minecraft:horse": {
    item: ["minecraft:leather", { min: 0, max: 2 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:husk": {
    item: ["minecraft:rotten_flesh", { min: 1, max: 3 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:iron_golem": {
    item: ["minecraft:iron_ingot", { min: 3, max: 5 }, 100],
    UseEnchLooting: true,
  },
  "minecraft:item": {},
  "minecraft:leash_knot": {},
  "minecraft:light_blue_cushion": {},
  "minecraft:light_gray_cushion": {},
  "minecraft:lightning_bolt": {},
  "minecraft:lime_cushion": {},
  "minecraft:lingering_potion": {},
  "minecraft:llama": {
    item: ["minecraft:leather", { min: 0, max: 2 }, 100],
    lootConatiner: true,
    UseEnchLooting: true,
  },
  "minecraft:llama_spit": {},
  "minecraft:magenta_cushion": {},
  "minecraft:magma_cube": {
    UseEnchLooting: true,
    item: ["minecraft:magma_cream", { min: 0, max: 1 }, 100],
  },
  "minecraft:minecart": {},
  "minecraft:mooshroom": {
    UseEnchLooting: true,
    item: ["minecraft:leather", { min: 0, max: 2 }, 100],
  },
  "minecraft:mule": {
    UseEnchLooting: true,
    lootConatiner: true,
    item: ["minecraft:leather", { min: 0, max: 2 }, 100],
  },
  "minecraft:nautilus": {},
  "minecraft:npc": {},
  "minecraft:ocelot": {},
  "minecraft:ominous_item_spawner": {},
  "minecraft:orange_cushion": {},
  "minecraft:painting": {},
  "minecraft:panda": {
    UseEnchLooting: true,
    item: ["minecraft:bamboo", { min: 1, max: 1 }, 100],
  },
  "minecraft:parched": {},
  "minecraft:parrot": {
    UseEnchLooting: true,
    item: ["minecraft:feather", { min: 1, max: 2 }, 100],
  },
  "minecraft:phantom": {
    UseEnchLooting: true,
    item: ["minecraft:phantom_membrane", { min: 0, max: 1 }, 100],
  },
  "minecraft:pig": {
    UseEnchLooting: true,
    item: ["minecraft:porkchop", { min: 0, max: 2 }, 100],
  },
  "minecraft:piglin": {
    UseEnchLooting: true,
    item: ["minecraft:gold_nugget", { min: 2, max: 6 }, 100],
  },
  "minecraft:piglin_brute": {
    UseEnchLooting: true,
    item: ["minecraft:gold_nugget", { min: 2, max: 6 }, 100],
  },
  "minecraft:pillager": {
    UseEnchLooting: true,
    item: ["minecraft:emerald", { min: 0, max: 1 }, 100],
  },
  "minecraft:pink_cushion": {},
  "minecraft:player": {},
  "minecraft:polar_bear": {},
  "minecraft:pufferfish": {
    UseEnchLooting: true,
    item: ["minecraft:pufferfish", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_cushion": {},
  "minecraft:rabbit": {
    UseEnchLooting: true,
    item: ["minecraft:rabbit_hide", { min: 0, max: 1 }, 100],
  },
  "minecraft:ravager": {},
  "minecraft:red_cushion": {},
  "minecraft:salmon": {
    UseEnchLooting: true,
    item: ["minecraft:salmon", { min: 1, max: 1 }, 100],
  },
  "minecraft:sheep": {
    UseEnchLooting: true,
    item: ["minecraft:white_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:shulker": {
    UseEnchLooting: true,
    item: ["minecraft:shulker_shell", { min: 0, max: 1 }, 100],
  },
  "minecraft:shulker_bullet": {},
  "minecraft:silverfish": {},
  "minecraft:skeleton": {
    UseEnchLooting: true,
    item: ["minecraft:bone", { min: 0, max: 2 }, 100],
  },
  "minecraft:skeleton_horse": {
    UseEnchLooting: true,
    item: ["minecraft:bone", { min: 0, max: 2 }, 100],
  },
  "minecraft:slime": {
    UseEnchLooting: true,
    item: ["minecraft:slime_ball", { min: 0, max: 2 }, 100],
  },
  "minecraft:small_fireball": {},
  "minecraft:sniffer": {},
  "minecraft:snow_golem": {
    UseEnchLooting: true,
    item: ["minecraft:snowball", { min: 0, max: 15 }, 100],
  },
  "minecraft:snowball": {},
  "minecraft:spider": {
    UseEnchLooting: true,
    item: ["minecraft:string", { min: 0, max: 2 }, 100],
  },
  "minecraft:splash_potion": {},
  "minecraft:squid": {
    UseEnchLooting: true,
    item: ["minecraft:ink_sac", { min: 1, max: 3 }, 100],
  },
  "minecraft:stray": {
    UseEnchLooting: true,
    item: ["minecraft:bone", { min: 0, max: 2 }, 100],
  },
  "minecraft:strider": {},
  "minecraft:sulfur_cube": {},
  "minecraft:tadpole": {},
  "minecraft:thrown_trident": {},
  "minecraft:tnt": {},
  "minecraft:tnt_minecart": {},
  "minecraft:trader_llama": {
    UseEnchLooting: true,
    lootConatiner: true,
    item: ["minecraft:leather", { min: 0, max: 2 }, 100],
  },
  "minecraft:tropicalfish": {
    UseEnchLooting: true,
    item: ["minecraft:tropical_fish", { min: 1, max: 1 }, 100],
  },
  "minecraft:turtle": {
    UseEnchLooting: true,
    item: ["minecraft:scute", { min: 0, max: 1 }, 100],
  },
  "minecraft:vex": {},
  "minecraft:villager": {},
  "minecraft:villager_v2": {},
  "minecraft:vindicator": {
    UseEnchLooting: true,
    item: ["minecraft:emerald", { min: 0, max: 1 }, 100],
  },
  "minecraft:wandering_trader": {},
  "minecraft:warden": {},
  "minecraft:white_cushion": {},
  "minecraft:wind_charge_projectile": {},
  "minecraft:witch": {
    UseEnchLooting: true,
    item: ["minecraft:glass_bottle", { min: 0, max: 1 }, 100],
  },
  "minecraft:wither": { item: ["minecraft:nether_star", { min: 1, max: 1 }, 100] },
  "minecraft:wither_skeleton": {
    UseEnchLooting: true,
    item: ["minecraft:coal", { min: 0, max: 1 }, 100],
  },
  "minecraft:wither_skull": {},
  "minecraft:wither_skull_dangerous": {},
  "minecraft:wolf": {},
  "minecraft:xp_bottle": {},
  "minecraft:xp_orb": {},
  "minecraft:yellow_cushion": {},
  "minecraft:zoglin": {
    UseEnchLooting: true,
    item: ["minecraft:rotten_flesh", { min: 1, max: 3 }, 100],
  },
  "minecraft:zombie": {
    UseEnchLooting: true,
    item: ["minecraft:rotten_flesh", { min: 0, max: 2 }, 100],
  },
  "minecraft:zombie_horse": {
    UseEnchLooting: true,
    item: ["minecraft:rotten_flesh", { min: 0, max: 2 }, 100],
  },
  "minecraft:zombie_nautilus": {},
  "minecraft:zombie_pigman": {
    UseEnchLooting: true,
    item: ["minecraft:rotten_flesh", { min: 0, max: 1 }, 100],
  },
  "minecraft:zombie_villager": {
    UseEnchLooting: true,
    item: ["minecraft:rotten_flesh", { min: 1, max: 3 }, 100],
  },
  "minecraft:zombie_villager_v2": {
    UseEnchLooting: true,
    item: ["minecraft:rotten_flesh", { min: 1, max: 3 }, 100],
  },
} satisfies {
  [key: string]: EntityLootDataValue;
};

const customEntityData: Record<string, EntityLootDataValue> = {};

export function getEntityData(id: string): EntityLootDataValue | undefined {
  return (
    customEntityData[id] ??
    (internalEntityData as Record<string, EntityLootDataValue>)[
      toNamespacedId(id)
    ]
  );
}

/**
 * Register custom entity loot data under your own namespace (e.g.
 * `"myaddon:custom_mob"`). Keys must match `[a-z0-9_]+:[a-z0-9_]+` and may not
 * use the reserved `minecraft:` namespace — vanilla defaults stay intact.
 */
export function registryEntityData(
  data: Record<string, EntityLootDataValue>,
): void {
  for (const key of Object.keys(data)) assertCustomId(key);
  Object.assign(customEntityData, data);
}
