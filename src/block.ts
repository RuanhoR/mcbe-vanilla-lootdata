import { getBlockData } from "./shared/data/latest-block";
import { getEnchLevel, getLootEnchantDrop, hasEnchant } from "./shared/ench";
import { createItem } from "./shared/item";
import type { LootStack } from "./shared/node-compatibility";
import type { InputOptions } from "./shared/types";
import { randomRange, rollWeight, normalizeTypeId } from "./shared/utils";

export interface LootReturn {
  /** Item stacks to spawn (`CompatibilityItemStack`; convert via `toNative`). */
  items: LootStack[];
  /** Experience orb count to spawn. */
  orb: number;
  /** True when the block needs command handling (e.g. lectern). */
  useCommand?: boolean;
}

/**
 * Compute the vanilla loot of a mined block.
 */
export function getBlockLoot(options: InputOptions): LootReturn {
  const empty: LootReturn = { items: [], orb: 0 };
  if (!options.isSurvival) return empty;

  const id = normalizeTypeId(options.origin);
  const data = getBlockData(id);
  if (!data || data.canDestory === false) return empty;

  const silkTouch = hasEnchant(options.useItem, "silk_touch");
  const fortuneLevel = getEnchLevel(options.useItem, "fortune");
  const lootItem = silkTouch ? (data.silkTouchLoot ?? data.item) : data.item;

  const result: LootReturn = { items: [], orb: 0 };
  if (data.HandleUseCommand) result.useCommand = true;

  if (lootItem) {
    const [, countRange, weight] = lootItem;
    let count = randomRange(countRange.min, countRange.max ?? countRange.min);
    if (!silkTouch && data.fortune && fortuneLevel > 0) {
      count = count + getLootEnchantDrop(fortuneLevel) - 1;
    }
    if (count > 0 && rollWeight(weight)) {
      result.items.push(createItem(lootItem[0], count));
    }
  }

  if (options.flags?.lootOrb && data.lootOrb) {
    result.orb = randomRange(data.lootOrb.min, data.lootOrb.max);
  }

  return result;
}