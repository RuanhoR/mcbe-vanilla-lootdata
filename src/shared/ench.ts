import { EnchantmentType, ItemStack } from "@minecraft/server";
import type { EnchEnum } from "./types";
import { randomRange } from "./utils";

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
export function getEnchLevel(stack: ItemStack, type: string): number {
  const ench = stack.getComponent("minecraft:enchantable");
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
export function hasEnchant(stack: ItemStack, type: string): boolean {
  return getEnchLevel(stack, type) > 0;
}

/**
 * Apply enchantments to an item stack.
 */
export function applyEnchants(stack: ItemStack, enchants: EnchantDefine[]): void {
  const ench = stack.getComponent("minecraft:enchantable");
  if (!ench) return;
  for (const e of enchants) {
    const level = typeof e.level === "number" ? e.level : randomRange(e.level.min, e.level.max);
    try {
      ench.addEnchantment({ type: new EnchantmentType(e.id), level });
    } catch {
      // enchantment incompatible with this item, skip
    }
  }
}