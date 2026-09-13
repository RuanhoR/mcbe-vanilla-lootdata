import type { BlockLootDataValue } from "../types";
import { assertCustomId, toNamespacedId } from "../utils";

export const internalBlockData = {
  "minecraft:acacia_button": {
    canDestory: true,
    item: ["minecraft:acacia_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_door": {
    canDestory: true,
    item: ["minecraft:acacia_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_double_slab": {
    canDestory: true,
    item: ["minecraft:acacia_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_fence": {
    canDestory: true,
    item: ["minecraft:acacia_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_fence_gate": {
    canDestory: true,
    item: ["minecraft:acacia_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_hanging_sign": {
    canDestory: true,
    item: ["minecraft:acacia_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:acacia_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:acacia_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:acacia_log": {
    canDestory: true,
    item: ["minecraft:acacia_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_planks": {
    canDestory: true,
    item: ["minecraft:acacia_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_pressure_plate": {
    canDestory: true,
    item: ["minecraft:acacia_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_sapling": {
    canDestory: true,
    item: ["minecraft:acacia_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_shelf": {
    canDestory: true,
    item: ["minecraft:acacia_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_slab": {
    canDestory: true,
    item: ["minecraft:acacia_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_stairs": {
    canDestory: true,
    item: ["minecraft:acacia_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_standing_sign": {
    canDestory: true,
    item: ["minecraft:acacia_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_trapdoor": {
    canDestory: true,
    item: ["minecraft:acacia_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_wall_sign": {
    canDestory: true,
    item: ["minecraft:acacia_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:acacia_wood": {
    canDestory: true,
    item: ["minecraft:acacia_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:activator_rail": {
    canDestory: true,
    item: ["minecraft:activator_rail", { min: 1, max: 1 }, 100],
  },
  "minecraft:air": { canDestory: false },
  "minecraft:allium": {
    canDestory: true,
    item: ["minecraft:allium", { min: 1, max: 1 }, 100],
  },
  "minecraft:allow": { canDestory: false },
  "minecraft:amethyst_block": {
    canDestory: true,
    item: ["minecraft:amethyst_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:amethyst_cluster": {
    canDestory: true,
    item: ["minecraft:amethyst_cluster", { min: 1, max: 1 }, 100],
  },
  "minecraft:ancient_debris": {
    canDestory: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:ancient_debris", { min: 1, max: 1 }, 100],
  },
  "minecraft:andesite": {
    canDestory: true,
    item: ["minecraft:andesite", { min: 1, max: 1 }, 100],
  },
  "minecraft:andesite_double_slab": {
    canDestory: true,
    item: ["minecraft:andesite_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:andesite_slab": {
    canDestory: true,
    item: ["minecraft:andesite_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:andesite_stairs": {
    canDestory: true,
    item: ["minecraft:andesite_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:andesite_wall": {
    canDestory: true,
    item: ["minecraft:andesite_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:anvil": {
    canDestory: true,
    item: ["minecraft:anvil", { min: 1, max: 1 }, 100],
  },
  "minecraft:azalea": {
    canDestory: true,
    item: ["minecraft:azalea", { min: 1, max: 1 }, 100],
  },
  "minecraft:azalea_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:azalea_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:azalea", { min: 1, max: 1 }, 5],
  },
  "minecraft:azalea_leaves_flowered": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:azalea_leaves_flowered",
      { min: 1, max: 1 },
      100,
    ],
    item: ["minecraft:azalea", { min: 1, max: 1 }, 5],
  },
  "minecraft:azure_bluet": {
    canDestory: true,
    item: ["minecraft:azure_bluet", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo": {
    canDestory: true,
    item: ["minecraft:bamboo", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_block": {
    canDestory: true,
    item: ["minecraft:bamboo_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_button": {
    canDestory: true,
    item: ["minecraft:bamboo_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_door": {
    canDestory: true,
    item: ["minecraft:bamboo_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_double_slab": {
    canDestory: true,
    item: ["minecraft:bamboo_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_fence": {
    canDestory: true,
    item: ["minecraft:bamboo_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_fence_gate": {
    canDestory: true,
    item: ["minecraft:bamboo_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_hanging_sign": {
    canDestory: true,
    item: ["minecraft:bamboo_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_mosaic": {
    canDestory: true,
    item: ["minecraft:bamboo_mosaic", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_mosaic_double_slab": {
    canDestory: true,
    item: ["minecraft:bamboo_mosaic_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_mosaic_slab": {
    canDestory: true,
    item: ["minecraft:bamboo_mosaic_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_mosaic_stairs": {
    canDestory: true,
    item: ["minecraft:bamboo_mosaic_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_planks": {
    canDestory: true,
    item: ["minecraft:bamboo_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_pressure_plate": {
    canDestory: true,
    item: ["minecraft:bamboo_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_sapling": {
    canDestory: true,
    item: ["minecraft:bamboo_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_shelf": {
    canDestory: true,
    item: ["minecraft:bamboo_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_slab": {
    canDestory: true,
    item: ["minecraft:bamboo_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_stairs": {
    canDestory: true,
    item: ["minecraft:bamboo_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_standing_sign": {
    canDestory: true,
    item: ["minecraft:bamboo_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_trapdoor": {
    canDestory: true,
    item: ["minecraft:bamboo_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:bamboo_wall_sign": {
    canDestory: true,
    item: ["minecraft:bamboo_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:barrel": {
    canDestory: true,
    item: ["minecraft:barrel", { min: 1, max: 1 }, 100],
  },
  "minecraft:barrier": { canDestory: false },
  "minecraft:basalt": {
    canDestory: true,
    item: ["minecraft:basalt", { min: 1, max: 1 }, 100],
  },
  "minecraft:beacon": {
    canDestory: true,
    item: ["minecraft:beacon", { min: 1, max: 1 }, 100],
  },
  "minecraft:bed": { canDestory: true, item: ["minecraft:bed", { min: 1, max: 1 }, 100] },
  "minecraft:bedrock": { canDestory: false },
  "minecraft:bee_nest": {
    canDestory: true,
    item: ["minecraft:bee_nest", { min: 1, max: 1 }, 100],
  },
  "minecraft:beehive": {
    canDestory: true,
    item: ["minecraft:beehive", { min: 1, max: 1 }, 100],
  },
  "minecraft:beetroot": {
    canDestory: true,
    item: ["minecraft:beetroot", { min: 0, max: 1 }, 100],
  },
  "minecraft:bell": { canDestory: true, item: ["minecraft:bell", { min: 1, max: 1 }, 100] },
  "minecraft:big_dripleaf": {
    canDestory: true,
    silkTouchLoot: ["minecraft:big_dripleaf", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_button": {
    canDestory: true,
    item: ["minecraft:birch_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_door": {
    canDestory: true,
    item: ["minecraft:birch_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_double_slab": {
    canDestory: true,
    item: ["minecraft:birch_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_fence": {
    canDestory: true,
    item: ["minecraft:birch_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_fence_gate": {
    canDestory: true,
    item: ["minecraft:birch_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_hanging_sign": {
    canDestory: true,
    item: ["minecraft:birch_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:birch_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:birch_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:birch_log": {
    canDestory: true,
    item: ["minecraft:birch_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_planks": {
    canDestory: true,
    item: ["minecraft:birch_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_pressure_plate": {
    canDestory: true,
    item: ["minecraft:birch_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_sapling": {
    canDestory: true,
    item: ["minecraft:birch_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_shelf": {
    canDestory: true,
    item: ["minecraft:birch_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_slab": {
    canDestory: true,
    item: ["minecraft:birch_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_stairs": {
    canDestory: true,
    item: ["minecraft:birch_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_standing_sign": {
    canDestory: true,
    item: ["minecraft:birch_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_trapdoor": {
    canDestory: true,
    item: ["minecraft:birch_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_wall_sign": {
    canDestory: true,
    item: ["minecraft:birch_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:birch_wood": {
    canDestory: true,
    item: ["minecraft:birch_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_candle": {
    canDestory: true,
    item: ["minecraft:black_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_candle_cake": {
    canDestory: true,
    item: ["minecraft:black_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_carpet": {
    canDestory: true,
    item: ["minecraft:black_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_concrete": {
    canDestory: true,
    item: ["minecraft:black_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_concrete_powder": {
    canDestory: true,
    item: ["minecraft:black_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:black_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_shulker_box": {
    canDestory: true,
    item: ["minecraft:black_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:black_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:black_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:black_terracotta": {
    canDestory: true,
    item: ["minecraft:black_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_wool": {
    canDestory: true,
    item: ["minecraft:black_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_wool_slab": {
    canDestory: true,
    item: ["minecraft:black_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:black_wool_stairs": {
    canDestory: true,
    item: ["minecraft:black_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:blackstone": {
    canDestory: true,
    item: ["minecraft:blackstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:blackstone_double_slab": {
    canDestory: true,
    item: ["minecraft:blackstone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:blackstone_slab": {
    canDestory: true,
    item: ["minecraft:blackstone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:blackstone_stairs": {
    canDestory: true,
    item: ["minecraft:blackstone_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:blackstone_wall": {
    canDestory: true,
    item: ["minecraft:blackstone_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:blast_furnace": {
    canDestory: true,
    item: ["minecraft:blast_furnace", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_candle": {
    canDestory: true,
    item: ["minecraft:blue_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_candle_cake": {
    canDestory: true,
    item: ["minecraft:blue_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_carpet": {
    canDestory: true,
    item: ["minecraft:blue_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_concrete": {
    canDestory: true,
    item: ["minecraft:blue_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_concrete_powder": {
    canDestory: true,
    item: ["minecraft:blue_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:blue_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_ice": {
    canDestory: true,
    silkTouchLoot: ["minecraft:blue_ice", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_orchid": {
    canDestory: true,
    item: ["minecraft:blue_orchid", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_shulker_box": {
    canDestory: true,
    item: ["minecraft:blue_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:blue_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:blue_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:blue_terracotta": {
    canDestory: true,
    item: ["minecraft:blue_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_wool": {
    canDestory: true,
    item: ["minecraft:blue_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_wool_slab": {
    canDestory: true,
    item: ["minecraft:blue_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:blue_wool_stairs": {
    canDestory: true,
    item: ["minecraft:blue_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:bone_block": {
    canDestory: true,
    item: ["minecraft:bone_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:bookshelf": {
    canDestory: true,
    item: ["minecraft:book", { min: 3, max: 3 }, 100],
  },
  "minecraft:border_block": { canDestory: false },
  "minecraft:brain_coral": {
    canDestory: true,
    item: ["minecraft:brain_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:brain_coral_block": {
    canDestory: true,
    item: ["minecraft:brain_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:brain_coral_fan": {
    canDestory: true,
    item: ["minecraft:brain_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:brain_coral_wall_fan": {
    canDestory: true,
    item: ["minecraft:brain_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:brewing_stand": {
    canDestory: true,
    item: ["minecraft:brewing_stand", { min: 1, max: 1 }, 100],
  },
  "minecraft:brick_block": {
    canDestory: true,
    item: ["minecraft:brick_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:brick_double_slab": {
    canDestory: true,
    item: ["minecraft:brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:brick_slab": {
    canDestory: true,
    item: ["minecraft:brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:brick_stairs": {
    canDestory: true,
    item: ["minecraft:brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:brick_wall": {
    canDestory: true,
    item: ["minecraft:brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_candle": {
    canDestory: true,
    item: ["minecraft:brown_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_candle_cake": {
    canDestory: true,
    item: ["minecraft:brown_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_carpet": {
    canDestory: true,
    item: ["minecraft:brown_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_concrete": {
    canDestory: true,
    item: ["minecraft:brown_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_concrete_powder": {
    canDestory: true,
    item: ["minecraft:brown_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:brown_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_mushroom": {
    canDestory: true,
    item: ["minecraft:brown_mushroom", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_mushroom_block": {
    canDestory: true,
    item: ["minecraft:brown_mushroom_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_shulker_box": {
    canDestory: true,
    item: ["minecraft:brown_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:brown_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:brown_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:brown_terracotta": {
    canDestory: true,
    item: ["minecraft:brown_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_wool": {
    canDestory: true,
    item: ["minecraft:brown_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_wool_slab": {
    canDestory: true,
    item: ["minecraft:brown_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:brown_wool_stairs": {
    canDestory: true,
    item: ["minecraft:brown_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:bubble_column": { canDestory: false },
  "minecraft:bubble_coral": {
    canDestory: true,
    item: ["minecraft:bubble_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:bubble_coral_block": {
    canDestory: true,
    item: ["minecraft:bubble_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:bubble_coral_fan": {
    canDestory: true,
    item: ["minecraft:bubble_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:bubble_coral_wall_fan": {
    canDestory: true,
    item: ["minecraft:bubble_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:budding_amethyst": {
    canDestory: true,
    item: ["minecraft:budding_amethyst", { min: 1, max: 1 }, 100],
  },
  "minecraft:bush": { canDestory: true, item: ["minecraft:bush", { min: 1, max: 1 }, 100] },
  "minecraft:cactus": {
    canDestory: true,
    item: ["minecraft:cactus", { min: 1, max: 1 }, 100],
  },
  "minecraft:cactus_flower": {
    canDestory: true,
    item: ["minecraft:cactus_flower", { min: 1, max: 1 }, 100],
  },
  "minecraft:cake": { canDestory: true, item: ["minecraft:cake", { min: 1, max: 1 }, 100] },
  "minecraft:calcite": {
    canDestory: true,
    item: ["minecraft:calcite", { min: 1, max: 1 }, 100],
  },
  "minecraft:calibrated_sculk_sensor": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:calibrated_sculk_sensor",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:campfire": {
    canDestory: true,
    item: ["minecraft:campfire", { min: 1, max: 1 }, 100],
  },
  "minecraft:candle": {
    canDestory: true,
    item: ["minecraft:candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:candle_cake": {
    canDestory: true,
    item: ["minecraft:candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:carrots": {
    canDestory: true,
    item: ["minecraft:carrot", { min: 0, max: 1 }, 100],
  },
  "minecraft:cartography_table": {
    canDestory: true,
    item: ["minecraft:cartography_table", { min: 1, max: 1 }, 100],
  },
  "minecraft:carved_pumpkin": {
    canDestory: true,
    item: ["minecraft:carved_pumpkin", { min: 1, max: 1 }, 100],
  },
  "minecraft:cauldron": {
    canDestory: true,
    item: ["minecraft:cauldron", { min: 1, max: 1 }, 100],
  },
  "minecraft:cave_vines": {
    canDestory: true,
    item: ["minecraft:glow_berries", { min: 1, max: 1 }, 100],
  },
  "minecraft:cave_vines_body_with_berries": {
    canDestory: true,
    item: ["minecraft:glow_berries", { min: 1, max: 1 }, 100],
  },
  "minecraft:cave_vines_head_with_berries": {
    canDestory: true,
    item: ["minecraft:glow_berries", { min: 1, max: 1 }, 100],
  },
  "minecraft:chain_command_block": { canDestory: false },
  "minecraft:cherry_button": {
    canDestory: true,
    item: ["minecraft:cherry_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_door": {
    canDestory: true,
    item: ["minecraft:cherry_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_double_slab": {
    canDestory: true,
    item: ["minecraft:cherry_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_fence": {
    canDestory: true,
    item: ["minecraft:cherry_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_fence_gate": {
    canDestory: true,
    item: ["minecraft:cherry_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_hanging_sign": {
    canDestory: true,
    item: ["minecraft:cherry_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:cherry_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:cherry_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:cherry_log": {
    canDestory: true,
    item: ["minecraft:cherry_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_planks": {
    canDestory: true,
    item: ["minecraft:cherry_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_pressure_plate": {
    canDestory: true,
    item: ["minecraft:cherry_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_sapling": {
    canDestory: true,
    item: ["minecraft:cherry_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_shelf": {
    canDestory: true,
    item: ["minecraft:cherry_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_slab": {
    canDestory: true,
    item: ["minecraft:cherry_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_stairs": {
    canDestory: true,
    item: ["minecraft:cherry_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_standing_sign": {
    canDestory: true,
    item: ["minecraft:cherry_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_trapdoor": {
    canDestory: true,
    item: ["minecraft:cherry_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_wall_sign": {
    canDestory: true,
    item: ["minecraft:cherry_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:cherry_wood": {
    canDestory: true,
    item: ["minecraft:cherry_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:chest": {
    canDestory: true,
    item: ["minecraft:chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:chipped_anvil": {
    canDestory: true,
    item: ["minecraft:chipped_anvil", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_bookshelf": {
    canDestory: true,
    item: ["minecraft:chiseled_bookshelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_cinnabar": {
    canDestory: true,
    item: ["minecraft:chiseled_cinnabar", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_copper": {
    canDestory: true,
    item: ["minecraft:chiseled_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_deepslate": {
    canDestory: true,
    item: ["minecraft:chiseled_deepslate", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_nether_bricks": {
    canDestory: true,
    item: ["minecraft:chiseled_nether_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_polished_blackstone": {
    canDestory: true,
    item: ["minecraft:chiseled_polished_blackstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_quartz_block": {
    canDestory: true,
    item: ["minecraft:chiseled_quartz_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_red_sandstone": {
    canDestory: true,
    item: ["minecraft:chiseled_red_sandstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_resin_bricks": {
    canDestory: true,
    item: ["minecraft:chiseled_resin_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_sandstone": {
    canDestory: true,
    item: ["minecraft:chiseled_sandstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_stone_bricks": {
    canDestory: true,
    item: ["minecraft:chiseled_stone_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_sulfur": {
    canDestory: true,
    item: ["minecraft:chiseled_sulfur", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_tuff": {
    canDestory: true,
    item: ["minecraft:chiseled_tuff", { min: 1, max: 1 }, 100],
  },
  "minecraft:chiseled_tuff_bricks": {
    canDestory: true,
    item: ["minecraft:chiseled_tuff_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:chorus_flower": {
    canDestory: true,
    item: ["minecraft:chorus_flower", { min: 1, max: 1 }, 100],
  },
  "minecraft:chorus_plant": {
    canDestory: true,
    item: ["minecraft:chorus_fruit", { min: 0, max: 1 }, 100],
  },
  "minecraft:cinnabar": {
    canDestory: true,
    item: ["minecraft:cinnabar", { min: 1, max: 1 }, 100],
  },
  "minecraft:cinnabar_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:cinnabar_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cinnabar_brick_slab": {
    canDestory: true,
    item: ["minecraft:cinnabar_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cinnabar_brick_stairs": {
    canDestory: true,
    item: ["minecraft:cinnabar_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:cinnabar_brick_wall": {
    canDestory: true,
    item: ["minecraft:cinnabar_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:cinnabar_bricks": {
    canDestory: true,
    item: ["minecraft:cinnabar_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:cinnabar_double_slab": {
    canDestory: true,
    item: ["minecraft:cinnabar_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cinnabar_slab": {
    canDestory: true,
    item: ["minecraft:cinnabar_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cinnabar_stairs": {
    canDestory: true,
    item: ["minecraft:cinnabar_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:cinnabar_wall": {
    canDestory: true,
    item: ["minecraft:cinnabar_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:clay": {
    canDestory: true,
    silkTouchLoot: ["minecraft:clay", { min: 1, max: 1 }, 100],
    item: ["minecraft:clay_ball", { min: 4, max: 4 }, 100],
  },
  "minecraft:closed_eyeblossom": {
    canDestory: true,
    item: ["minecraft:closed_eyeblossom", { min: 1, max: 1 }, 100],
    silkTouchLoot: ["minecraft:closed_eyeblossom", { min: 1, max: 1 }, 100],
  },
  "minecraft:coal_block": {
    canDestory: true,
    item: ["minecraft:coal_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:coal_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:coal", { min: 1, max: 1 }, 100],
  },
  "minecraft:coarse_dirt": {
    canDestory: true,
    item: ["minecraft:coarse_dirt", { min: 1, max: 1 }, 100],
  },
  "minecraft:cobbled_deepslate": {
    canDestory: true,
    item: ["minecraft:cobbled_deepslate", { min: 1, max: 1 }, 100],
  },
  "minecraft:cobbled_deepslate_double_slab": {
    canDestory: true,
    item: ["minecraft:cobbled_deepslate_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cobbled_deepslate_slab": {
    canDestory: true,
    item: ["minecraft:cobbled_deepslate_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cobbled_deepslate_stairs": {
    canDestory: true,
    item: ["minecraft:cobbled_deepslate_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:cobbled_deepslate_wall": {
    canDestory: true,
    item: ["minecraft:cobbled_deepslate_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:cobblestone": {
    canDestory: true,
    item: ["minecraft:cobblestone", { min: 1, max: 1 }, 100],
  },
  "minecraft:cobblestone_double_slab": {
    canDestory: true,
    item: ["minecraft:cobblestone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cobblestone_slab": {
    canDestory: true,
    item: ["minecraft:cobblestone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cobblestone_wall": {
    canDestory: true,
    item: ["minecraft:cobblestone_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:cocoa": {
    canDestory: true,
    item: ["minecraft:cocoa_beans", { min: 1, max: 3 }, 100],
  },
  "minecraft:command_block": { canDestory: false },
  "minecraft:composter": {
    canDestory: true,
    item: ["minecraft:composter", { min: 1, max: 1 }, 100],
  },
  "minecraft:conduit": {
    canDestory: true,
    item: ["minecraft:conduit", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_bars": {
    canDestory: true,
    item: ["minecraft:copper_bars", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_block": {
    canDestory: true,
    item: ["minecraft:copper_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_bulb": {
    canDestory: true,
    item: ["minecraft:copper_bulb", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_chain": {
    canDestory: true,
    item: ["minecraft:copper_chain", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_chest": {
    canDestory: true,
    item: ["minecraft:copper_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_door": {
    canDestory: true,
    item: ["minecraft:copper_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_golem_statue": {
    canDestory: true,
    item: ["minecraft:copper_golem_statue", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_grate": {
    canDestory: true,
    item: ["minecraft:copper_grate", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_lantern": {
    canDestory: true,
    item: ["minecraft:copper_lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:raw_copper", { min: 2, max: 5 }, 100],
  },
  "minecraft:copper_torch": {
    canDestory: true,
    item: ["minecraft:copper_torch", { min: 1, max: 1 }, 100],
  },
  "minecraft:copper_trapdoor": {
    canDestory: true,
    item: ["minecraft:copper_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:cornflower": {
    canDestory: true,
    item: ["minecraft:cornflower", { min: 1, max: 1 }, 100],
  },
  "minecraft:cracked_deepslate_bricks": {
    canDestory: true,
    item: ["minecraft:cracked_deepslate_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:cracked_deepslate_tiles": {
    canDestory: true,
    item: ["minecraft:cracked_deepslate_tiles", { min: 1, max: 1 }, 100],
  },
  "minecraft:cracked_nether_bricks": {
    canDestory: true,
    item: ["minecraft:cracked_nether_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:cracked_polished_blackstone_bricks": {
    canDestory: true,
    item: [
      "minecraft:cracked_polished_blackstone_bricks",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:cracked_stone_bricks": {
    canDestory: true,
    item: ["minecraft:cracked_stone_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:crafter": {
    canDestory: true,
    item: ["minecraft:crafter", { min: 1, max: 1 }, 100],
  },
  "minecraft:crafting_table": {
    canDestory: true,
    item: ["minecraft:crafting_table", { min: 1, max: 1 }, 100],
  },
  "minecraft:creaking_heart": {
    canDestory: true,
    item: ["minecraft:creaking_heart", { min: 1, max: 1 }, 100],
  },
  "minecraft:creeper_head": {
    canDestory: true,
    item: ["minecraft:creeper_head", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_button": {
    canDestory: true,
    item: ["minecraft:crimson_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_door": {
    canDestory: true,
    item: ["minecraft:crimson_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_double_slab": {
    canDestory: true,
    item: ["minecraft:crimson_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_fence": {
    canDestory: true,
    item: ["minecraft:crimson_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_fence_gate": {
    canDestory: true,
    item: ["minecraft:crimson_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_fungus": {
    canDestory: true,
    item: ["minecraft:crimson_fungus", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_hanging_sign": {
    canDestory: true,
    item: ["minecraft:crimson_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_hyphae": {
    canDestory: true,
    item: ["minecraft:crimson_hyphae", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_nylium": {
    canDestory: true,
    item: ["minecraft:crimson_nylium", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_planks": {
    canDestory: true,
    item: ["minecraft:crimson_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_pressure_plate": {
    canDestory: true,
    item: ["minecraft:crimson_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_roots": {
    canDestory: true,
    item: ["minecraft:crimson_roots", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_shelf": {
    canDestory: true,
    item: ["minecraft:crimson_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_slab": {
    canDestory: true,
    item: ["minecraft:crimson_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_stairs": {
    canDestory: true,
    item: ["minecraft:crimson_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_standing_sign": {
    canDestory: true,
    item: ["minecraft:crimson_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_stem": {
    canDestory: true,
    item: ["minecraft:crimson_stem", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_trapdoor": {
    canDestory: true,
    item: ["minecraft:crimson_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:crimson_wall_sign": {
    canDestory: true,
    item: ["minecraft:crimson_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:crying_obsidian": {
    canDestory: true,
    item: ["minecraft:crying_obsidian", { min: 1, max: 1 }, 100],
  },
  "minecraft:cut_copper": {
    canDestory: true,
    item: ["minecraft:cut_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cut_copper_stairs": {
    canDestory: true,
    item: ["minecraft:cut_copper_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:cut_red_sandstone": {
    canDestory: true,
    item: ["minecraft:cut_red_sandstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:cut_red_sandstone_double_slab": {
    canDestory: true,
    item: ["minecraft:cut_red_sandstone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cut_red_sandstone_slab": {
    canDestory: true,
    item: ["minecraft:cut_red_sandstone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cut_sandstone": {
    canDestory: true,
    item: ["minecraft:cut_sandstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:cut_sandstone_double_slab": {
    canDestory: true,
    item: ["minecraft:cut_sandstone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cut_sandstone_slab": {
    canDestory: true,
    item: ["minecraft:cut_sandstone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_candle": {
    canDestory: true,
    item: ["minecraft:cyan_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_candle_cake": {
    canDestory: true,
    item: ["minecraft:cyan_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_carpet": {
    canDestory: true,
    item: ["minecraft:cyan_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_concrete": {
    canDestory: true,
    item: ["minecraft:cyan_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_concrete_powder": {
    canDestory: true,
    item: ["minecraft:cyan_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:cyan_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_shulker_box": {
    canDestory: true,
    item: ["minecraft:cyan_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:cyan_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:cyan_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:cyan_terracotta": {
    canDestory: true,
    item: ["minecraft:cyan_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_wool": {
    canDestory: true,
    item: ["minecraft:cyan_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_wool_slab": {
    canDestory: true,
    item: ["minecraft:cyan_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:cyan_wool_stairs": {
    canDestory: true,
    item: ["minecraft:cyan_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:damaged_anvil": {
    canDestory: true,
    item: ["minecraft:damaged_anvil", { min: 1, max: 1 }, 100],
  },
  "minecraft:dandelion": {
    canDestory: true,
    item: ["minecraft:dandelion", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_button": {
    canDestory: true,
    item: ["minecraft:dark_oak_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_door": {
    canDestory: true,
    item: ["minecraft:dark_oak_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_double_slab": {
    canDestory: true,
    item: ["minecraft:dark_oak_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_fence": {
    canDestory: true,
    item: ["minecraft:dark_oak_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_fence_gate": {
    canDestory: true,
    item: ["minecraft:dark_oak_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_hanging_sign": {
    canDestory: true,
    item: ["minecraft:dark_oak_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_leaves": {
    canDestory: true,
    item: ["minecraft:dark_oak_sapling", { min: 1, max: 1 }, 5],
    silkTouchLoot: ["minecraft:dark_oak_leaves", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_log": {
    canDestory: true,
    item: ["minecraft:dark_oak_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_planks": {
    canDestory: true,
    item: ["minecraft:dark_oak_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_pressure_plate": {
    canDestory: true,
    item: ["minecraft:dark_oak_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_sapling": {
    canDestory: true,
    item: ["minecraft:dark_oak_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_shelf": {
    canDestory: true,
    item: ["minecraft:dark_oak_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_slab": {
    canDestory: true,
    item: ["minecraft:dark_oak_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_stairs": {
    canDestory: true,
    item: ["minecraft:dark_oak_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_trapdoor": {
    canDestory: true,
    item: ["minecraft:dark_oak_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_oak_wood": {
    canDestory: true,
    item: ["minecraft:dark_oak_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_prismarine": {
    canDestory: true,
    item: ["minecraft:dark_prismarine", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_prismarine_double_slab": {
    canDestory: true,
    item: ["minecraft:dark_prismarine_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_prismarine_slab": {
    canDestory: true,
    item: ["minecraft:dark_prismarine_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:dark_prismarine_stairs": {
    canDestory: true,
    item: ["minecraft:dark_prismarine_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:darkoak_standing_sign": {
    canDestory: true,
    item: ["minecraft:darkoak_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:darkoak_wall_sign": {
    canDestory: true,
    item: ["minecraft:darkoak_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:daylight_detector": {
    canDestory: true,
    item: ["minecraft:daylight_detector", { min: 1, max: 1 }, 100],
  },
  "minecraft:daylight_detector_inverted": {
    canDestory: true,
    item: ["minecraft:daylight_detector_inverted", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_brain_coral": {
    canDestory: true,
    item: ["minecraft:dead_brain_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_brain_coral_block": {
    canDestory: true,
    item: ["minecraft:dead_brain_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_brain_coral_fan": {
    canDestory: true,
    item: ["minecraft:dead_brain_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_brain_coral_wall_fan": {
    canDestory: true,
    item: ["minecraft:dead_brain_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_bubble_coral": {
    canDestory: true,
    item: ["minecraft:dead_bubble_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_bubble_coral_block": {
    canDestory: true,
    item: ["minecraft:dead_bubble_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_bubble_coral_fan": {
    canDestory: true,
    item: ["minecraft:dead_bubble_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_bubble_coral_wall_fan": {
    canDestory: true,
    item: ["minecraft:dead_bubble_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_fire_coral": {
    canDestory: true,
    item: ["minecraft:dead_fire_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_fire_coral_block": {
    canDestory: true,
    item: ["minecraft:dead_fire_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_fire_coral_fan": {
    canDestory: true,
    item: ["minecraft:dead_fire_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_fire_coral_wall_fan": {
    canDestory: true,
    item: ["minecraft:dead_fire_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_horn_coral": {
    canDestory: true,
    item: ["minecraft:dead_horn_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_horn_coral_block": {
    canDestory: true,
    item: ["minecraft:dead_horn_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_horn_coral_fan": {
    canDestory: true,
    item: ["minecraft:dead_horn_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_horn_coral_wall_fan": {
    canDestory: true,
    item: ["minecraft:dead_horn_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_tube_coral": {
    canDestory: true,
    item: ["minecraft:dead_tube_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_tube_coral_block": {
    canDestory: true,
    item: ["minecraft:dead_tube_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_tube_coral_fan": {
    canDestory: true,
    item: ["minecraft:dead_tube_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:dead_tube_coral_wall_fan": {
    canDestory: true,
    item: ["minecraft:dead_tube_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:deadbush": {
    canDestory: true,
    item: ["minecraft:wheat_seeds", { min: 0, max: 1 }, 100],
  },
  "minecraft:decorated_pot": {
    canDestory: true,
    item: ["minecraft:decorated_pot", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate": {
    canDestory: true,
    item: ["minecraft:deepslate", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:deepslate_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_brick_slab": {
    canDestory: true,
    item: ["minecraft:deepslate_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_brick_stairs": {
    canDestory: true,
    item: ["minecraft:deepslate_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_brick_wall": {
    canDestory: true,
    item: ["minecraft:deepslate_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_bricks": {
    canDestory: true,
    item: ["minecraft:deepslate_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_coal_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:coal", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_copper_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:raw_copper", { min: 2, max: 5 }, 100],
  },
  "minecraft:deepslate_diamond_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:diamond", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_emerald_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:emerald", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_gold_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:raw_gold", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_iron_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:raw_iron", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_lapis_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:lapis_lazuli", { min: 4, max: 9 }, 100],
  },
  "minecraft:deepslate_redstone_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:redstone", { min: 4, max: 5 }, 100],
  },
  "minecraft:deepslate_tile_double_slab": {
    canDestory: true,
    item: ["minecraft:deepslate_tile_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_tile_slab": {
    canDestory: true,
    item: ["minecraft:deepslate_tile_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_tile_stairs": {
    canDestory: true,
    item: ["minecraft:deepslate_tile_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_tile_wall": {
    canDestory: true,
    item: ["minecraft:deepslate_tile_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:deepslate_tiles": {
    canDestory: true,
    item: ["minecraft:deepslate_tiles", { min: 1, max: 1 }, 100],
  },
  "minecraft:deny": { canDestory: false },
  "minecraft:detector_rail": {
    canDestory: true,
    item: ["minecraft:detector_rail", { min: 1, max: 1 }, 100],
  },
  "minecraft:diamond_block": {
    canDestory: true,
    item: ["minecraft:diamond_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:diamond_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:diamond", { min: 1, max: 1 }, 100],
  },
  "minecraft:diorite": {
    canDestory: true,
    item: ["minecraft:diorite", { min: 1, max: 1 }, 100],
  },
  "minecraft:diorite_double_slab": {
    canDestory: true,
    item: ["minecraft:diorite_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:diorite_slab": {
    canDestory: true,
    item: ["minecraft:diorite_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:diorite_stairs": {
    canDestory: true,
    item: ["minecraft:diorite_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:diorite_wall": {
    canDestory: true,
    item: ["minecraft:diorite_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:dirt": { canDestory: true, item: ["minecraft:dirt", { min: 1, max: 1 }, 100] },
  "minecraft:dirt_with_roots": {
    canDestory: true,
    item: ["minecraft:dirt_with_roots", { min: 1, max: 1 }, 100],
  },
  "minecraft:dispenser": {
    canDestory: true,
    item: ["minecraft:dispenser", { min: 1, max: 1 }, 100],
  },
  "minecraft:double_cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:double_cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:dragon_egg": {
    canDestory: true,
    item: ["minecraft:dragon_egg", { min: 1, max: 1 }, 100],
  },
  "minecraft:dragon_head": {
    canDestory: true,
    item: ["minecraft:dragon_head", { min: 1, max: 1 }, 100],
  },
  "minecraft:dried_ghast": {
    canDestory: true,
    item: ["minecraft:dried_ghast", { min: 1, max: 1 }, 100],
  },
  "minecraft:dried_kelp_block": {
    canDestory: true,
    item: ["minecraft:dried_kelp_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:dripstone_block": {
    canDestory: true,
    item: ["minecraft:dripstone_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:dropper": {
    canDestory: true,
    item: ["minecraft:dropper", { min: 1, max: 1 }, 100],
  },
  "minecraft:emerald_block": {
    canDestory: true,
    item: ["minecraft:emerald_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:emerald_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:emerald", { min: 1, max: 1 }, 100],
  },
  "minecraft:enchanting_table": {
    canDestory: true,
    item: ["minecraft:enchanting_table", { min: 1, max: 1 }, 100],
  },
  "minecraft:end_brick_stairs": {
    canDestory: true,
    item: ["minecraft:end_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:end_bricks": {
    canDestory: true,
    item: ["minecraft:end_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:end_portal": { canDestory: false },
  "minecraft:end_portal_frame": { canDestory: true },
  "minecraft:end_rod": {
    canDestory: true,
    item: ["minecraft:end_rod", { min: 1, max: 1 }, 100],
  },
  "minecraft:end_stone": {
    canDestory: true,
    item: ["minecraft:end_stone", { min: 1, max: 1 }, 100],
  },
  "minecraft:end_stone_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:end_stone_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:end_stone_brick_slab": {
    canDestory: true,
    item: ["minecraft:end_stone_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:end_stone_brick_wall": {
    canDestory: true,
    item: ["minecraft:end_stone_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:ender_chest": {
    canDestory: true,
    item: ["minecraft:ender_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_chiseled_copper": {
    canDestory: true,
    item: ["minecraft:exposed_chiseled_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper": {
    canDestory: true,
    item: ["minecraft:exposed_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper_bars": {
    canDestory: true,
    item: ["minecraft:exposed_copper_bars", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper_bulb": {
    canDestory: true,
    item: ["minecraft:exposed_copper_bulb", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper_chain": {
    canDestory: true,
    item: ["minecraft:exposed_copper_chain", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper_chest": {
    canDestory: true,
    item: ["minecraft:exposed_copper_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper_door": {
    canDestory: true,
    item: ["minecraft:exposed_copper_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper_golem_statue": {
    canDestory: true,
    item: ["minecraft:exposed_copper_golem_statue", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper_grate": {
    canDestory: true,
    item: ["minecraft:exposed_copper_grate", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper_lantern": {
    canDestory: true,
    item: ["minecraft:exposed_copper_lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_copper_trapdoor": {
    canDestory: true,
    item: ["minecraft:exposed_copper_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_cut_copper": {
    canDestory: true,
    item: ["minecraft:exposed_cut_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:exposed_cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_cut_copper_stairs": {
    canDestory: true,
    item: ["minecraft:exposed_cut_copper_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_double_cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:exposed_double_cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:exposed_lightning_rod": {
    canDestory: true,
    item: ["minecraft:exposed_lightning_rod", { min: 1, max: 1 }, 100],
  },
  "minecraft:farmland": {
    canDestory: true,
    item: ["minecraft:dirt", { min: 1, max: 1 }, 100],
  },
  "minecraft:fence_gate": {
    canDestory: true,
    item: ["minecraft:fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:fern": {
    canDestory: true,
    item: ["minecraft:wheat_seeds", { min: 0, max: 1 }, 100],
  },
  "minecraft:fire": { canDestory: false },
  "minecraft:fire_coral": {
    canDestory: true,
    item: ["minecraft:fire_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:fire_coral_block": {
    canDestory: true,
    item: ["minecraft:fire_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:fire_coral_fan": {
    canDestory: true,
    item: ["minecraft:fire_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:fire_coral_wall_fan": {
    canDestory: true,
    item: ["minecraft:fire_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:firefly_bush": {
    canDestory: true,
    item: ["minecraft:firefly_bush", { min: 1, max: 1 }, 100],
  },
  "minecraft:fletching_table": {
    canDestory: true,
    item: ["minecraft:fletching_table", { min: 1, max: 1 }, 100],
  },
  "minecraft:flower_pot": {
    canDestory: true,
    item: ["minecraft:flower_pot", { min: 1, max: 1 }, 100],
  },
  "minecraft:flowering_azalea": {
    canDestory: true,
    item: ["minecraft:flowering_azalea", { min: 1, max: 1 }, 100],
  },
  "minecraft:flowing_lava": { canDestory: false },
  "minecraft:flowing_water": { canDestory: false },
  "minecraft:frame": {
    canDestory: true,
    item: ["minecraft:frame", { min: 1, max: 1 }, 100],
  },
  "minecraft:frog_spawn": {
    canDestory: true,
    item: ["minecraft:frog_spawn", { min: 1, max: 1 }, 100],
  },
  "minecraft:frosted_ice": { canDestory: true },
  "minecraft:furnace": {
    canDestory: true,
    item: ["minecraft:furnace", { min: 1, max: 1 }, 100],
  },
  "minecraft:gilded_blackstone": {
    canDestory: true,
    item: ["minecraft:gilded_blackstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:glass_pane": {
    canDestory: true,
    silkTouchLoot: ["minecraft:glass_pane", { min: 1, max: 1 }, 100],
  },
  "minecraft:glow_frame": {
    canDestory: true,
    item: ["minecraft:glow_frame", { min: 1, max: 1 }, 100],
  },
  "minecraft:glow_lichen": {
    canDestory: true,
    silkTouchLoot: ["minecraft:glow_lichen", { min: 1, max: 1 }, 100],
  },
  "minecraft:glowstone": {
    canDestory: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:glowstone_dust", { min: 2, max: 4 }, 100],
    silkTouchLoot: ["minecraft:glowstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:gold_block": {
    canDestory: true,
    item: ["minecraft:gold_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:gold_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:raw_gold", { min: 1, max: 1 }, 100],
  },
  "minecraft:golden_dandelion": {
    canDestory: true,
    item: ["minecraft:golden_dandelion", { min: 1, max: 1 }, 100],
  },
  "minecraft:golden_rail": {
    canDestory: true,
    item: ["minecraft:golden_rail", { min: 1, max: 1 }, 100],
  },
  "minecraft:granite": {
    canDestory: true,
    item: ["minecraft:granite", { min: 1, max: 1 }, 100],
  },
  "minecraft:granite_double_slab": {
    canDestory: true,
    item: ["minecraft:granite_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:granite_slab": {
    canDestory: true,
    item: ["minecraft:granite_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:granite_stairs": {
    canDestory: true,
    item: ["minecraft:granite_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:granite_wall": {
    canDestory: true,
    item: ["minecraft:granite_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:grass_block": {
    canDestory: true,
    item: ["minecraft:dirt", { min: 1, max: 1 }, 100],
    silkTouchLoot: ["minecraft:grass_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:grass_path": {
    canDestory: true,
    item: ["minecraft:dirt", { min: 1, max: 1 }, 100],
  },
  "minecraft:gravel": {
    canDestory: true,
    item: ["minecraft:gravel", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_candle": {
    canDestory: true,
    item: ["minecraft:gray_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_candle_cake": {
    canDestory: true,
    item: ["minecraft:gray_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_carpet": {
    canDestory: true,
    item: ["minecraft:gray_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_concrete": {
    canDestory: true,
    item: ["minecraft:gray_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_concrete_powder": {
    canDestory: true,
    item: ["minecraft:gray_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:gray_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_shulker_box": {
    canDestory: true,
    item: ["minecraft:gray_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:gray_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:gray_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:gray_terracotta": {
    canDestory: true,
    item: ["minecraft:gray_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_wool": {
    canDestory: true,
    item: ["minecraft:gray_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_wool_slab": {
    canDestory: true,
    item: ["minecraft:gray_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:gray_wool_stairs": {
    canDestory: true,
    item: ["minecraft:gray_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_candle": {
    canDestory: true,
    item: ["minecraft:green_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_candle_cake": {
    canDestory: true,
    item: ["minecraft:green_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_carpet": {
    canDestory: true,
    item: ["minecraft:green_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_concrete": {
    canDestory: true,
    item: ["minecraft:green_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_concrete_powder": {
    canDestory: true,
    item: ["minecraft:green_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:green_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_shulker_box": {
    canDestory: true,
    item: ["minecraft:green_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:green_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:green_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:green_terracotta": {
    canDestory: true,
    item: ["minecraft:green_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_wool": {
    canDestory: true,
    item: ["minecraft:green_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_wool_slab": {
    canDestory: true,
    item: ["minecraft:green_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:green_wool_stairs": {
    canDestory: true,
    item: ["minecraft:green_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:grindstone": {
    canDestory: true,
    item: ["minecraft:grindstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:hanging_roots": {
    canDestory: true,
    silkTouchLoot: ["minecraft:hanging_roots", { min: 1, max: 1 }, 100],
  },
  "minecraft:hardened_clay": {
    canDestory: true,
    item: ["minecraft:hardened_clay", { min: 1, max: 1 }, 100],
  },
  "minecraft:hay_bed": {
    canDestory: true,
    item: ["minecraft:hay_bed", { min: 1, max: 1 }, 100],
  },
  "minecraft:hay_block": {
    canDestory: true,
    item: ["minecraft:hay_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:heavy_core": {
    canDestory: true,
    item: ["minecraft:heavy_core", { min: 1, max: 1 }, 100],
  },
  "minecraft:heavy_weighted_pressure_plate": {
    canDestory: true,
    item: ["minecraft:heavy_weighted_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:honey_block": {
    canDestory: true,
    item: ["minecraft:honey_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:honeycomb_block": {
    canDestory: true,
    item: ["minecraft:honeycomb_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:hopper": {
    canDestory: true,
    item: ["minecraft:hopper", { min: 1, max: 1 }, 100],
  },
  "minecraft:horn_coral": {
    canDestory: true,
    item: ["minecraft:horn_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:horn_coral_block": {
    canDestory: true,
    item: ["minecraft:horn_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:horn_coral_fan": {
    canDestory: true,
    item: ["minecraft:horn_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:horn_coral_wall_fan": {
    canDestory: true,
    item: ["minecraft:horn_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:ice": {
    canDestory: true,
    silkTouchLoot: ["minecraft:ice", { min: 1, max: 1 }, 100],
  },
  "minecraft:infested_chiseled_stone_bricks": { canDestory: true },
  "minecraft:infested_cobblestone": { canDestory: true },
  "minecraft:infested_cracked_stone_bricks": { canDestory: true },
  "minecraft:infested_deepslate": { canDestory: true },
  "minecraft:infested_mossy_stone_bricks": { canDestory: true },
  "minecraft:infested_stone": { canDestory: true },
  "minecraft:infested_stone_bricks": { canDestory: true },
  "minecraft:iron_bars": {
    canDestory: true,
    item: ["minecraft:iron_bars", { min: 1, max: 1 }, 100],
  },
  "minecraft:iron_block": {
    canDestory: true,
    item: ["minecraft:iron_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:iron_chain": {
    canDestory: true,
    item: ["minecraft:iron_chain", { min: 1, max: 1 }, 100],
  },
  "minecraft:iron_door": {
    canDestory: true,
    item: ["minecraft:iron_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:iron_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 3, max: 7 },
    item: ["minecraft:raw_iron", { min: 1, max: 1 }, 100],
  },
  "minecraft:iron_trapdoor": {
    canDestory: true,
    item: ["minecraft:iron_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:jigsaw": { canDestory: false },
  "minecraft:jukebox": {
    canDestory: true,
    item: ["minecraft:jukebox", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_button": {
    canDestory: true,
    item: ["minecraft:jungle_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_door": {
    canDestory: true,
    item: ["minecraft:jungle_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_double_slab": {
    canDestory: true,
    item: ["minecraft:jungle_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_fence": {
    canDestory: true,
    item: ["minecraft:jungle_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_fence_gate": {
    canDestory: true,
    item: ["minecraft:jungle_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_hanging_sign": {
    canDestory: true,
    item: ["minecraft:jungle_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:jungle_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:jungle_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:jungle_log": {
    canDestory: true,
    item: ["minecraft:jungle_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_planks": {
    canDestory: true,
    item: ["minecraft:jungle_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_pressure_plate": {
    canDestory: true,
    item: ["minecraft:jungle_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_sapling": {
    canDestory: true,
    item: ["minecraft:jungle_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_shelf": {
    canDestory: true,
    item: ["minecraft:jungle_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_slab": {
    canDestory: true,
    item: ["minecraft:jungle_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_stairs": {
    canDestory: true,
    item: ["minecraft:jungle_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_standing_sign": {
    canDestory: true,
    item: ["minecraft:jungle_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_trapdoor": {
    canDestory: true,
    item: ["minecraft:jungle_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_wall_sign": {
    canDestory: true,
    item: ["minecraft:jungle_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:jungle_wood": {
    canDestory: true,
    item: ["minecraft:jungle_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:kelp": { canDestory: true, item: ["minecraft:kelp", { min: 1, max: 1 }, 100] },
  "minecraft:ladder": {
    canDestory: true,
    item: ["minecraft:ladder", { min: 1, max: 1 }, 100],
  },
  "minecraft:lantern": {
    canDestory: true,
    item: ["minecraft:lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:lapis_block": {
    canDestory: true,
    item: ["minecraft:lapis_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:lapis_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:lapis_lazuli", { min: 4, max: 9 }, 100],
  },
  "minecraft:large_amethyst_bud": {
    canDestory: true,
    item: ["minecraft:large_amethyst_bud", { min: 1, max: 1 }, 100],
  },
  "minecraft:large_fern": {
    canDestory: true,
    item: ["minecraft:wheat_seeds", { min: 0, max: 1 }, 100],
  },
  "minecraft:lava": { canDestory: false },
  "minecraft:leaf_litter": {
    canDestory: true,
    silkTouchLoot: ["minecraft:leaf_litter", { min: 1, max: 1 }, 100],
  },
  "minecraft:lectern": {
    canDestory: true,
    item: ["minecraft:lectern", { min: 1, max: 1 }, 100],
    HandleUseCommand: true,
  },
  "minecraft:lever": {
    canDestory: true,
    item: ["minecraft:lever", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_block_0": { canDestory: false },
  "minecraft:light_block_1": { canDestory: false },
  "minecraft:light_block_10": { canDestory: false },
  "minecraft:light_block_11": { canDestory: false },
  "minecraft:light_block_12": { canDestory: false },
  "minecraft:light_block_13": { canDestory: false },
  "minecraft:light_block_14": { canDestory: false },
  "minecraft:light_block_15": { canDestory: false },
  "minecraft:light_block_2": { canDestory: false },
  "minecraft:light_block_3": { canDestory: false },
  "minecraft:light_block_4": { canDestory: false },
  "minecraft:light_block_5": { canDestory: false },
  "minecraft:light_block_6": { canDestory: false },
  "minecraft:light_block_7": { canDestory: false },
  "minecraft:light_block_8": { canDestory: false },
  "minecraft:light_block_9": { canDestory: false },
  "minecraft:light_blue_candle": {
    canDestory: true,
    item: ["minecraft:light_blue_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_candle_cake": {
    canDestory: true,
    item: ["minecraft:light_blue_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_carpet": {
    canDestory: true,
    item: ["minecraft:light_blue_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_concrete": {
    canDestory: true,
    item: ["minecraft:light_blue_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_concrete_powder": {
    canDestory: true,
    item: ["minecraft:light_blue_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:light_blue_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_shulker_box": {
    canDestory: true,
    item: ["minecraft:light_blue_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_stained_glass": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:light_blue_stained_glass",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:light_blue_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:light_blue_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:light_blue_terracotta": {
    canDestory: true,
    item: ["minecraft:light_blue_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_wool": {
    canDestory: true,
    item: ["minecraft:light_blue_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_wool_slab": {
    canDestory: true,
    item: ["minecraft:light_blue_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_blue_wool_stairs": {
    canDestory: true,
    item: ["minecraft:light_blue_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_candle": {
    canDestory: true,
    item: ["minecraft:light_gray_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_candle_cake": {
    canDestory: true,
    item: ["minecraft:light_gray_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_carpet": {
    canDestory: true,
    item: ["minecraft:light_gray_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_concrete": {
    canDestory: true,
    item: ["minecraft:light_gray_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_concrete_powder": {
    canDestory: true,
    item: ["minecraft:light_gray_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_shulker_box": {
    canDestory: true,
    item: ["minecraft:light_gray_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_stained_glass": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:light_gray_stained_glass",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:light_gray_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:light_gray_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:light_gray_terracotta": {
    canDestory: true,
    item: ["minecraft:light_gray_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_wool": {
    canDestory: true,
    item: ["minecraft:light_gray_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_wool_slab": {
    canDestory: true,
    item: ["minecraft:light_gray_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_gray_wool_stairs": {
    canDestory: true,
    item: ["minecraft:light_gray_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:light_weighted_pressure_plate": {
    canDestory: true,
    item: ["minecraft:light_weighted_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:lightning_rod": {
    canDestory: true,
    item: ["minecraft:lightning_rod", { min: 1, max: 1 }, 100],
  },
  "minecraft:lilac": {
    canDestory: true,
    item: ["minecraft:lilac", { min: 1, max: 1 }, 100],
  },
  "minecraft:lily_of_the_valley": {
    canDestory: true,
    item: ["minecraft:lily_of_the_valley", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_candle": {
    canDestory: true,
    item: ["minecraft:lime_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_candle_cake": {
    canDestory: true,
    item: ["minecraft:lime_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_carpet": {
    canDestory: true,
    item: ["minecraft:lime_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_concrete": {
    canDestory: true,
    item: ["minecraft:lime_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_concrete_powder": {
    canDestory: true,
    item: ["minecraft:lime_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:lime_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_shulker_box": {
    canDestory: true,
    item: ["minecraft:lime_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:lime_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:lime_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:lime_terracotta": {
    canDestory: true,
    item: ["minecraft:lime_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_wool": {
    canDestory: true,
    item: ["minecraft:lime_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_wool_slab": {
    canDestory: true,
    item: ["minecraft:lime_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:lime_wool_stairs": {
    canDestory: true,
    item: ["minecraft:lime_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:lit_blast_furnace": {
    canDestory: true,
    item: ["minecraft:lit_blast_furnace", { min: 1, max: 1 }, 100],
  },
  "minecraft:lit_deepslate_redstone_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:redstone", { min: 4, max: 5 }, 100],
  },
  "minecraft:lit_furnace": {
    canDestory: true,
    item: ["minecraft:lit_furnace", { min: 1, max: 1 }, 100],
  },
  "minecraft:lit_pumpkin": {
    canDestory: true,
    item: ["minecraft:lit_pumpkin", { min: 1, max: 1 }, 100],
  },
  "minecraft:lit_redstone_lamp": {
    canDestory: true,
    item: ["minecraft:lit_redstone_lamp", { min: 1, max: 1 }, 100],
  },
  "minecraft:lit_redstone_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:redstone", { min: 4, max: 5 }, 100],
  },
  "minecraft:lit_smoker": {
    canDestory: true,
    item: ["minecraft:lit_smoker", { min: 1, max: 1 }, 100],
  },
  "minecraft:lodestone": {
    canDestory: true,
    item: ["minecraft:lodestone", { min: 1, max: 1 }, 100],
  },
  "minecraft:loom": { canDestory: true, item: ["minecraft:loom", { min: 1, max: 1 }, 100] },
  "minecraft:magenta_candle": {
    canDestory: true,
    item: ["minecraft:magenta_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_candle_cake": {
    canDestory: true,
    item: ["minecraft:magenta_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_carpet": {
    canDestory: true,
    item: ["minecraft:magenta_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_concrete": {
    canDestory: true,
    item: ["minecraft:magenta_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_concrete_powder": {
    canDestory: true,
    item: ["minecraft:magenta_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:magenta_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_shulker_box": {
    canDestory: true,
    item: ["minecraft:magenta_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:magenta_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:magenta_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:magenta_terracotta": {
    canDestory: true,
    item: ["minecraft:magenta_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_wool": {
    canDestory: true,
    item: ["minecraft:magenta_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_wool_slab": {
    canDestory: true,
    item: ["minecraft:magenta_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:magenta_wool_stairs": {
    canDestory: true,
    item: ["minecraft:magenta_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:magma": {
    canDestory: true,
    item: ["minecraft:magma", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_button": {
    canDestory: true,
    item: ["minecraft:mangrove_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_door": {
    canDestory: true,
    item: ["minecraft:mangrove_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_double_slab": {
    canDestory: true,
    item: ["minecraft:mangrove_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_fence": {
    canDestory: true,
    item: ["minecraft:mangrove_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_fence_gate": {
    canDestory: true,
    item: ["minecraft:mangrove_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_hanging_sign": {
    canDestory: true,
    item: ["minecraft:mangrove_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:mangrove_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:mangrove_propagule", { min: 1, max: 1 }, 5],
  },
  "minecraft:mangrove_log": {
    canDestory: true,
    item: ["minecraft:mangrove_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_planks": {
    canDestory: true,
    item: ["minecraft:mangrove_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_pressure_plate": {
    canDestory: true,
    item: ["minecraft:mangrove_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_propagule": {
    canDestory: true,
    item: ["minecraft:mangrove_propagule", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_roots": {
    canDestory: true,
    item: ["minecraft:mangrove_roots", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_shelf": {
    canDestory: true,
    item: ["minecraft:mangrove_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_slab": {
    canDestory: true,
    item: ["minecraft:mangrove_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_stairs": {
    canDestory: true,
    item: ["minecraft:mangrove_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_standing_sign": {
    canDestory: true,
    item: ["minecraft:mangrove_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_trapdoor": {
    canDestory: true,
    item: ["minecraft:mangrove_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_wall_sign": {
    canDestory: true,
    item: ["minecraft:mangrove_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:mangrove_wood": {
    canDestory: true,
    item: ["minecraft:mangrove_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:medium_amethyst_bud": {
    canDestory: true,
    silkTouchLoot: ["minecraft:medium_amethyst_bud", { min: 1, max: 1 }, 100],
  },
  "minecraft:melon_block": {
    canDestory: true,
    item: ["minecraft:melon_slice", { min: 3, max: 7 }, 100],
  },
  "minecraft:melon_stem": { canDestory: true },
  "minecraft:mob_spawner": { canDestory: false },
  "minecraft:moss_block": {
    canDestory: true,
    silkTouchLoot: ["minecraft:moss_block", { min: 1, max: 1 }, 100],
    item: ["minecraft:moss_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:moss_carpet": {
    canDestory: true,
    silkTouchLoot: ["minecraft:moss_carpet", { min: 1, max: 1 }, 100],
    item: ["minecraft:moss_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_cobblestone": {
    canDestory: true,
    item: ["minecraft:mossy_cobblestone", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_cobblestone_double_slab": {
    canDestory: true,
    item: ["minecraft:mossy_cobblestone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_cobblestone_slab": {
    canDestory: true,
    item: ["minecraft:mossy_cobblestone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_cobblestone_stairs": {
    canDestory: true,
    item: ["minecraft:mossy_cobblestone_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_cobblestone_wall": {
    canDestory: true,
    item: ["minecraft:mossy_cobblestone_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_stone_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:mossy_stone_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_stone_brick_slab": {
    canDestory: true,
    item: ["minecraft:mossy_stone_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_stone_brick_stairs": {
    canDestory: true,
    item: ["minecraft:mossy_stone_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_stone_brick_wall": {
    canDestory: true,
    item: ["minecraft:mossy_stone_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:mossy_stone_bricks": {
    canDestory: true,
    item: ["minecraft:mossy_stone_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:mud": { canDestory: true, item: ["minecraft:mud", { min: 1, max: 1 }, 100] },
  "minecraft:mud_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:mud_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:mud_brick_slab": {
    canDestory: true,
    item: ["minecraft:mud_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:mud_brick_stairs": {
    canDestory: true,
    item: ["minecraft:mud_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:mud_brick_wall": {
    canDestory: true,
    item: ["minecraft:mud_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:mud_bricks": {
    canDestory: true,
    item: ["minecraft:mud_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:muddy_mangrove_roots": {
    canDestory: true,
    item: ["minecraft:muddy_mangrove_roots", { min: 1, max: 1 }, 100],
  },
  "minecraft:mushroom_stem": {
    canDestory: true,
    item: ["minecraft:mushroom_stem", { min: 1, max: 1 }, 100],
  },
  "minecraft:mycelium": {
    canDestory: true,
    item: ["minecraft:dirt", { min: 1, max: 1 }, 100],
    silkTouchLoot: ["minecraft:mycelium", { min: 1, max: 1 }, 100],
  },
  "minecraft:nether_brick": {
    canDestory: true,
    item: ["minecraft:nether_brick", { min: 1, max: 1 }, 100],
  },
  "minecraft:nether_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:nether_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:nether_brick_fence": {
    canDestory: true,
    item: ["minecraft:nether_brick_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:nether_brick_slab": {
    canDestory: true,
    item: ["minecraft:nether_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:nether_brick_stairs": {
    canDestory: true,
    item: ["minecraft:nether_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:nether_brick_wall": {
    canDestory: true,
    item: ["minecraft:nether_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:nether_gold_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:gold_nugget", { min: 2, max: 6 }, 100],
  },
  "minecraft:nether_sprouts": {
    canDestory: true,
    item: ["minecraft:nether_sprouts", { min: 1, max: 1 }, 100],
  },
  "minecraft:nether_wart": {
    canDestory: true,
    item: ["minecraft:nether_wart", { min: 2, max: 4 }, 100],
  },
  "minecraft:nether_wart_block": {
    canDestory: true,
    item: ["minecraft:nether_wart_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:netherite_block": {
    canDestory: true,
    item: ["minecraft:netherite_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:netherrack": {
    canDestory: true,
    item: ["minecraft:netherrack", { min: 1, max: 1 }, 100],
  },
  "minecraft:normal_stone_double_slab": {
    canDestory: true,
    item: ["minecraft:normal_stone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:normal_stone_slab": {
    canDestory: true,
    item: ["minecraft:normal_stone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:normal_stone_stairs": {
    canDestory: true,
    item: ["minecraft:normal_stone_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:noteblock": {
    canDestory: true,
    item: ["minecraft:noteblock", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_double_slab": {
    canDestory: true,
    item: ["minecraft:oak_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_fence": {
    canDestory: true,
    item: ["minecraft:oak_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_hanging_sign": {
    canDestory: true,
    item: ["minecraft:oak_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:oak_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:oak_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:oak_log": {
    canDestory: true,
    item: ["minecraft:oak_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_planks": {
    canDestory: true,
    item: ["minecraft:oak_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_sapling": {
    canDestory: true,
    item: ["minecraft:oak_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_shelf": {
    canDestory: true,
    item: ["minecraft:oak_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_slab": {
    canDestory: true,
    item: ["minecraft:oak_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_stairs": {
    canDestory: true,
    item: ["minecraft:oak_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:oak_wood": {
    canDestory: true,
    item: ["minecraft:oak_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:observer": {
    canDestory: true,
    item: ["minecraft:observer", { min: 1, max: 1 }, 100],
  },
  "minecraft:obsidian": {
    canDestory: true,
    item: ["minecraft:obsidian", { min: 1, max: 1 }, 100],
  },
  "minecraft:ochre_froglight": {
    canDestory: true,
    item: ["minecraft:ochre_froglight", { min: 1, max: 1 }, 100],
  },
  "minecraft:open_eyeblossom": {
    canDestory: true,
    item: ["minecraft:open_eyeblossom", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_candle": {
    canDestory: true,
    item: ["minecraft:orange_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_candle_cake": {
    canDestory: true,
    item: ["minecraft:orange_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_carpet": {
    canDestory: true,
    item: ["minecraft:orange_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_concrete": {
    canDestory: true,
    item: ["minecraft:orange_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_concrete_powder": {
    canDestory: true,
    item: ["minecraft:orange_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:orange_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_shulker_box": {
    canDestory: true,
    item: ["minecraft:orange_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:orange_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:orange_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:orange_terracotta": {
    canDestory: true,
    item: ["minecraft:orange_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_tulip": {
    canDestory: true,
    item: ["minecraft:orange_tulip", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_wool": {
    canDestory: true,
    item: ["minecraft:orange_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_wool_slab": {
    canDestory: true,
    item: ["minecraft:orange_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:orange_wool_stairs": {
    canDestory: true,
    item: ["minecraft:orange_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxeye_daisy": {
    canDestory: true,
    item: ["minecraft:oxeye_daisy", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_chiseled_copper": {
    canDestory: true,
    item: ["minecraft:oxidized_chiseled_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper": {
    canDestory: true,
    item: ["minecraft:oxidized_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper_bars": {
    canDestory: true,
    item: ["minecraft:oxidized_copper_bars", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper_bulb": {
    canDestory: true,
    item: ["minecraft:oxidized_copper_bulb", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper_chain": {
    canDestory: true,
    item: ["minecraft:oxidized_copper_chain", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper_chest": {
    canDestory: true,
    item: ["minecraft:oxidized_copper_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper_door": {
    canDestory: true,
    item: ["minecraft:oxidized_copper_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper_golem_statue": {
    canDestory: true,
    item: ["minecraft:oxidized_copper_golem_statue", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper_grate": {
    canDestory: true,
    item: ["minecraft:oxidized_copper_grate", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper_lantern": {
    canDestory: true,
    item: ["minecraft:oxidized_copper_lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_copper_trapdoor": {
    canDestory: true,
    item: ["minecraft:oxidized_copper_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_cut_copper": {
    canDestory: true,
    item: ["minecraft:oxidized_cut_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:oxidized_cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_cut_copper_stairs": {
    canDestory: true,
    item: ["minecraft:oxidized_cut_copper_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:oxidized_double_cut_copper_slab": {
    canDestory: true,
    item: [
      "minecraft:oxidized_double_cut_copper_slab",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:oxidized_lightning_rod": {
    canDestory: true,
    item: ["minecraft:oxidized_lightning_rod", { min: 1, max: 1 }, 100],
  },
  "minecraft:packed_ice": {
    canDestory: true,
    silkTouchLoot: ["minecraft:packed_ice", { min: 1, max: 1 }, 100],
  },
  "minecraft:packed_mud": {
    canDestory: true,
    item: ["minecraft:packed_mud", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_hanging_moss": {
    canDestory: true,
    silkTouchLoot: ["minecraft:pale_hanging_moss", { min: 1, max: 1 }, 100],
    item: ["minecraft:pale_hanging_moss", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_moss_block": {
    canDestory: true,
    silkTouchLoot: ["minecraft:pale_moss_block", { min: 1, max: 1 }, 100],
    item: ["minecraft:pale_moss_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_moss_carpet": {
    canDestory: true,
    silkTouchLoot: ["minecraft:pale_moss_carpet", { min: 1, max: 1 }, 100],
    item: ["minecraft:pale_moss_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_button": {
    canDestory: true,
    item: ["minecraft:pale_oak_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_door": {
    canDestory: true,
    item: ["minecraft:pale_oak_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_double_slab": {
    canDestory: true,
    item: ["minecraft:pale_oak_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_fence": {
    canDestory: true,
    item: ["minecraft:pale_oak_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_fence_gate": {
    canDestory: true,
    item: ["minecraft:pale_oak_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_hanging_sign": {
    canDestory: true,
    item: ["minecraft:pale_oak_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:pale_oak_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:pale_oak_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:pale_oak_log": {
    canDestory: true,
    item: ["minecraft:pale_oak_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_planks": {
    canDestory: true,
    item: ["minecraft:pale_oak_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_pressure_plate": {
    canDestory: true,
    item: ["minecraft:pale_oak_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_sapling": {
    canDestory: true,
    item: ["minecraft:pale_oak_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_shelf": {
    canDestory: true,
    item: ["minecraft:pale_oak_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_slab": {
    canDestory: true,
    item: ["minecraft:pale_oak_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_stairs": {
    canDestory: true,
    item: ["minecraft:pale_oak_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_standing_sign": {
    canDestory: true,
    item: ["minecraft:pale_oak_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_trapdoor": {
    canDestory: true,
    item: ["minecraft:pale_oak_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_wall_sign": {
    canDestory: true,
    item: ["minecraft:pale_oak_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:pale_oak_wood": {
    canDestory: true,
    item: ["minecraft:pale_oak_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:pearlescent_froglight": {
    canDestory: true,
    item: ["minecraft:pearlescent_froglight", { min: 1, max: 1 }, 100],
  },
  "minecraft:peony": {
    canDestory: true,
    item: ["minecraft:peony", { min: 1, max: 1 }, 100],
  },
  "minecraft:petrified_oak_double_slab": {
    canDestory: true,
    item: ["minecraft:petrified_oak_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:petrified_oak_slab": {
    canDestory: true,
    item: ["minecraft:petrified_oak_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:piglin_head": {
    canDestory: true,
    item: ["minecraft:piglin_head", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_candle": {
    canDestory: true,
    item: ["minecraft:pink_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_candle_cake": {
    canDestory: true,
    item: ["minecraft:pink_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_carpet": {
    canDestory: true,
    item: ["minecraft:pink_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_concrete": {
    canDestory: true,
    item: ["minecraft:pink_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_concrete_powder": {
    canDestory: true,
    item: ["minecraft:pink_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:pink_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_petals": {
    canDestory: true,
    silkTouchLoot: ["minecraft:pink_petals", { min: 1, max: 1 }, 100],
    item: ["minecraft:pink_petals", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_shulker_box": {
    canDestory: true,
    item: ["minecraft:pink_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:pink_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:pink_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:pink_terracotta": {
    canDestory: true,
    item: ["minecraft:pink_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_tulip": {
    canDestory: true,
    item: ["minecraft:pink_tulip", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_wool": {
    canDestory: true,
    item: ["minecraft:pink_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_wool_slab": {
    canDestory: true,
    item: ["minecraft:pink_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:pink_wool_stairs": {
    canDestory: true,
    item: ["minecraft:pink_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:piston": {
    canDestory: true,
    item: ["minecraft:piston", { min: 1, max: 1 }, 100],
  },
  "minecraft:piston_arm_collision": { canDestory: false },
  "minecraft:pitcher_crop": {
    canDestory: true,
    item: ["minecraft:pitcher_pod", { min: 1, max: 1 }, 100],
  },
  "minecraft:pitcher_plant": {
    canDestory: true,
    item: ["minecraft:pitcher_plant", { min: 1, max: 1 }, 100],
  },
  "minecraft:player_head": {
    canDestory: true,
    item: ["minecraft:player_head", { min: 1, max: 1 }, 100],
  },
  "minecraft:podzol": {
    canDestory: true,
    item: ["minecraft:dirt", { min: 1, max: 1 }, 100],
    silkTouchLoot: ["minecraft:podzol", { min: 1, max: 1 }, 100],
  },
  "minecraft:pointed_dripstone": {
    canDestory: true,
    item: ["minecraft:pointed_dripstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_andesite": {
    canDestory: true,
    item: ["minecraft:polished_andesite", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_andesite_double_slab": {
    canDestory: true,
    item: ["minecraft:polished_andesite_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_andesite_slab": {
    canDestory: true,
    item: ["minecraft:polished_andesite_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_andesite_stairs": {
    canDestory: true,
    item: ["minecraft:polished_andesite_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_basalt": {
    canDestory: true,
    item: ["minecraft:polished_basalt", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_blackstone": {
    canDestory: true,
    item: ["minecraft:polished_blackstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_blackstone_brick_double_slab": {
    canDestory: true,
    item: [
      "minecraft:polished_blackstone_brick_double_slab",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:polished_blackstone_brick_slab": {
    canDestory: true,
    item: ["minecraft:polished_blackstone_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_blackstone_brick_stairs": {
    canDestory: true,
    item: [
      "minecraft:polished_blackstone_brick_stairs",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:polished_blackstone_brick_wall": {
    canDestory: true,
    item: ["minecraft:polished_blackstone_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_blackstone_bricks": {
    canDestory: true,
    item: ["minecraft:polished_blackstone_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_blackstone_button": {
    canDestory: true,
    item: ["minecraft:polished_blackstone_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_blackstone_double_slab": {
    canDestory: true,
    item: [
      "minecraft:polished_blackstone_double_slab",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:polished_blackstone_pressure_plate": {
    canDestory: true,
    item: [
      "minecraft:polished_blackstone_pressure_plate",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:polished_blackstone_slab": {
    canDestory: true,
    item: ["minecraft:polished_blackstone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_blackstone_stairs": {
    canDestory: true,
    item: ["minecraft:polished_blackstone_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_blackstone_wall": {
    canDestory: true,
    item: ["minecraft:polished_blackstone_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_cinnabar": {
    canDestory: true,
    item: ["minecraft:polished_cinnabar", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_cinnabar_double_slab": {
    canDestory: true,
    item: ["minecraft:polished_cinnabar_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_cinnabar_slab": {
    canDestory: true,
    item: ["minecraft:polished_cinnabar_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_cinnabar_stairs": {
    canDestory: true,
    item: ["minecraft:polished_cinnabar_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_cinnabar_wall": {
    canDestory: true,
    item: ["minecraft:polished_cinnabar_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_deepslate": {
    canDestory: true,
    item: ["minecraft:polished_deepslate", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_deepslate_double_slab": {
    canDestory: true,
    item: ["minecraft:polished_deepslate_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_deepslate_slab": {
    canDestory: true,
    item: ["minecraft:polished_deepslate_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_deepslate_stairs": {
    canDestory: true,
    item: ["minecraft:polished_deepslate_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_deepslate_wall": {
    canDestory: true,
    item: ["minecraft:polished_deepslate_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_diorite": {
    canDestory: true,
    item: ["minecraft:polished_diorite", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_diorite_double_slab": {
    canDestory: true,
    item: ["minecraft:polished_diorite_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_diorite_slab": {
    canDestory: true,
    item: ["minecraft:polished_diorite_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_diorite_stairs": {
    canDestory: true,
    item: ["minecraft:polished_diorite_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_granite": {
    canDestory: true,
    item: ["minecraft:polished_granite", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_granite_double_slab": {
    canDestory: true,
    item: ["minecraft:polished_granite_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_granite_slab": {
    canDestory: true,
    item: ["minecraft:polished_granite_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_granite_stairs": {
    canDestory: true,
    item: ["minecraft:polished_granite_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_sulfur": {
    canDestory: true,
    item: ["minecraft:polished_sulfur", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_sulfur_double_slab": {
    canDestory: true,
    item: ["minecraft:polished_sulfur_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_sulfur_slab": {
    canDestory: true,
    item: ["minecraft:polished_sulfur_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_sulfur_stairs": {
    canDestory: true,
    item: ["minecraft:polished_sulfur_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_sulfur_wall": {
    canDestory: true,
    item: ["minecraft:polished_sulfur_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_tuff": {
    canDestory: true,
    item: ["minecraft:polished_tuff", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_tuff_double_slab": {
    canDestory: true,
    item: ["minecraft:polished_tuff_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_tuff_slab": {
    canDestory: true,
    item: ["minecraft:polished_tuff_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_tuff_stairs": {
    canDestory: true,
    item: ["minecraft:polished_tuff_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:polished_tuff_wall": {
    canDestory: true,
    item: ["minecraft:polished_tuff_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:polypore": {
    canDestory: true,
    item: ["minecraft:polypore", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_button": {
    canDestory: true,
    item: ["minecraft:poplar_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_door": {
    canDestory: true,
    item: ["minecraft:poplar_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_fence": {
    canDestory: true,
    item: ["minecraft:poplar_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_fence_gate": {
    canDestory: true,
    item: ["minecraft:poplar_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_hanging_sign": {
    canDestory: true,
    item: ["minecraft:poplar_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:poplar_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:poplar_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:poplar_log": {
    canDestory: true,
    item: ["minecraft:poplar_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_orange_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:poplar_orange_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:poplar_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:poplar_planks": {
    canDestory: true,
    item: ["minecraft:poplar_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_pressure_plate": {
    canDestory: true,
    item: ["minecraft:poplar_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_red_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:poplar_red_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:poplar_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:poplar_sapling": {
    canDestory: true,
    item: ["minecraft:poplar_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_shelf": {
    canDestory: true,
    item: ["minecraft:poplar_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_slab": {
    canDestory: true,
    item: ["minecraft:poplar_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_stairs": {
    canDestory: true,
    item: ["minecraft:poplar_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_trapdoor": {
    canDestory: true,
    item: ["minecraft:poplar_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_wood": {
    canDestory: true,
    item: ["minecraft:poplar_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:poplar_yellow_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:poplar_yellow_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:poplar_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:poppy": {
    canDestory: true,
    item: ["minecraft:poppy", { min: 1, max: 1 }, 100],
  },
  "minecraft:portal": { canDestory: false },
  "minecraft:potatoes": {
    canDestory: true,
    item: ["minecraft:potato", { min: 0, max: 1 }, 100],
  },
  "minecraft:potent_sulfur": {
    canDestory: true,
    item: ["minecraft:potent_sulfur", { min: 1, max: 1 }, 100],
  },
  "minecraft:powder_snow": { canDestory: true },
  "minecraft:powered_comparator": { canDestory: false },
  "minecraft:powered_repeater": { canDestory: false },
  "minecraft:prismarine": {
    canDestory: true,
    item: ["minecraft:prismarine", { min: 1, max: 1 }, 100],
  },
  "minecraft:prismarine_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:prismarine_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:prismarine_brick_slab": {
    canDestory: true,
    item: ["minecraft:prismarine_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:prismarine_bricks": {
    canDestory: true,
    item: ["minecraft:prismarine_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:prismarine_bricks_stairs": {
    canDestory: true,
    item: ["minecraft:prismarine_bricks_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:prismarine_double_slab": {
    canDestory: true,
    item: ["minecraft:prismarine_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:prismarine_slab": {
    canDestory: true,
    item: ["minecraft:prismarine_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:prismarine_stairs": {
    canDestory: true,
    item: ["minecraft:prismarine_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:prismarine_wall": {
    canDestory: true,
    item: ["minecraft:prismarine_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:pumpkin": {
    canDestory: true,
    item: ["minecraft:pumpkin", { min: 1, max: 1 }, 100],
  },
  "minecraft:pumpkin_stem": { canDestory: true },
  "minecraft:purple_candle": {
    canDestory: true,
    item: ["minecraft:purple_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_candle_cake": {
    canDestory: true,
    item: ["minecraft:purple_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_carpet": {
    canDestory: true,
    item: ["minecraft:purple_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_concrete": {
    canDestory: true,
    item: ["minecraft:purple_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_concrete_powder": {
    canDestory: true,
    item: ["minecraft:purple_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:purple_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_shulker_box": {
    canDestory: true,
    item: ["minecraft:purple_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:purple_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:purple_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:purple_terracotta": {
    canDestory: true,
    item: ["minecraft:purple_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_wool": {
    canDestory: true,
    item: ["minecraft:purple_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_wool_slab": {
    canDestory: true,
    item: ["minecraft:purple_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:purple_wool_stairs": {
    canDestory: true,
    item: ["minecraft:purple_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:purpur_block": {
    canDestory: true,
    item: ["minecraft:purpur_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:purpur_double_slab": {
    canDestory: true,
    item: ["minecraft:purpur_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:purpur_pillar": {
    canDestory: true,
    item: ["minecraft:purpur_pillar", { min: 1, max: 1 }, 100],
  },
  "minecraft:purpur_slab": {
    canDestory: true,
    item: ["minecraft:purpur_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:purpur_stairs": {
    canDestory: true,
    item: ["minecraft:purpur_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:quartz_block": {
    canDestory: true,
    item: ["minecraft:quartz_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:quartz_bricks": {
    canDestory: true,
    item: ["minecraft:quartz_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:quartz_double_slab": {
    canDestory: true,
    item: ["minecraft:quartz_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:quartz_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:quartz", { min: 1, max: 1 }, 100],
  },
  "minecraft:quartz_pillar": {
    canDestory: true,
    item: ["minecraft:quartz_pillar", { min: 1, max: 1 }, 100],
  },
  "minecraft:quartz_slab": {
    canDestory: true,
    item: ["minecraft:quartz_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:quartz_stairs": {
    canDestory: true,
    item: ["minecraft:quartz_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:rail": { canDestory: true, item: ["minecraft:rail", { min: 1, max: 1 }, 100] },
  "minecraft:raw_copper_block": {
    canDestory: true,
    item: ["minecraft:raw_copper_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:raw_gold_block": {
    canDestory: true,
    item: ["minecraft:raw_gold_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:raw_iron_block": {
    canDestory: true,
    item: ["minecraft:raw_iron_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_bush": {
    canDestory: true,
    item: ["minecraft:red_bush", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_candle": {
    canDestory: true,
    item: ["minecraft:red_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_candle_cake": {
    canDestory: true,
    item: ["minecraft:red_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_carpet": {
    canDestory: true,
    item: ["minecraft:red_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_concrete": {
    canDestory: true,
    item: ["minecraft:red_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_concrete_powder": {
    canDestory: true,
    item: ["minecraft:red_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:red_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_mushroom": {
    canDestory: true,
    item: ["minecraft:red_mushroom", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_mushroom_block": {
    canDestory: true,
    item: ["minecraft:red_mushroom_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_nether_brick": {
    canDestory: true,
    item: ["minecraft:red_nether_brick", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_nether_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:red_nether_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_nether_brick_slab": {
    canDestory: true,
    item: ["minecraft:red_nether_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_nether_brick_stairs": {
    canDestory: true,
    item: ["minecraft:red_nether_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_nether_brick_wall": {
    canDestory: true,
    item: ["minecraft:red_nether_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_sand": {
    canDestory: true,
    item: ["minecraft:red_sand", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_sandstone": {
    canDestory: true,
    item: ["minecraft:red_sandstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_sandstone_double_slab": {
    canDestory: true,
    item: ["minecraft:red_sandstone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_sandstone_slab": {
    canDestory: true,
    item: ["minecraft:red_sandstone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_sandstone_stairs": {
    canDestory: true,
    item: ["minecraft:red_sandstone_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_sandstone_wall": {
    canDestory: true,
    item: ["minecraft:red_sandstone_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_shulker_box": {
    canDestory: true,
    item: ["minecraft:red_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:red_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:red_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:red_terracotta": {
    canDestory: true,
    item: ["minecraft:red_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_tulip": {
    canDestory: true,
    item: ["minecraft:red_tulip", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_wool": {
    canDestory: true,
    item: ["minecraft:red_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_wool_slab": {
    canDestory: true,
    item: ["minecraft:red_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:red_wool_stairs": {
    canDestory: true,
    item: ["minecraft:red_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:redstone_block": {
    canDestory: true,
    item: ["minecraft:redstone_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:redstone_lamp": {
    canDestory: true,
    item: ["minecraft:redstone_lamp", { min: 1, max: 1 }, 100],
  },
  "minecraft:redstone_ore": {
    canDestory: true,
    fortune: true,
    lootOrb: { min: 0, max: 2 },
    item: ["minecraft:redstone", { min: 4, max: 5 }, 100],
  },
  "minecraft:redstone_torch": { canDestory: false },
  "minecraft:redstone_wire": { canDestory: false },
  "minecraft:reeds": {
    canDestory: true,
    item: ["minecraft:reeds", { min: 1, max: 1 }, 100],
  },
  "minecraft:reinforced_deepslate": {
    canDestory: true,
    item: ["minecraft:reinforced_deepslate", { min: 1, max: 1 }, 100],
  },
  "minecraft:repeating_command_block": { canDestory: false },
  "minecraft:resin_block": {
    canDestory: true,
    item: ["minecraft:resin_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:resin_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:resin_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:resin_brick_slab": {
    canDestory: true,
    item: ["minecraft:resin_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:resin_brick_stairs": {
    canDestory: true,
    item: ["minecraft:resin_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:resin_brick_wall": {
    canDestory: true,
    item: ["minecraft:resin_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:resin_bricks": {
    canDestory: true,
    item: ["minecraft:resin_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:resin_clump": {
    canDestory: true,
    item: ["minecraft:resin_clump", { min: 1, max: 1 }, 100],
  },
  "minecraft:respawn_anchor": {
    canDestory: true,
    item: ["minecraft:respawn_anchor", { min: 1, max: 1 }, 100],
  },
  "minecraft:rose_bush": {
    canDestory: true,
    item: ["minecraft:rose_bush", { min: 1, max: 1 }, 100],
  },
  "minecraft:sand": { canDestory: true, item: ["minecraft:sand", { min: 1, max: 1 }, 100] },
  "minecraft:sandstone": {
    canDestory: true,
    item: ["minecraft:sandstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:sandstone_double_slab": {
    canDestory: true,
    item: ["minecraft:sandstone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:sandstone_slab": {
    canDestory: true,
    item: ["minecraft:sandstone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:sandstone_stairs": {
    canDestory: true,
    item: ["minecraft:sandstone_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:sandstone_wall": {
    canDestory: true,
    item: ["minecraft:sandstone_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:scaffolding": {
    canDestory: true,
    item: ["minecraft:scaffolding", { min: 1, max: 1 }, 100],
  },
  "minecraft:sculk": {
    canDestory: true,
    silkTouchLoot: ["minecraft:sculk", { min: 1, max: 1 }, 100],
  },
  "minecraft:sculk_catalyst": {
    canDestory: true,
    silkTouchLoot: ["minecraft:sculk_catalyst", { min: 1, max: 1 }, 100],
  },
  "minecraft:sculk_sensor": {
    canDestory: true,
    silkTouchLoot: ["minecraft:sculk_sensor", { min: 1, max: 1 }, 100],
  },
  "minecraft:sculk_shrieker": {
    canDestory: true,
    silkTouchLoot: ["minecraft:sculk_shrieker", { min: 1, max: 1 }, 100],
  },
  "minecraft:sculk_vein": {
    canDestory: true,
    silkTouchLoot: ["minecraft:sculk_vein", { min: 1, max: 1 }, 100],
  },
  "minecraft:sea_lantern": {
    canDestory: true,
    silkTouchLoot: ["minecraft:sea_lantern", { min: 1, max: 1 }, 100],
    item: ["minecraft:prismarine_crystals", { min: 1, max: 3 }, 100],
  },
  "minecraft:sea_pickle": {
    canDestory: true,
    item: ["minecraft:sea_pickle", { min: 1, max: 4 }, 100],
  },
  "minecraft:seagrass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:seagrass", { min: 1, max: 1 }, 100],
    item: ["minecraft:seagrass", { min: 1, max: 1 }, 100],
  },
  "minecraft:short_dry_grass": {
    canDestory: true,
    item: ["minecraft:wheat_seeds", { min: 0, max: 1 }, 100],
  },
  "minecraft:short_grass": {
    canDestory: true,
    item: ["minecraft:wheat_seeds", { min: 0, max: 1 }, 100],
  },
  "minecraft:shroomlight": {
    canDestory: true,
    item: ["minecraft:shroomlight", { min: 1, max: 1 }, 100],
  },
  "minecraft:silver_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:silver_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:skeleton_skull": {
    canDestory: true,
    item: ["minecraft:skeleton_skull", { min: 1, max: 1 }, 100],
  },
  "minecraft:slime": {
    canDestory: true,
    item: ["minecraft:slime", { min: 1, max: 1 }, 100],
  },
  "minecraft:small_amethyst_bud": {
    canDestory: true,
    item: ["minecraft:small_amethyst_bud", { min: 1, max: 1 }, 100],
  },
  "minecraft:small_dripleaf_block": {
    canDestory: true,
    silkTouchLoot: ["minecraft:small_dripleaf_block", { min: 1, max: 1 }, 100],
    item: ["minecraft:small_dripleaf_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:smithing_table": {
    canDestory: true,
    item: ["minecraft:smithing_table", { min: 1, max: 1 }, 100],
  },
  "minecraft:smoker": {
    canDestory: true,
    item: ["minecraft:smoker", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_basalt": {
    canDestory: true,
    item: ["minecraft:smooth_basalt", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_quartz": {
    canDestory: true,
    item: ["minecraft:smooth_quartz", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_quartz_double_slab": {
    canDestory: true,
    item: ["minecraft:smooth_quartz_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_quartz_slab": {
    canDestory: true,
    item: ["minecraft:smooth_quartz_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_quartz_stairs": {
    canDestory: true,
    item: ["minecraft:smooth_quartz_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_red_sandstone": {
    canDestory: true,
    item: ["minecraft:smooth_red_sandstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_red_sandstone_double_slab": {
    canDestory: true,
    item: [
      "minecraft:smooth_red_sandstone_double_slab",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:smooth_red_sandstone_slab": {
    canDestory: true,
    item: ["minecraft:smooth_red_sandstone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_red_sandstone_stairs": {
    canDestory: true,
    item: ["minecraft:smooth_red_sandstone_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_sandstone": {
    canDestory: true,
    item: ["minecraft:smooth_sandstone", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_sandstone_double_slab": {
    canDestory: true,
    item: ["minecraft:smooth_sandstone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_sandstone_slab": {
    canDestory: true,
    item: ["minecraft:smooth_sandstone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_sandstone_stairs": {
    canDestory: true,
    item: ["minecraft:smooth_sandstone_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_stone": {
    canDestory: true,
    item: ["minecraft:smooth_stone", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_stone_double_slab": {
    canDestory: true,
    item: ["minecraft:smooth_stone_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:smooth_stone_slab": {
    canDestory: true,
    item: ["minecraft:smooth_stone_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:sniffer_egg": {
    canDestory: true,
    item: ["minecraft:sniffer_egg", { min: 1, max: 1 }, 100],
  },
  "minecraft:snow": {
    canDestory: true,
    item: ["minecraft:snowball", { min: 4, max: 4 }, 100],
  },
  "minecraft:snow_layer": {
    canDestory: true,
    item: ["minecraft:snowball", { min: 0, max: 1 }, 100],
  },
  "minecraft:soul_campfire": {
    canDestory: true,
    item: ["minecraft:soul_campfire", { min: 1, max: 1 }, 100],
  },
  "minecraft:soul_fire": { canDestory: false },
  "minecraft:soul_lantern": {
    canDestory: true,
    item: ["minecraft:soul_lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:soul_sand": {
    canDestory: true,
    item: ["minecraft:soul_sand", { min: 1, max: 1 }, 100],
  },
  "minecraft:soul_soil": {
    canDestory: true,
    item: ["minecraft:soul_soil", { min: 1, max: 1 }, 100],
  },
  "minecraft:soul_torch": { canDestory: false },
  "minecraft:sponge": {
    canDestory: true,
    item: ["minecraft:sponge", { min: 1, max: 1 }, 100],
  },
  "minecraft:spore_blossom": {
    canDestory: true,
    silkTouchLoot: ["minecraft:spore_blossom", { min: 1, max: 1 }, 100],
    item: ["minecraft:spore_blossom", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_button": {
    canDestory: true,
    item: ["minecraft:spruce_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_door": {
    canDestory: true,
    item: ["minecraft:spruce_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_double_slab": {
    canDestory: true,
    item: ["minecraft:spruce_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_fence": {
    canDestory: true,
    item: ["minecraft:spruce_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_fence_gate": {
    canDestory: true,
    item: ["minecraft:spruce_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_hanging_sign": {
    canDestory: true,
    item: ["minecraft:spruce_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_leaves": {
    canDestory: true,
    silkTouchLoot: ["minecraft:spruce_leaves", { min: 1, max: 1 }, 100],
    item: ["minecraft:spruce_sapling", { min: 1, max: 1 }, 5],
  },
  "minecraft:spruce_log": {
    canDestory: true,
    item: ["minecraft:spruce_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_planks": {
    canDestory: true,
    item: ["minecraft:spruce_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_pressure_plate": {
    canDestory: true,
    item: ["minecraft:spruce_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_sapling": {
    canDestory: true,
    item: ["minecraft:spruce_sapling", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_shelf": {
    canDestory: true,
    item: ["minecraft:spruce_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_slab": {
    canDestory: true,
    item: ["minecraft:spruce_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_stairs": {
    canDestory: true,
    item: ["minecraft:spruce_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_standing_sign": {
    canDestory: true,
    item: ["minecraft:spruce_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_trapdoor": {
    canDestory: true,
    item: ["minecraft:spruce_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_wall_sign": {
    canDestory: true,
    item: ["minecraft:spruce_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:spruce_wood": {
    canDestory: true,
    item: ["minecraft:spruce_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:standing_banner": {
    canDestory: true,
    item: ["minecraft:standing_banner", { min: 1, max: 1 }, 100],
  },
  "minecraft:standing_sign": {
    canDestory: true,
    item: ["minecraft:standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:sticky_piston": {
    canDestory: true,
    item: ["minecraft:sticky_piston", { min: 1, max: 1 }, 100],
  },
  "minecraft:sticky_piston_arm_collision": { canDestory: false },
  "minecraft:stone": {
    canDestory: true,
    silkTouchLoot: ["minecraft:stone", { min: 1, max: 1 }, 100],
    item: ["minecraft:cobblestone", { min: 1, max: 1 }, 100],
  },
  "minecraft:stone_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:stone_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:stone_brick_slab": {
    canDestory: true,
    item: ["minecraft:stone_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:stone_brick_stairs": {
    canDestory: true,
    item: ["minecraft:stone_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:stone_brick_wall": {
    canDestory: true,
    item: ["minecraft:stone_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:stone_bricks": {
    canDestory: true,
    item: ["minecraft:stone_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:stone_button": {
    canDestory: true,
    item: ["minecraft:stone_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:stone_pressure_plate": {
    canDestory: true,
    item: ["minecraft:stone_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:stone_stairs": {
    canDestory: true,
    item: ["minecraft:stone_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:stonecutter_block": {
    canDestory: true,
    item: ["minecraft:stonecutter_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:straw_bed": {
    canDestory: true,
    item: ["minecraft:straw_bed", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_acacia_log": {
    canDestory: true,
    item: ["minecraft:stripped_acacia_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_acacia_wood": {
    canDestory: true,
    item: ["minecraft:stripped_acacia_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_bamboo_block": {
    canDestory: true,
    item: ["minecraft:stripped_bamboo_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_birch_log": {
    canDestory: true,
    item: ["minecraft:stripped_birch_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_birch_wood": {
    canDestory: true,
    item: ["minecraft:stripped_birch_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_cherry_log": {
    canDestory: true,
    item: ["minecraft:stripped_cherry_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_cherry_wood": {
    canDestory: true,
    item: ["minecraft:stripped_cherry_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_crimson_hyphae": {
    canDestory: true,
    item: ["minecraft:stripped_crimson_hyphae", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_crimson_stem": {
    canDestory: true,
    item: ["minecraft:stripped_crimson_stem", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_dark_oak_log": {
    canDestory: true,
    item: ["minecraft:stripped_dark_oak_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_dark_oak_wood": {
    canDestory: true,
    item: ["minecraft:stripped_dark_oak_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_jungle_log": {
    canDestory: true,
    item: ["minecraft:stripped_jungle_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_jungle_wood": {
    canDestory: true,
    item: ["minecraft:stripped_jungle_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_mangrove_log": {
    canDestory: true,
    item: ["minecraft:stripped_mangrove_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_mangrove_wood": {
    canDestory: true,
    item: ["minecraft:stripped_mangrove_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_oak_log": {
    canDestory: true,
    item: ["minecraft:stripped_oak_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_oak_wood": {
    canDestory: true,
    item: ["minecraft:stripped_oak_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_pale_oak_log": {
    canDestory: true,
    item: ["minecraft:stripped_pale_oak_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_pale_oak_wood": {
    canDestory: true,
    item: ["minecraft:stripped_pale_oak_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_poplar_log": {
    canDestory: true,
    item: ["minecraft:stripped_poplar_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_poplar_wood": {
    canDestory: true,
    item: ["minecraft:stripped_poplar_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_spruce_log": {
    canDestory: true,
    item: ["minecraft:stripped_spruce_log", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_spruce_wood": {
    canDestory: true,
    item: ["minecraft:stripped_spruce_wood", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_warped_hyphae": {
    canDestory: true,
    item: ["minecraft:stripped_warped_hyphae", { min: 1, max: 1 }, 100],
  },
  "minecraft:stripped_warped_stem": {
    canDestory: true,
    item: ["minecraft:stripped_warped_stem", { min: 1, max: 1 }, 100],
  },
  "minecraft:structure_block": { canDestory: false },
  "minecraft:structure_void": { canDestory: false },
  "minecraft:sulfur": {
    canDestory: true,
    item: ["minecraft:sulfur", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:sulfur_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_brick_slab": {
    canDestory: true,
    item: ["minecraft:sulfur_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_brick_stairs": {
    canDestory: true,
    item: ["minecraft:sulfur_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_brick_wall": {
    canDestory: true,
    item: ["minecraft:sulfur_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_bricks": {
    canDestory: true,
    item: ["minecraft:sulfur_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_double_slab": {
    canDestory: true,
    item: ["minecraft:sulfur_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_slab": {
    canDestory: true,
    item: ["minecraft:sulfur_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_spike": {
    canDestory: true,
    item: ["minecraft:sulfur_spike", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_stairs": {
    canDestory: true,
    item: ["minecraft:sulfur_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:sulfur_wall": {
    canDestory: true,
    item: ["minecraft:sulfur_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:sunflower": {
    canDestory: true,
    item: ["minecraft:sunflower", { min: 1, max: 1 }, 100],
  },
  "minecraft:suspicious_gravel": {
    canDestory: true,
    item: ["minecraft:suspicious_gravel", { min: 1, max: 1 }, 100],
  },
  "minecraft:suspicious_sand": {
    canDestory: true,
    item: ["minecraft:suspicious_sand", { min: 1, max: 1 }, 100],
  },
  "minecraft:sweet_berry_bush": {
    canDestory: true,
    item: ["minecraft:sweet_berries", { min: 1, max: 2 }, 100],
  },
  "minecraft:tall_dry_grass": {
    canDestory: true,
    item: ["minecraft:wheat_seeds", { min: 0, max: 1 }, 100],
  },
  "minecraft:tall_grass": {
    canDestory: true,
    item: ["minecraft:wheat_seeds", { min: 0, max: 1 }, 100],
  },
  "minecraft:target": {
    canDestory: true,
    item: ["minecraft:target", { min: 1, max: 1 }, 100],
  },
  "minecraft:tinted_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:tinted_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:tnt": { canDestory: true, item: ["minecraft:tnt", { min: 1, max: 1 }, 100] },
  "minecraft:torch": {
    canDestory: true,
    item: ["minecraft:torch", { min: 1, max: 1 }, 100],
  },
  "minecraft:torchflower": {
    canDestory: true,
    item: ["minecraft:torchflower", { min: 1, max: 1 }, 100],
  },
  "minecraft:torchflower_crop": {
    canDestory: true,
    item: ["minecraft:torchflower_seeds", { min: 1, max: 1 }, 100],
  },
  "minecraft:trapdoor": {
    canDestory: true,
    item: ["minecraft:trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:trapped_chest": {
    canDestory: true,
    item: ["minecraft:trapped_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:trial_spawner": {
    canDestory: true,
    item: ["minecraft:trial_spawner", { min: 1, max: 1 }, 100],
  },
  "minecraft:trip_wire": { canDestory: false },
  "minecraft:tripwire_hook": {
    canDestory: true,
    item: ["minecraft:tripwire_hook", { min: 1, max: 1 }, 100],
  },
  "minecraft:tube_coral": {
    canDestory: true,
    silkTouchLoot: ["minecraft:tube_coral", { min: 1, max: 1 }, 100],
  },
  "minecraft:tube_coral_block": {
    canDestory: true,
    silkTouchLoot: ["minecraft:tube_coral_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:tube_coral_fan": {
    canDestory: true,
    silkTouchLoot: ["minecraft:tube_coral_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:tube_coral_wall_fan": {
    canDestory: true,
    silkTouchLoot: ["minecraft:tube_coral_wall_fan", { min: 1, max: 1 }, 100],
  },
  "minecraft:tuff": { canDestory: true, item: ["minecraft:tuff", { min: 1, max: 1 }, 100] },
  "minecraft:tuff_brick_double_slab": {
    canDestory: true,
    item: ["minecraft:tuff_brick_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:tuff_brick_slab": {
    canDestory: true,
    item: ["minecraft:tuff_brick_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:tuff_brick_stairs": {
    canDestory: true,
    item: ["minecraft:tuff_brick_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:tuff_brick_wall": {
    canDestory: true,
    item: ["minecraft:tuff_brick_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:tuff_bricks": {
    canDestory: true,
    item: ["minecraft:tuff_bricks", { min: 1, max: 1 }, 100],
  },
  "minecraft:tuff_double_slab": {
    canDestory: true,
    item: ["minecraft:tuff_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:tuff_slab": {
    canDestory: true,
    item: ["minecraft:tuff_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:tuff_stairs": {
    canDestory: true,
    item: ["minecraft:tuff_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:tuff_wall": {
    canDestory: true,
    item: ["minecraft:tuff_wall", { min: 1, max: 1 }, 100],
  },
  "minecraft:turtle_egg": {
    canDestory: true,
    item: ["minecraft:turtle_egg", { min: 1, max: 1 }, 100],
  },
  "minecraft:twisting_vines": {
    canDestory: true,
    silkTouchLoot: ["minecraft:twisting_vines", { min: 1, max: 1 }, 100],
  },
  "minecraft:undyed_shulker_box": {
    canDestory: true,
    item: ["minecraft:undyed_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:unlit_redstone_torch": {
    canDestory: true,
    item: ["minecraft:unlit_redstone_torch", { min: 1, max: 1 }, 100],
  },
  "minecraft:unpowered_comparator": {
    canDestory: true,
    item: ["minecraft:unpowered_comparator", { min: 1, max: 1 }, 100],
  },
  "minecraft:unpowered_repeater": {
    canDestory: true,
    item: ["minecraft:unpowered_repeater", { min: 1, max: 1 }, 100],
  },
  "minecraft:vault": {
    canDestory: true,
    item: ["minecraft:vault", { min: 1, max: 1 }, 100],
  },
  "minecraft:verdant_froglight": {
    canDestory: true,
    item: ["minecraft:verdant_froglight", { min: 1, max: 1 }, 100],
  },
  "minecraft:vine": {
    canDestory: true,
    silkTouchLoot: ["minecraft:vine", { min: 1, max: 1 }, 100],
  },
  "minecraft:wall_banner": {
    canDestory: true,
    item: ["minecraft:wall_banner", { min: 1, max: 1 }, 100],
  },
  "minecraft:wall_sign": {
    canDestory: true,
    item: ["minecraft:wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_button": {
    canDestory: true,
    item: ["minecraft:warped_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_door": {
    canDestory: true,
    item: ["minecraft:warped_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_double_slab": {
    canDestory: true,
    item: ["minecraft:warped_double_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_fence": {
    canDestory: true,
    item: ["minecraft:warped_fence", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_fence_gate": {
    canDestory: true,
    item: ["minecraft:warped_fence_gate", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_fungus": {
    canDestory: true,
    item: ["minecraft:warped_fungus", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_hanging_sign": {
    canDestory: true,
    item: ["minecraft:warped_hanging_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_hyphae": {
    canDestory: true,
    item: ["minecraft:warped_hyphae", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_nylium": {
    canDestory: true,
    item: ["minecraft:warped_nylium", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_planks": {
    canDestory: true,
    item: ["minecraft:warped_planks", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_pressure_plate": {
    canDestory: true,
    item: ["minecraft:warped_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_roots": {
    canDestory: true,
    item: ["minecraft:warped_roots", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_shelf": {
    canDestory: true,
    item: ["minecraft:warped_shelf", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_slab": {
    canDestory: true,
    item: ["minecraft:warped_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_stairs": {
    canDestory: true,
    item: ["minecraft:warped_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_standing_sign": {
    canDestory: true,
    item: ["minecraft:warped_standing_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_stem": {
    canDestory: true,
    item: ["minecraft:warped_stem", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_trapdoor": {
    canDestory: true,
    item: ["minecraft:warped_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_wall_sign": {
    canDestory: true,
    item: ["minecraft:warped_wall_sign", { min: 1, max: 1 }, 100],
  },
  "minecraft:warped_wart_block": {
    canDestory: true,
    item: ["minecraft:warped_wart_block", { min: 1, max: 1 }, 100],
  },
  "minecraft:water": { canDestory: false },
  "minecraft:waterlily": {
    canDestory: true,
    item: ["minecraft:waterlily", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_chiseled_copper": {
    canDestory: true,
    item: ["minecraft:waxed_chiseled_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper": {
    canDestory: true,
    item: ["minecraft:waxed_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper_bars": {
    canDestory: true,
    item: ["minecraft:waxed_copper_bars", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper_bulb": {
    canDestory: true,
    item: ["minecraft:waxed_copper_bulb", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper_chain": {
    canDestory: true,
    item: ["minecraft:waxed_copper_chain", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper_chest": {
    canDestory: true,
    item: ["minecraft:waxed_copper_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper_door": {
    canDestory: true,
    item: ["minecraft:waxed_copper_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper_golem_statue": {
    canDestory: true,
    item: ["minecraft:waxed_copper_golem_statue", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper_grate": {
    canDestory: true,
    item: ["minecraft:waxed_copper_grate", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper_lantern": {
    canDestory: true,
    item: ["minecraft:waxed_copper_lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_copper_trapdoor": {
    canDestory: true,
    item: ["minecraft:waxed_copper_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_cut_copper": {
    canDestory: true,
    item: ["minecraft:waxed_cut_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:waxed_cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_cut_copper_stairs": {
    canDestory: true,
    item: ["minecraft:waxed_cut_copper_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_double_cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:waxed_double_cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_chiseled_copper": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_chiseled_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_copper": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_copper_bars": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_copper_bars", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_copper_bulb": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_copper_bulb", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_copper_chain": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_copper_chain", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_copper_chest": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_copper_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_copper_door": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_copper_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_copper_golem_statue": {
    canDestory: true,
    item: [
      "minecraft:waxed_exposed_copper_golem_statue",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_exposed_copper_grate": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_copper_grate", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_copper_lantern": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_copper_lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_copper_trapdoor": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_copper_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_cut_copper": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_cut_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_exposed_cut_copper_stairs": {
    canDestory: true,
    item: [
      "minecraft:waxed_exposed_cut_copper_stairs",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_exposed_double_cut_copper_slab": {
    canDestory: true,
    item: [
      "minecraft:waxed_exposed_double_cut_copper_slab",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_exposed_lightning_rod": {
    canDestory: true,
    item: ["minecraft:waxed_exposed_lightning_rod", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_lightning_rod": {
    canDestory: true,
    item: ["minecraft:waxed_lightning_rod", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_chiseled_copper": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_chiseled_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_copper": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_copper_bars": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_copper_bars", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_copper_bulb": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_copper_bulb", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_copper_chain": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_copper_chain", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_copper_chest": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_copper_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_copper_door": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_copper_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_copper_golem_statue": {
    canDestory: true,
    item: [
      "minecraft:waxed_oxidized_copper_golem_statue",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_oxidized_copper_grate": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_copper_grate", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_copper_lantern": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_copper_lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_copper_trapdoor": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_copper_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_cut_copper": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_cut_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_oxidized_cut_copper_stairs": {
    canDestory: true,
    item: [
      "minecraft:waxed_oxidized_cut_copper_stairs",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_oxidized_double_cut_copper_slab": {
    canDestory: true,
    item: [
      "minecraft:waxed_oxidized_double_cut_copper_slab",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_oxidized_lightning_rod": {
    canDestory: true,
    item: ["minecraft:waxed_oxidized_lightning_rod", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_chiseled_copper": {
    canDestory: true,
    item: [
      "minecraft:waxed_weathered_chiseled_copper",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_weathered_copper": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_copper_bars": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_copper_bars", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_copper_bulb": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_copper_bulb", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_copper_chain": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_copper_chain", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_copper_chest": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_copper_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_copper_door": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_copper_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_copper_golem_statue": {
    canDestory: true,
    item: [
      "minecraft:waxed_weathered_copper_golem_statue",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_weathered_copper_grate": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_copper_grate", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_copper_lantern": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_copper_lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_copper_trapdoor": {
    canDestory: true,
    item: [
      "minecraft:waxed_weathered_copper_trapdoor",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_weathered_cut_copper": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_cut_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:waxed_weathered_cut_copper_slab": {
    canDestory: true,
    item: [
      "minecraft:waxed_weathered_cut_copper_slab",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_weathered_cut_copper_stairs": {
    canDestory: true,
    item: [
      "minecraft:waxed_weathered_cut_copper_stairs",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_weathered_double_cut_copper_slab": {
    canDestory: true,
    item: [
      "minecraft:waxed_weathered_double_cut_copper_slab",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:waxed_weathered_lightning_rod": {
    canDestory: true,
    item: ["minecraft:waxed_weathered_lightning_rod", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_chiseled_copper": {
    canDestory: true,
    item: ["minecraft:weathered_chiseled_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper": {
    canDestory: true,
    item: ["minecraft:weathered_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper_bars": {
    canDestory: true,
    item: ["minecraft:weathered_copper_bars", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper_bulb": {
    canDestory: true,
    item: ["minecraft:weathered_copper_bulb", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper_chain": {
    canDestory: true,
    item: ["minecraft:weathered_copper_chain", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper_chest": {
    canDestory: true,
    item: ["minecraft:weathered_copper_chest", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper_door": {
    canDestory: true,
    item: ["minecraft:weathered_copper_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper_golem_statue": {
    canDestory: true,
    item: ["minecraft:weathered_copper_golem_statue", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper_grate": {
    canDestory: true,
    item: ["minecraft:weathered_copper_grate", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper_lantern": {
    canDestory: true,
    item: ["minecraft:weathered_copper_lantern", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_copper_trapdoor": {
    canDestory: true,
    item: ["minecraft:weathered_copper_trapdoor", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_cut_copper": {
    canDestory: true,
    item: ["minecraft:weathered_cut_copper", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_cut_copper_slab": {
    canDestory: true,
    item: ["minecraft:weathered_cut_copper_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_cut_copper_stairs": {
    canDestory: true,
    item: ["minecraft:weathered_cut_copper_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:weathered_double_cut_copper_slab": {
    canDestory: true,
    item: [
      "minecraft:weathered_double_cut_copper_slab",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:weathered_lightning_rod": {
    canDestory: true,
    item: ["minecraft:weathered_lightning_rod", { min: 1, max: 1 }, 100],
  },
  "minecraft:web": {
    canDestory: true,
    silkTouchLoot: ["minecraft:web", { min: 1, max: 1 }, 100],
    item: ["minecraft:string", { min: 1, max: 1 }, 100],
  },
  "minecraft:weeping_vines": {
    canDestory: true,
    silkTouchLoot: ["minecraft:weeping_vines", { min: 1, max: 1 }, 100],
  },
  "minecraft:wet_sponge": {
    canDestory: true,
    item: ["minecraft:wet_sponge", { min: 1, max: 1 }, 100],
  },
  "minecraft:wheat": {
    canDestory: true,
    item: ["minecraft:wheat", { min: 0, max: 1 }, 100],
  },
  "minecraft:white_candle": {
    canDestory: true,
    item: ["minecraft:white_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_candle_cake": {
    canDestory: true,
    item: ["minecraft:white_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_carpet": {
    canDestory: true,
    item: ["minecraft:white_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_concrete": {
    canDestory: true,
    item: ["minecraft:white_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_concrete_powder": {
    canDestory: true,
    item: ["minecraft:white_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:white_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_shulker_box": {
    canDestory: true,
    item: ["minecraft:white_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:white_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:white_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:white_terracotta": {
    canDestory: true,
    item: ["minecraft:white_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_tulip": {
    canDestory: true,
    item: ["minecraft:white_tulip", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_wool": {
    canDestory: true,
    item: ["minecraft:white_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_wool_slab": {
    canDestory: true,
    item: ["minecraft:white_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:white_wool_stairs": {
    canDestory: true,
    item: ["minecraft:white_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:wildflowers": {
    canDestory: true,
    silkTouchLoot: ["minecraft:wildflowers", { min: 1, max: 1 }, 100],
  },
  "minecraft:wither_rose": {
    canDestory: true,
    item: ["minecraft:wither_rose", { min: 1, max: 1 }, 100],
  },
  "minecraft:wither_skeleton_skull": {
    canDestory: true,
    item: ["minecraft:wither_skeleton_skull", { min: 1, max: 1 }, 100],
  },
  "minecraft:wooden_button": {
    canDestory: true,
    item: ["minecraft:wooden_button", { min: 1, max: 1 }, 100],
  },
  "minecraft:wooden_door": {
    canDestory: true,
    item: ["minecraft:wooden_door", { min: 1, max: 1 }, 100],
  },
  "minecraft:wooden_pressure_plate": {
    canDestory: true,
    item: ["minecraft:wooden_pressure_plate", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_candle": {
    canDestory: true,
    item: ["minecraft:yellow_candle", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_candle_cake": {
    canDestory: true,
    item: ["minecraft:yellow_candle_cake", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_carpet": {
    canDestory: true,
    item: ["minecraft:yellow_carpet", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_concrete": {
    canDestory: true,
    item: ["minecraft:yellow_concrete", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_concrete_powder": {
    canDestory: true,
    item: ["minecraft:yellow_concrete_powder", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_glazed_terracotta": {
    canDestory: true,
    item: ["minecraft:yellow_glazed_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_shulker_box": {
    canDestory: true,
    item: ["minecraft:yellow_shulker_box", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_stained_glass": {
    canDestory: true,
    silkTouchLoot: ["minecraft:yellow_stained_glass", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_stained_glass_pane": {
    canDestory: true,
    silkTouchLoot: [
      "minecraft:yellow_stained_glass_pane",
      { min: 1, max: 1 },
      100,
    ],
  },
  "minecraft:yellow_terracotta": {
    canDestory: true,
    item: ["minecraft:yellow_terracotta", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_wool": {
    canDestory: true,
    item: ["minecraft:yellow_wool", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_wool_slab": {
    canDestory: true,
    item: ["minecraft:yellow_wool_slab", { min: 1, max: 1 }, 100],
  },
  "minecraft:yellow_wool_stairs": {
    canDestory: true,
    item: ["minecraft:yellow_wool_stairs", { min: 1, max: 1 }, 100],
  },
  "minecraft:zombie_head": {
    canDestory: true,
    item: ["minecraft:zombie_head", { min: 1, max: 1 }, 100],
  },
} satisfies {
  [key: string]: BlockLootDataValue;
};

const customBlockData: Record<string, BlockLootDataValue> = {};

export function getBlockData(id: string): BlockLootDataValue | undefined {
  return (
    customBlockData[id] ??
    (internalBlockData as Record<string, BlockLootDataValue>)[
      toNamespacedId(id)
    ]
  );
}

/**
 * Register custom block loot data under your own namespace (e.g.
 * `"myaddon:ruby_ore"`). Keys must match `[a-z0-9_]+:[a-z0-9_]+` and may not
 * use the reserved `minecraft:` namespace — vanilla defaults stay intact.
 */
export function registryBlockData(
  data: Record<string, BlockLootDataValue>,
): void {
  for (const key of Object.keys(data)) assertCustomId(key);
  Object.assign(customBlockData, data);
}
