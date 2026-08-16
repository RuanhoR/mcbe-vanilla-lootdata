import { describe, expect, it } from "vitest";
import { internalBlockData } from "../src/shared/data/latest-block";
import { internalEntityData } from "../src/shared/data/latest-entity";

const B = internalBlockData as unknown as Record<string, any>;
const E = internalEntityData as unknown as Record<string, any>;

describe("data coverage", () => {
  it("block data contains 1232 entries", () => {
    expect(Object.keys(internalBlockData).length).toBe(1232);
  });

  it("entity data contains 149 entries", () => {
    expect(Object.keys(internalEntityData).length).toBe(149);
  });
});

describe("block data values", () => {
  it.each([
    ["coal_ore", "minecraft:coal", { min: 1, max: 1 }],
    ["deepslate_coal_ore", "minecraft:coal", { min: 1, max: 1 }],
    ["iron_ore", "minecraft:raw_iron", { min: 1, max: 1 }],
    ["gold_ore", "minecraft:raw_gold", { min: 1, max: 1 }],
    ["copper_ore", "minecraft:raw_copper", { min: 2, max: 5 }],
    ["diamond_ore", "minecraft:diamond", { min: 1, max: 1 }],
    ["emerald_ore", "minecraft:emerald", { min: 1, max: 1 }],
    ["redstone_ore", "minecraft:redstone", { min: 4, max: 5 }],
    ["lapis_ore", "minecraft:lapis_lazuli", { min: 4, max: 9 }],
    ["nether_gold_ore", "minecraft:gold_nugget", { min: 2, max: 6 }],
    ["deepslate_diamond_ore", "minecraft:diamond", { min: 1, max: 1 }],
  ])("%s drops %s with fortune", (id, item, count) => {
    expect(B[id].item[0]).toBe(item);
    expect(B[id].item[1]).toEqual(count);
    expect(B[id].item[2]).toBe(100);
    expect(B[id].fortune).toBe(true);
    expect(B[id].canDestory).toBe(true);
  });

  it.each([
    ["coal_ore", { min: 0, max: 2 }],
    ["diamond_ore", { min: 3, max: 7 }],
    ["iron_ore", { min: 3, max: 7 }],
    ["ancient_debris", { min: 3, max: 7 }],
    ["redstone_ore", { min: 0, max: 2 }],
  ])("%s has lootOrb %j", (id, orb) => {
    expect(B[id].lootOrb).toEqual(orb);
  });

  it("ancient_debris drops itself without fortune", () => {
    expect(B.ancient_debris.item[0]).toBe("minecraft:ancient_debris");
    expect(B.ancient_debris.item[1]).toEqual({ min: 1, max: 1 });
    expect(B.ancient_debris.fortune).toBeUndefined();
  });

  it.each([
    ["stone", "minecraft:cobblestone", "minecraft:stone"],
    ["grass_block", "minecraft:dirt", "minecraft:grass_block"],
    ["mycelium", "minecraft:dirt", "minecraft:mycelium"],
    ["podzol", "minecraft:dirt", "minecraft:podzol"],
  ])("%s drops %s, silk drops itself", (id, item, silk) => {
    expect(B[id].item[0]).toBe(item);
    expect(B[id].silkTouchLoot[0]).toBe(silk);
  });

  it.each([
    "glass",
    "glass_pane",
    "ice",
    "packed_ice",
    "blue_ice",
    "sculk",
    "tinted_glass",
  ])("%s requires silk touch", (id) => {
    expect(B[id].item).toBeUndefined();
    expect(B[id].silkTouchLoot[0]).toBe("minecraft:" + id);
  });

  it.each([
    ["glowstone", "minecraft:glowstone_dust", { min: 2, max: 4 }],
    ["sea_lantern", "minecraft:prismarine_crystals", { min: 1, max: 3 }],
    ["clay", "minecraft:clay_ball", { min: 4, max: 4 }],
  ])("%s drops %s plus silk self", (id, item, count) => {
    expect(B[id].item[0]).toBe(item);
    expect(B[id].item[1]).toEqual(count);
    expect(B[id].silkTouchLoot[0]).toBe("minecraft:" + id);
  });

  it.each([
    ["bookshelf", "minecraft:book", { min: 3, max: 3 }],
    ["melon_block", "minecraft:melon_slice", { min: 3, max: 7 }],
    ["nether_wart", "minecraft:nether_wart", { min: 2, max: 4 }],
    ["wheat", "minecraft:wheat", { min: 0, max: 1 }],
    ["carrots", "minecraft:carrot", { min: 0, max: 1 }],
    ["potatoes", "minecraft:potato", { min: 0, max: 1 }],
    ["cocoa", "minecraft:cocoa_beans", { min: 1, max: 3 }],
  ])("%s drops %s %j", (id, item, count) => {
    expect(B[id].item[0]).toBe(item);
    expect(B[id].item[1]).toEqual(count);
    expect(B[id].item[2]).toBe(100);
  });

  it.each([
    ["oak_leaves", "minecraft:oak_sapling"],
    ["spruce_leaves", "minecraft:spruce_sapling"],
    ["poplar_leaves", "minecraft:poplar_sapling"],
  ])("%s drops sapling at low weight plus silk self", (id, sapling) => {
    expect(B[id].item[0]).toBe(sapling);
    expect(B[id].item[1]).toEqual({ min: 1, max: 1 });
    expect(B[id].item[2]).toBe(5);
    expect(B[id].silkTouchLoot[0]).toBe("minecraft:" + id);
  });

  it.each([
    "bedrock",
    "barrier",
    "air",
    "water",
    "lava",
    "command_block",
    "chain_command_block",
    "repeating_command_block",
    "structure_block",
    "structure_void",
    "jigsaw",
    "allow",
    "deny",
    "border_block",
    "portal",
    "end_portal",
    "light_block_0",
    "light_block_15",
  ])("%s canDestory false", (id) => {
    expect(B[id].canDestory).toBe(false);
  });

  it("lectern sets HandleUseCommand", () => {
    expect(B.lectern.HandleUseCommand).toBe(true);
  });
});

