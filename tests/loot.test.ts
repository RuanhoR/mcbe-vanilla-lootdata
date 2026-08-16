import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.restoreAllMocks();
});

vi.mock("@minecraft/server", () => {
  class MockEnchantable {
    #ench = new Map<string, number>();
    getEnchantment(type: string | { id: string }) {
      const id = typeof type === "string" ? type : type.id;
      const level = this.#ench.get(id);
      return level === undefined ? undefined : { level };
    }
    hasEnchantment(type: string | { id: string }) {
      return this.getEnchantment(type) !== undefined;
    }
    addEnchantment(enchantment: { type: string | { id: string }; level: number }) {
      const id = typeof enchantment.type === "string" ? enchantment.type : enchantment.type.id;
      this.#ench.set(id, enchantment.level);
    }
    getEnchantments() {
      return [...this.#ench].map(([id, level]) => ({ type: new MockEnchantmentType(id), level }));
    }
  }
  class MockEnchantmentType {
    readonly id: string;
    constructor(id: string) {
      this.id = id;
    }
  }
  class MockItemStack {
    typeId: string;
    amount: number;
    #comp = new Map<string, unknown>();
    constructor(itemType: string | { id: string }, amount = 1) {
      this.typeId = typeof itemType === "string" ? itemType : itemType.id;
      this.amount = amount;
    }
    getComponent(id: string) {
      if (id === "minecraft:enchantable") {
        if (!this.#comp.has(id)) this.#comp.set(id, new MockEnchantable());
        return this.#comp.get(id);
      }
      return undefined;
    }
    getLore(): string[] {
      return [];
    }
    setLore(_lore: string[]) {}
  }
  class MockContainer {
    readonly size: number;
    #items: MockItemStack[];
    constructor(items: MockItemStack[]) {
      this.#items = items;
      this.size = items.length;
    }
    getItem(i: number) {
      return this.#items[i];
    }
  }
  class MockEntity {
    typeId: string;
    #container?: MockContainer;
    constructor(typeId: string, container?: MockContainer) {
      this.typeId = typeId;
      this.#container = container;
    }
    getComponent(id: string) {
      if (id === "minecraft:inventory") {
        return this.#container ? { container: this.#container } : undefined;
      }
      return undefined;
    }
  }
  return {
    ItemStack: MockItemStack,
    EnchantmentType: MockEnchantmentType,
    Entity: MockEntity,
  };
});

import { Entity, ItemStack } from "@minecraft/server";
import {
  getBlockLoot,
  getEntityLoot,
  getLoot,
  getLootEnchantDrop,
  internalBlockData,
  internalEntityData,
  normalizeTypeId,
  randomRange,
  registryBlockData,
  registryEntityData,
  rollWeight,
} from "../src/index";

function tool(id: string, enchants: Record<string, number> = {}): ItemStack {
  const stack = new ItemStack(id);
  const ench = stack.getComponent("minecraft:enchantable") as {
    addEnchantment(e: { type: string; level: number }): void;
  };
  for (const [name, level] of Object.entries(enchants)) {
    ench.addEnchantment({ type: name, level });
  }
  return stack;
}

const blockOpts = {
  type: "block",
  isSurvival: true,
} as const;

describe("getBlockLoot", () => {
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);
  });

  it("drops itself by default", () => {
    const res = getBlockLoot({ ...blockOpts, origin: "oak_planks", useItem: tool("minecraft:iron_axe") });
    expect(res.items).toHaveLength(1);
    expect(res.items[0].typeId).toBe("minecraft:oak_planks");
    expect(res.items[0].amount).toBe(1);
  });

  it("accepts a namespaced id origin", () => {
    const res = getBlockLoot({ ...blockOpts, origin: "minecraft:oak_planks", useItem: tool("minecraft:iron_axe") });
    expect(res.items[0].typeId).toBe("minecraft:oak_planks");
  });

  it("stone drops cobblestone without silk touch", () => {
    const res = getBlockLoot({ ...blockOpts, origin: "stone", useItem: tool("minecraft:diamond_pickaxe") });
    expect(res.items[0].typeId).toBe("minecraft:cobblestone");
  });

  it("stone drops itself with silk touch", () => {
    const res = getBlockLoot({
      ...blockOpts,
      origin: "stone",
      useItem: tool("minecraft:diamond_pickaxe", { silk_touch: 1 }),
    });
    expect(res.items[0].typeId).toBe("minecraft:stone");
  });

  it("glass drops nothing without silk touch, glass with silk touch", () => {
    const plain = getBlockLoot({ ...blockOpts, origin: "glass", useItem: tool("minecraft:pickaxe") });
    expect(plain.items).toHaveLength(0);

    const silk = getBlockLoot({
      ...blockOpts,
      origin: "glass",
      useItem: tool("minecraft:pickaxe", { silk_touch: 1 }),
    });
    expect(silk.items[0].typeId).toBe("minecraft:glass");
  });

  it("non-destroyable blocks drop nothing", () => {
    const res = getBlockLoot({ ...blockOpts, origin: "bedrock", useItem: tool("minecraft:diamond_pickaxe") });
    expect(res.items).toHaveLength(0);
  });

  it("drops nothing in creative mode", () => {
    const res = getBlockLoot({
      ...blockOpts,
      isSurvival: false,
      origin: "stone",
      useItem: tool("minecraft:diamond_pickaxe"),
    });
    expect(res.items).toHaveLength(0);
  });

  it("coal_ore drops coal and orbs", () => {
    const res = getBlockLoot({
      ...blockOpts,
      origin: "coal_ore",
      useItem: tool("minecraft:stone_pickaxe"),
      flags: { lootOrb: true },
    });
    expect(res.items[0].typeId).toBe("minecraft:coal");
    expect(res.orb).toBeGreaterThanOrEqual(0);
    expect(res.orb).toBeLessThanOrEqual(2);
  });

  it("diamond_ore with fortune 3 drops 1-4 diamonds", () => {
    const res = getBlockLoot({
      ...blockOpts,
      origin: "diamond_ore",
      useItem: tool("minecraft:diamond_pickaxe", { fortune: 3 }),
    });
    expect(res.items[0].typeId).toBe("minecraft:diamond");
    expect(res.items[0].amount).toBeGreaterThanOrEqual(1);
    expect(res.items[0].amount).toBeLessThanOrEqual(4);
  });

  it("bookshelf always drops 3 books", () => {
    const res = getBlockLoot({ ...blockOpts, origin: "bookshelf", useItem: tool("minecraft:iron_axe") });
    expect(res.items[0].typeId).toBe("minecraft:book");
    expect(res.items[0].amount).toBe(3);
  });

  it("lectern sets useCommand", () => {
    const res = getBlockLoot({ ...blockOpts, origin: "lectern", useItem: tool("minecraft:axe") });
    expect(res.useCommand).toBe(true);
  });
});

