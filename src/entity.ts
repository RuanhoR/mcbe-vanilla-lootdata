import { Entity, ItemStack } from "@minecraft/server";
import { getEntityData } from "./shared/data/latest-entity";
import { getEnchLevel, getLootEnchantDrop } from "./shared/ench";
import { createItem } from "./shared/item";
import type { InputOptions } from "./shared/types";
import { randomRange, rollWeight, normalizeTypeId } from "./shared/utils";
import type { LootReturn } from "./block";

/**
 * Compute the vanilla loot of a killed entity.
 */
export function getEntityLoot(options: InputOptions): LootReturn {
  const empty: LootReturn = { items: [], orb: 0 };
  if (!options.isSurvival) return empty;

  const id = normalizeTypeId(options.origin);
  const data = getEntityData(id);
  if (!data) return empty;

  const result: LootReturn = { items: [], orb: 0 };

  if (data.item) {
    const [, countRange, weight] = data.item;
    let count = randomRange(countRange.min, countRange.max ?? countRange.min);
    if (data.UseEnchLooting) {
      const lootingLevel = getEnchLevel(options.useItem, "looting");
      if (lootingLevel > 0) {
        count = count + getLootEnchantDrop(lootingLevel) - 1;
      }
    }
    if (count > 0 && rollWeight(weight)) {
      result.items.push(createItem(data.item[0], count));
    }
  }

  if (data.lootConatiner && options.origin instanceof Entity) {
    const container = options.origin.getComponent("minecraft:inventory")?.container;
    if (container) {
      for (let i = 0; i < container.size; i++) {
        const stack = container.getItem(i);
        if (stack) result.items.push(stack);
      }
    }
  }

  if (options.flags?.lootOrb && data.lootOrb) {
    result.orb = randomRange(data.lootOrb.min, data.lootOrb.max);
  }

  return result;
}