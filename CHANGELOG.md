# Tecmod Arena BR — Changelog

> **Modpack ID:** 322830 · **Autor:** BrenoSNobreFTW · **MC:** 1.21.1 NeoForge
> Histórico das versões anteriores (v1.4 → v3.1.3): veja [CHANGELOG_HISTORICO.md](CHANGELOG_HISTORICO.md)

---

## v3.1.5 — Mod Updates & Quest Fix (7 Jun 2026)

Atualização de manutenção: 54 mods atualizados via CurseForge App, fix do crash ao receber quests, NeoForge 21.1.230 → 21.1.233.

### 🐛 Bugfix crítico
- **`ftbquests-client.snbt`**: `completion_style` e `reward_style` mudados de `"toast"` para `"chat"`
  - Resolve crash ao usar "Receber todas" com muitas quests acumuladas (especialmente após matar bosses Apotheosis)
  - Notificações agora aparecem no chat em vez de toast (mais leve)
  - Sincronizado nas pastas do instance + ServerPack + Servidor Teste

### ⚙️ NeoForge
- `21.1.230` → `21.1.233`
- Auto-detecção via `version.txt` (linha 2) no ServerPack

### 🔄 Mods atualizados (54)

**Magia:**
- `ars_nouveau` → 5.11.7
- `ars_creo` → 5.4.0
- `ars_elemental` → 0.7.9.4
- `irons_spellbooks` → 3.16.0
- `irons_lib` → 1.1.0
- `Apotheosis` → 8.5.4
- `occultism` → 1.218.0

**Create + Addons:**
- `create-enchantment-industry` → 2.4.1
- `createaddition` → 1.6.0
- `createages` → 0.6.0
- `createbigcannons` → 5.11.6
- `createdieselgenerators` → 1.3.13
- `createfood` → 2.5.0
- `createtransmission` → 1.2.1
- `CreateDragonsPlus` → 1.11.1b
- `create_connected` → 1.2.0
- `create_ltab` → 4.0.2
- `create_structures_arise` → 176.49.48
- `create_things_and_misc` → 4.1.1
- `create_aeronautics_ftb_chunks` → 1.0.3

**Tech / Storage:**
- `refinedstorage` → 2.0.9
- `enderio` → 8.2.11-beta
- `oritech` → 1.2.7
- `AppliedFlux` → 2.1.5
- `sophisticatedbackpacks` → 3.25.54.1834
- `sophisticatedcore` → 1.4.47.1956
- `sophisticatedstorage` → 1.5.57.1790
- `cable_facades` → 2.1.0
- `cabletiers` → 0.6.12
- `integrateddynamics` → 1.33.2

**Sobrevivência / Mundo:**
- `ColdSweat` → 2.4.1
- `coldsweat_altitude` → 0.6.3
- `L_Ender's Cataclysm` → 3.29
- `guardvillagers` → 2.4.9
- `friendsandfoes` → 4.0.26
- `immersive_aircraft` → 1.4.6
- `waystones` → 21.1.34
- `supplementaries` → 3.6.7
- `Quark` → 4.1-480
- `FramedBlocks` → 10.6.0

**FTB / Quests:**
- `ftb-quests` → 2101.1.25
- `ftb-chunks` → 2101.1.15
- `puffish_skills` → 0.18.0

**Performance / Core / Libs:**
- `modernfix` → 5.27.11
- `moonlight` → 3.0.16
- `lithostitched` → 1.7.9
- `fragmentum` → 2.2.4
- `collective` → 8.25
- `cristellib` → 3.1.6
- `cpm-svc-compat` → 1.3.1

**Outros:**
- `loot_journal` → 6.2.1
- `trashslot` → 21.1.11
- `voicechat` → 2.6.18

### 🧪 Teste no Servidor (NeoForge 21.1.233)
- ✅ Servidor dedicado subiu sem crash — `Done (20.6s)`, load total 188s
- ✅ Conexão + voice chat + FTB Backups + KubeJS (curios slots) funcionando
- ✅ RS 2.x validado (já rodava em 2.0.8)
- ⚠️ EuphoriaPatcher removido do server (client-only, crashava dedicated)

### 📝 Erros conhecidos no log do servidor (inofensivos)
- Steam'n'Rails tracks de woods de mods não instalados (TFC/Twilight/NaturesSpirit) — loot não dropa pra esses, tracks normais OK
- Mekanism Extras factory tiers (absolute/cosmic/supreme/infinite) — loot tables faltando
- ColdSweat: 5 biomas BOP renomeados/removidos (`boreal_forest`, `clover_patch`, `highland_moor`, `outback`, `wooded_wasteland`) — temperatura nesses biomas não aplica
- AllTheLeaks × Supplementaries 3.6.7 (`ColoredMapHandler` class) — leak fix não aplica, inofensivo
- Perspatium referencia items do Stellaris (não instalado)

### 📦 Notas de publicação
- Manifest.json é regenerado automaticamente pelo CurseForge App ao fazer Export Profile
- Server Pack mods.zip precisa ser regerado e re-uploaded no Dropbox pra atualização automática chegar nos jogadores
- Testado no Servidor (Nova pasta) antes de publicar