describe("entity data values", () => {
  it.each([
    ["zombie", "minecraft:rotten_flesh", { min: 0, max: 2 }],
    ["skeleton", "minecraft:bone", { min: 0, max: 2 }],
    ["creeper", "minecraft:gunpowder", { min: 0, max: 2 }],
    ["enderman", "minecraft:ender_pearl", { min: 0, max: 1 }],
    ["blaze", "minecraft:blaze_rod", { min: 0, max: 1 }],
    ["iron_golem", "minecraft:iron_ingot", { min: 3, max: 5 }],
    ["cow", "minecraft:leather", { min: 0, max: 2 }],
    ["sheep", "minecraft:white_wool", { min: 1, max: 1 }],
    ["chicken", "minecraft:feather", { min: 0, max: 2 }],
    ["squid", "minecraft:ink_sac", { min: 1, max: 3 }],
    ["armadillo", "minecraft:armadillo_scute", { min: 1, max: 1 }],
  ])("%s drops %s with looting", (id, item, count) => {
    expect(E[id].item[0]).toBe(item);
    expect(E[id].item[1]).toEqual(count);
    expect(E[id].item[2]).toBe(100);
    expect(E[id].UseEnchLooting).toBe(true);
  });

  it("wither drops nether_star", () => {
    expect(E.wither.item[0]).toBe("minecraft:nether_star");
    expect(E.wither.item[1]).toEqual({ min: 1, max: 1 });
  });

  it("evocation_illager drops totem_of_undying", () => {
    expect(E.evocation_illager.item[0]).toBe("minecraft:totem_of_undying");
  });

  it.each(["player", "villager", "wandering_trader", "item", "xp_orb", "boat", "tnt"])(
    "%s has no loot",
    (id) => {
      expect(E[id]).toEqual({});
    },
  );

  it.each(["donkey", "mule", "llama", "trader_llama"])("%s has lootConatiner", (id) => {
    expect(E[id].lootConatiner).toBe(true);
  });
});
