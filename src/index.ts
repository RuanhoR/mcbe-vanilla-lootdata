import { getBlockLoot } from "./block";
import { getEntityLoot } from "./entity";
import type { InputOptions } from "./shared/types";

export * from "./shared/types";
export * from "./shared/ench";
export * from "./shared/utils";
export * from "./shared/item";
export * from "./shared/node-compatibility";
export * from "./block";
export * from "./entity";
export { internalBlockData, getBlockData, registryBlockData } from "./shared/data/latest-block";
export { internalEntityData, getEntityData, registryEntityData } from "./shared/data/latest-entity";

/**
 * Compute the vanilla loot of a block or entity based on `options.type`.
 */
export function getLoot(options: InputOptions) {
  return options.type === "block" ? getBlockLoot(options) : getEntityLoot(options);
}