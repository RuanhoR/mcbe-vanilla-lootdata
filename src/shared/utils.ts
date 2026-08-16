import type { Block, Entity } from "@minecraft/server";

/**
 * Random integer between min and max (inclusive).
 */
export function randomRange(min: number, max: number): number {
  if (max <= min) return min;
  return min + Math.floor(Math.random() * (max - min + 1));
}

/**
 * Roll a drop by weight (percentage, 0-100).
 */
export function rollWeight(weight: number): boolean {
  return Math.random() * 100 < weight;
}

/**
 * Normalize a block/entity origin into a plain id (no `minecraft:` prefix).
 */
export function normalizeTypeId(origin: Block | Entity | string): string {
  const id = typeof origin === "string" ? origin : origin.typeId;
  return id.startsWith("minecraft:") ? id.slice("minecraft:".length) : id;
}