describe("getEntityLoot", () => {
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);
  });

  it("zombie drops rotten_flesh", () => {
    const res = getEntityLoot({
      type: "entity",
      origin: "zombie",
      useItem: tool("minecraft:diamond_sword"),
      isSurvival: true,
    });
    expect(res.items[0].typeId).toBe("minecraft:rotten_flesh");
  });

  it("looting 3 increases rotten_flesh amount", () => {
    const res = getEntityLoot({
      type: "entity",
      origin: "zombie",
      useItem: tool("minecraft:diamond_sword", { looting: 3 }),
      isSurvival: true,
    });
    // base {0,2} + looting bonus {0,3} = {0,5}
    expect(res.items[0].amount).toBeGreaterThanOrEqual(0);
    expect(res.items[0].amount).toBeLessThanOrEqual(5);
  });

  it("player drops nothing", () => {
    const res = getEntityLoot({
      type: "entity",
      origin: "player",
      useItem: tool("minecraft:diamond_sword"),
      isSurvival: true,
    });
    expect(res.items).toHaveLength(0);
  });

  it("donkey drops container contents plus leather", () => {
    const container = {
      size: 1,
      getItem: () => new ItemStack("minecraft:diamond", 1),
    };
    const MockEntityCtor = Entity as unknown as new (typeId: string, container: unknown) => InstanceType<typeof Entity>;
    const donkey = new MockEntityCtor("minecraft:donkey", container);
    const res = getEntityLoot({
      type: "entity",
      origin: donkey,
      useItem: tool("minecraft:diamond_sword"),
      isSurvival: true,
    });
    const ids = res.items.map((i) => i.typeId);
    expect(ids).toContain("minecraft:leather");
    expect(ids).toContain("minecraft:diamond");
  });
});

