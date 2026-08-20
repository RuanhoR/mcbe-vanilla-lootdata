import { describe, expect, it } from "vitest";
import {
  CompatibilityItemStack,
  getLoot,
  setMCBENative,
  toNative,
} from "../src/index";

class FakeEnchantable {
  #ench = new Map<string, number>();
  getEnchantment(type: string | { id: string }) {
    const id = typeof type === "string" ? type : type.id;
    const level = this.#ench.get(id);
    return level === undefined ? undefined : { type: { id }, level };
  }
  addEnchantment(enchantment: { type: string | { id: string }; level: number }) {
    const id = typeof enchantment.type === "string" ? enchantment.type : enchantment.type.id;
    this.#ench.set(id, enchantment.level);
  }
  hasEnchantment(type: string | { id: string }) {
    const id = typeof type === "string" ? type : type.id;
    return this.#ench.has(id);
  }
}

class FakeEnchantmentType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

class FakeItemStack {
  readonly typeId: string;
  amount: number;
  lore: string[] = [];
  #ench = new FakeEnchantable();
  constructor(itemType: string, amount = 1) {
    this.typeId = itemType;
    this.amount = amount;
  }
  getComponent(id: string): unknown {
    return id === "minecraft:enchantable" ? this.#ench : undefined;
  }
  setLore(lore: string[]): void {
    this.lore = lore;
  }
}

describe("setMCBENative + CompatibilityItemStack", () => {
  it("toNative throws before setMCBENative is called", () => {
    const compat = new CompatibilityItemStack("minecraft:diamond", 1);
    expect(() => compat.toNative()).toThrow(/setMCBENative/);
  });

  it("toNative builds a native stack with enchants and lore", () => {
    setMCBENative({
      ItemStack: FakeItemStack,
      EnchantmentType: FakeEnchantmentType,
    } as unknown as Parameters<typeof setMCBENative>[0]);

    const compat = new CompatibilityItemStack("minecraft:diamond_sword", 1);
    const ench = compat.getComponent("minecraft:enchantable") as {
      addEnchantment(e: { type: string; level: number }): void;
    };
    ench.addEnchantment({ type: "sharpness", level: 3 });
    compat.setLore(["legendary"]);

    const native = compat.toNative() as FakeItemStack;
    expect(native).toBeInstanceOf(FakeItemStack);
    expect(native.typeId).toBe("minecraft:diamond_sword");
    expect(native.amount).toBe(1);
    const nativeEnch = native.getComponent("minecraft:enchantable") as FakeEnchantable;
    expect(nativeEnch.getEnchantment("sharpness")?.level).toBe(3);
    expect(native.lore).toEqual(["legendary"]);
  });

  it("toNative helper passes native stacks through unchanged", () => {
    const native = new FakeItemStack("minecraft:air");
    expect(toNative(native as never)).toBe(native);
  });
});

describe("library runs in pure node", () => {
  it("getLoot yields CompatibilityItemStack without @minecraft/server", () => {
    const res = getLoot({
      type: "block",
      origin: "stone",
      useItem: new FakeItemStack("minecraft:diamond_pickaxe") as never,
      isSurvival: true,
    });
    expect(res.items[0]).toBeInstanceOf(CompatibilityItemStack);
    expect(res.items[0].typeId).toBe("minecraft:cobblestone");
    expect(res.items[0].amount).toBe(1);
  });

  it("compat stacks convert to native stacks via toNative", () => {
    const res = getLoot({
      type: "entity",
      origin: "armadillo",
      useItem: new FakeItemStack("minecraft:diamond_sword") as never,
      isSurvival: true,
    });
    const native = toNative(res.items[0]) as FakeItemStack;
    expect(native.typeId).toBe("minecraft:armadillo_scute");
  });
});