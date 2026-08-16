import { ItemStack } from "@minecraft/server";
import type { ItemDefine } from "./types";
import { applyEnchants } from "./ench";

/**
 * Create an ItemStack from an ItemDefine.
 * - `string`: plain item id.
 * - object: `{ id, ench, functions? }` — applies enchants and calls `functions.setLore`
 *   with the stack's current lore so the consumer can customize it via closure.
 */
export function createItem(def: ItemDefine, count: number): ItemStack {
  const stack = typeof def === "string" ? new ItemStack(def, count) : new ItemStack(def.id, count);
  if (typeof def !== "string") {
    applyEnchants(stack, def.ench);
    if (def.functions?.setLore) {
      def.functions.setLore(stack.getLore());
    }
  }
  return stack;
}