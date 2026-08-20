import type { EnchEnum } from "./types";
import { getMCBENative } from "./node-compatibility";
import { randomRange } from "./utils";

interface StackLike {
  getComponent(id: string): unknown;
}

interface EnchantableLike {
  getEnchantment(type: string | { id: string }): { level: number } | undefined;
  addEnchantment(enchantment: { type: unknown; level: number }): void;
}

export type EnchantDefine = {
  id: EnchEnum;
  level: number | { min: number; max: number };
};

/**
 * Vanilla fortune/looting drop count (same formula as xiuxianMod `utils/ore.ts`).
 * Returns the total drop count for a base-1 drop: `1..level+1`.
 */
export function getLootEnchantDrop(level: number): number {
  const rand = Math.random() * (level + 2);
  if (rand < 2) return 1;
  return 2 + Math.floor(rand - 2);
}

/**
 * Get the level of an enchantment on an item stack.
 */
export function getEnchLevel(stack: StackLike, type: string): number {
  const ench = stack.getComponent("minecraft:enchantable") as
    | EnchantableLike
    | undefined;
  if (!ench) return 0;
  try {
    return ench.getEnchantment(type)?.level ?? 0;
  } catch {
    return 0;
  }
}

/**
 * Check whether the item stack has the given enchantment.
 */
export function hasEnchant(stack: StackLike, type: string): boolean {
  return getEnchLevel(stack, type) > 0;
}

/**
 * Apply enchantments to an item stack. Uses a native `EnchantmentType` when one
 * has been registered via `setMCBENative`; otherwise passes plain string ids.
 */
export function applyEnchants(stack: StackLike, enchants: EnchantDefine[]): void {
  const ench = stack.getComponent("minecraft:enchantable") as
    | EnchantableLike
    | undefined;
  if (!ench) return;
  for (const e of enchants) {
    const level = typeof e.level === "number" ? e.level : randomRange(e.level.min, e.level.max);
    try {
      const nativeAPI = getMCBENative();
      const type = nativeAPI ? new nativeAPI.EnchantmentType(e.id) : e.id;
      ench.addEnchantment({ type, level });
    } catch {
      // enchantment incompatible with this item, skip
    }
  }
}