# AGENTS.md

Minecraft Bedrock SAPI library (`@ojang/vanilla-lootdata`) that reproduces vanilla block/entity loot drops. Pure TS, ESM, published to npm. No server/plugin entrypoint — `src/index.ts` is the only public surface.

## Commands

```sh
pnpm check   # tsc --noEmit — only checks src/**/*.ts (tests are NOT typechecked)
pnpm test    # vitest run
pnpm build   # rolldown -c → minified ESM to dist/, @minecraft/server externalized
```

CI (`pnpm/action-setup`, Node 24) runs: check → test → build. `pnpm build` must pass before publish since `files` ships only `dist` + `LICENSE`.

## Gotchas

- **Do not "fix" misspelled API names.** `canDestory`, `lootConatiner`, `HandleUseCommand`, `UseEnchLooting` are intentional public API; renaming breaks consumers and tests assert on them.
- Tests mock `@minecraft/server` entirely via `vi.mock` in `tests/loot.test.ts` (mocked `ItemStack`, `EnchantmentType`, `Entity`). You cannot import real Bedrock API at test time.
- `pnpm check` uses `tsconfig.json` which includes only `./src/**/*.ts`. Test files are verified by vitest alone — fix type errors in tests yourself.
- `@minecraft/server` is a peer dependency (auto-installed by pnpm); `tsc` needs it present to typecheck `src/`.

## Data architecture

- Vanilla tables live in `src/shared/data/latest-block.ts` (1232 entries) and `latest-entity.ts` (149 entries) as flat `{ "id": BlockLootDataValue }` maps.
- **Id keys have no `minecraft:` prefix** (`"stone"`, `"zombie"`), but item ids inside `LootItem` tuples DO (`"minecraft:cobblestone"`). `normalizeTypeId` strips the prefix from `origin`, so both forms work at runtime.
- Entry format: `LootItem = [itemId | ItemDefine, { min, max? }, weight]` where weight is drop chance **0–100**.
- `registryBlockData` / `registryEntityData` merge into separate `custom*Data` maps that take precedence over internal data. Registering an id fully overrides vanilla; internal tables are read-only (`internalBlockData` / `internalEntityData`).
- `origin` accepts `Block | Entity | string`; entity container loot requires a real `Entity` instance (`lootConatiner`).