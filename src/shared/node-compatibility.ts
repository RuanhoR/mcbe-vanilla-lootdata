import type { EnchantmentType, ItemStack, RawMessage } from "@minecraft/server";

export interface MCBENativeAPI {
  /** `ItemStack` class from `@minecraft/server`. */
  ItemStack: new (itemType: string, amount?: number) => ItemStack;
  /** `EnchantmentType` class from `@minecraft/server`. */
  EnchantmentType: new (enchantmentId: string) => EnchantmentType;
}

/** Native `@minecraft/server` classes registered via {@link setMCBENative}. */
let native: MCBENativeAPI | undefined;

/**
 * Register the real `@minecraft/server` classes so
 * `CompatibilityItemStack#toNative()` can build native `ItemStack` instances.
 * Call once at script init (no-op until then; the library still works in Node).
 */
export function setMCBENative(api: MCBENativeAPI): void {
  native = api;
}

/** Current native `@minecraft/server` classes, or `undefined` when not set. */
export function getMCBENative(): MCBENativeAPI | undefined {
  return native;
}

/**
 * A loot item stack: native `ItemStack` inside Bedrock, or a
 * {@link CompatibilityItemStack} when produced outside it.
 */
export type LootStack = CompatibilityItemStack | ItemStack;

interface EnchantableLike {
  getEnchantment(type: string | { id: string }): { level: number } | undefined;
  addEnchantment(enchantment: { type: unknown; level: number }): void;
}

/**
 * Node-safe stand-in for `ItemStack`. Loot functions produce these so they can
 * run without `@minecraft/server`; bridge to a real stack with {@link toNative}.
 */
export class CompatibilityItemStack {
  readonly typeId: string;
  amount: number;

  #ench = new Map<string, number>();
  #lore: (string | RawMessage)[] = [];

  constructor(itemType: string, amount = 1) {
    this.typeId = itemType;
    this.amount = amount;
  }

  getComponent(id: string): unknown {
    if (id !== "minecraft:enchantable") return undefined;
    return {
      getEnchantment: (type: string | { id: string }) => {
        const key = typeof type === "string" ? type : type.id;
        const level = this.#ench.get(key);
        return level === undefined ? undefined : { type: { id: key }, level };
      },
      hasEnchantment: (type: string | { id: string }) => {
        const key = typeof type === "string" ? type : type.id;
        return this.#ench.has(key);
      },
      addEnchantment: (enchantment: { type: string | { id: string }; level: number }) => {
        const key = typeof enchantment.type === "string" ? enchantment.type : enchantment.type.id;
        this.#ench.set(key, enchantment.level);
      },
      getEnchantments: () =>
        [...this.#ench].map(([id, level]) => ({ type: { id }, level })),
    };
  }

  getLore(): string[] {
    return this.#lore as string[];
  }

  setLore(lore: string[] | RawMessage[]): void {
    this.#lore = [...lore];
  }

  /**
   * Build a native `ItemStack` from this stack. Requires {@link setMCBENative}
   * to have been called first; otherwise throws.
   */
  toNative(): ItemStack {
    const api = native;
    if (!api) {
      throw new Error(
        "MCBE native API not registered. Call setMCBENative({ ItemStack, EnchantmentType }) first.",
      );
    }
    const stack = new api.ItemStack(this.typeId, this.amount);
    const ench = stack.getComponent("minecraft:enchantable") as
      | EnchantableLike
      | undefined;
    if (ench) {
      for (const [id, level] of this.#ench) {
        try {
          ench.addEnchantment({ type: new api.EnchantmentType(id), level });
        } catch {
          // enchantment incompatible with this item, skip
        }
      }
    }
    if (this.#lore.length > 0) stack.setLore(this.#lore);
    return stack;
  }
}

/**
 * Convert a loot stack into a native `ItemStack`. Native stacks pass through
 * unchanged; {@link CompatibilityItemStack} is converted via `toNative()`.
 */
export function toNative(stack: LootStack): ItemStack {
  return stack instanceof CompatibilityItemStack ? stack.toNative() : stack;
}
