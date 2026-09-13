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

/**
 * Resolve a plain or namespaced id into its canonical lookup key.
 * Ids carrying any namespace pass through unchanged; bare ids default
 * to the vanilla `minecraft:` namespace.
 */
export function toNamespacedId(id: string): string {
  return id.includes(":") ? id : `minecraft:${id}`;
}

/**
 * Throw when a registry key uses the reserved vanilla `minecraft:`
 * namespace — internal tables own it entirely; custom loot must live
 * under any other namespace.
 */
export function assertNotMinecraftId(key: string): void {
  if (key.startsWith("minecraft:") || key === "minecraft") {
    throw new Error(
      `Cannot register "${key}": the "minecraft:" namespace is reserved for internal vanilla data. Use your own namespace instead.`,
    );
  }
}

/**
 * Validate a registry key: it must be fully namespaced as
 * `[a-z0-9_]+:[a-z0-9_]+` and must not use the reserved `minecraft:`
 * namespace.
 */
export function assertCustomId(key: string): void {
  if (!/^[a-z0-9_]+:[a-z0-9_]+$/.test(key)) {
    throw new Error(
      `Invalid registry id "${key}": expected "<namespace>:<path>" containing only [a-z0-9_].`,
    );
  }
  assertNotMinecraftId(key);
}