describe("getLoot dispatcher", () => {
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);
  });

  it("dispatches to block loot", () => {
    const res = getLoot({ ...blockOpts, origin: "stone", useItem: tool("minecraft:diamond_pickaxe") });
    expect(res.items[0].typeId).toBe("minecraft:cobblestone");
  });

  it("dispatches to entity loot", () => {
    const res = getLoot({
      type: "entity",
      origin: "zombie",
      useItem: tool("minecraft:diamond_sword"),
      isSurvival: true,
    });
    expect(res.items[0].typeId).toBe("minecraft:rotten_flesh");
  });
});

describe("registryBlockData", () => {
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);
  });

  it("overrides an existing block entry", () => {
    registryBlockData({ stone: { canDestory: true, item: ["minecraft:apple", { min: 1, max: 1 }, 100] } });
    const res = getBlockLoot({ ...blockOpts, origin: "stone", useItem: tool("minecraft:diamond_pickaxe") });
    expect(res.items[0].typeId).toBe("minecraft:apple");
  });

  it("adds a brand new block entry", () => {
    registryBlockData({ custom_block: { canDestory: true, item: ["minecraft:emerald", { min: 1, max: 1 }, 100] } });
    const res = getBlockLoot({ ...blockOpts, origin: "custom_block", useItem: tool("minecraft:diamond_pickaxe") });
    expect(res.items[0].typeId).toBe("minecraft:emerald");
  });

  it("does not modify internalBlockData", () => {
    expect((internalBlockData as Record<string, any>).stone.item[0]).toBe("minecraft:cobblestone");
  });

  it("keeps vanilla entry after overriding an unrelated id", () => {
    registryBlockData({ other_block: { canDestory: true, item: ["minecraft:diamond", { min: 1, max: 1 }, 100] } });
    const res = getBlockLoot({ ...blockOpts, origin: "bookshelf", useItem: tool("minecraft:iron_axe") });
    expect(res.items[0].typeId).toBe("minecraft:book");
    expect(res.items[0].amount).toBe(3);
  });
});

describe("registryEntityData", () => {
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);
  });

  it("overrides an existing entity entry", () => {
    registryEntityData({ zombie: { item: ["minecraft:diamond", { min: 1, max: 1 }, 100] } });
    const res = getEntityLoot({
      type: "entity",
      origin: "zombie",
      useItem: tool("minecraft:diamond_sword"),
      isSurvival: true,
    });
    expect(res.items[0].typeId).toBe("minecraft:diamond");
  });

  it("adds a brand new entity entry", () => {
    registryEntityData({ custom_mob: { item: ["minecraft:emerald", { min: 1, max: 1 }, 100] } });
    const res = getEntityLoot({
      type: "entity",
      origin: "custom_mob",
      useItem: tool("minecraft:diamond_sword"),
      isSurvival: true,
    });
    expect(res.items[0].typeId).toBe("minecraft:emerald");
  });

  it("does not modify internalEntityData", () => {
    expect((internalEntityData as Record<string, any>).zombie.item[0]).toBe("minecraft:rotten_flesh");
  });
});

describe("getLootEnchantDrop", () => {
  it("level 0 always returns 1", () => {
    const values = Array.from({ length: 1000 }, () => getLootEnchantDrop(0));
    expect(new Set(values)).toEqual(new Set([1]));
  });

  it("level 1 returns 1 or 2", () => {
    const values = Array.from({ length: 1000 }, () => getLootEnchantDrop(1));
    expect(new Set(values)).toEqual(new Set([1, 2]));
  });

  it("level 3 returns between 1 and 4", () => {
    for (let i = 0; i < 1000; i++) {
      const v = getLootEnchantDrop(3);
      expect(v).toBeGreaterThanOrEqual(1);
      expect(v).toBeLessThanOrEqual(4);
    }
  });
});

describe("utils", () => {
  it("randomRange is inclusive", () => {
    const values = Array.from({ length: 1000 }, () => randomRange(3, 5));
    expect(new Set(values)).toEqual(new Set([3, 4, 5]));
  });

  it("rollWeight 100 always rolls true", () => {
    expect(rollWeight(100)).toBe(true);
  });

  it("normalizeTypeId strips minecraft: prefix", () => {
    expect(normalizeTypeId("minecraft:stone")).toBe("stone");
    expect(normalizeTypeId("stone")).toBe("stone");
  });
});
