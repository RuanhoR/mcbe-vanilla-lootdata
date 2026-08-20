import type { ItemDefine } from "./types";
import { applyEnchants } from "./ench";
import { CompatibilityItemStack } from "./node-compatibility";

/**
 * Create a {@link CompatibilityItemStack} from an ItemDefine.
 * - `string`: plain item id.
 * - object: `{ id, ench, functions? }` — applies enchants and calls `functions.setLore`
 *   with the stack's current lore so the consumer can customize it via closure.
 *
 * Works in Node; convert to a real `@minecraft/server` stack with `toNative()`
 * (after calling `setMCBENative`).
 */
export function createItem(def: ItemDefine, count: number): CompatibilityItemStack {
  const stack = new CompatibilityItemStack(
    typeof def === "string" ? def : def.id,
    count,
  );
  if (typeof def !== "string") {
    applyEnchants(stack, def.ench);
    if (def.functions?.setLore) {
      def.functions.setLore(stack.getLore());
    }
  }
  return stack;
}