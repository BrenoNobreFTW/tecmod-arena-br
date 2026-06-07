# Tecmod Arena BR — Histórico Consolidado (v1.4 → v3.1.3)

> Retrospectiva completa dos primeiros ~10 meses de desenvolvimento.
> Para o changelog da versão atual, veja [CHANGELOG.md](CHANGELOG.md).

---

Este documento consolida todo o histórico de desenvolvimento do modpack desde a primeira versão pública (v1.4) até a versão atual (v3.1.3). Como não havia changelog formal antes, esta é a primeira retrospectiva oficial.

---

## 📊 Resumo Geral (v1.4 → v3.1.3)

| Categoria | v1.4 | v3.1.3 | Δ |
|---|---|---|---|
| **Mods (jar)** | 270 | 361 | **+91 líquido** |
| **Mods novos (nomes únicos)** | — | — | **+173 adições** |
| **Mods removidos** | — | — | **−85 cortes** |
| **Configs (entradas em `config/`)** | 347 | 434 | **+87** |
| **Capítulos de quest** | 0 | 35 | **+35 (criados do zero)** |
| **Quests totais** | 0 | ~2358 | **+1700+** |
| **Resource packs** | 8 (3 .disabled) | 19 ativos | **+15** |
| **Datapacks** | 0 | 2 | **+2** |
| **Tamanho do zip** | 3.0 MB | 13.3 MB | **+10.3 MB** |
| **NeoForge** | 21.1.185 | 21.1.230 | atualizado |

---

## 🗓️ Linha do Tempo por Era

### Era 1 — Fundação (v1.4 → v1.6.1) · Jul 2025
**7 releases em 5 dias.** Base inicial focada em Create + Mekanism + IE.
- v1.4 (7 Jul) — primeira release pública (3.0 MB)
- v1.5.1 → v1.5.6 (8-12 Jul) — iterações de mod/config
- v1.6 (beta) → v1.6.1 (12 Jul) — pré-renomeação

### Era 2 — Rebranding "Tecmod / Arena BR" (v2.0.0 → v2.1.6) · Jul-Ago 2025
**9 releases.** Limpeza grande de mods + rebranding. Tamanho do zip caiu de 3.0 MB → 1.6-1.8 MB (manifest enxuto).
- v2.0.0 → v2.0.2 (13-14 Jul) — nome do pack mudou para "Tecmod"/"Arena BR"
- v2.1.0 → v2.1.6 (19 Jul - 2 Ago) — refinamento contínuo

### Era 3 — Consolidação (v2.2.1) · Out 2025
**1 release.** Após hiato de 2 meses, salto pra 4.2 MB indica primeira leva grande de overrides (configs/scripts customizados).

### Era 4 — Renascimento "O Legado Não Morre" (v3.0.0.2 → v3.0.0.6) · Mar-Abr 2026
**5 releases.** Tamanho dobrou pra ~8 MB. Volta após hiato de 5 meses com identidade nova: **"Tecmod Arena BR O Legado Não Morre"**.

### Era 5 — Big Mod Expansion (v3.0.0.8 → v3.0.0.9) · Mai 2026
**2 releases em 2 dias.** Tamanho saltou pra 12.8 MB. Adição massiva de mods (Cold Sweat, Iron's Spellbooks, Cataclysm, mais Create addons) + primeiros capítulos de quest.

### Era 6 — Quest Overhaul & Polish (v3.1.0 → v3.1.3) · Mai 2026
**4 releases em 12 dias.** Foco em conteúdo: ~2358 quests escritas, sistema de habilidades, sistema Cold Sweat completo, validação massiva de itens, fix de HUD, keybinds.

---

## 🆕 Mods Adicionados (v1.4 → v3.1.3)

**Total: 173 mods novos.** Agrupados por categoria:

### ⚡ Create + Addons (28 mods)
`createaddition`, `createages`, `createbetterfps`, `createbigcannons`, `createdeco`, `createdieselgenerators`, `createdragonsplus`, `createenderstorage`, `createfood`, `createlowheated`, `createpickywheels`, `createtransmission`, `createultimine`, `create aeronautics bundled`, `create aeronautics ftb chunks`, `create central kitchen`, `create chimneys`, `create cold sweat`, `create compat core`, `create completeimmersiveaircraft`, `create encased`, `create gunsmithing`, `create ironspell recipe`, `create ltab` (Let The Adventure Begin), `create rustic structures`, `create structures arise`, `create things and misc`, `create bic bit`, `vintageimprovements`

### 🔥 Cold Sweat Suite (4 mods) — Era 5/6
`coldsweat`, `coldsweat altitude`, `create cold sweat`, `moresweatcompat`

### ⚙️ Mekanism + Addons (5 mods)
`mekanism extras`, `mekanism turrets`, `mekanismcovers`, `mekanism tfmg compat`, `kubejs mekanism`

### 🔌 AE2 + Refined Storage Stack (6 mods)
`advancedae`, `applied generators`, `appliede` (AppliedE — ProjectE bridge), `appliedflux`, `extendedae`, `refinedstorage emi integration`

### 🪄 Magia (12 mods)
`irons spellbooks`, `irons lib`, `irons jewelry`, `irons apothic`, `forbidden arcanus`, `enigmaticlegacyplus`, `ars creo`, `ars unification`, `reliquified ars nouveau`, `gtbcs geomancy plus`, `gtbcs spell lib`, `apothiccombat`

### 🐉 Mobs / Combate / Aventura (10 mods)
`mowziesmobs`, `dungeonsarise` (When Dungeons Arise), `integrated cataclysm`, `reliquified lenders cataclysm`, `morerelics`, `endermanoverhaul`, `guardvillagers`, `bountiful`, `not enough revives`, `wda questline` + `lootintegration wda`

### 🚂 Veículos / Transporte (4 mods)
`railways` (Steam 'n' Rails), `tempad`, `perspatium` (Ad Astra: Per Spatium), `dimension expansion`

### 🗺️ Mapas / Mundo (8 mods)
`xaerominimap`, `xaeroworldmap`, `xaeros waystones compatibility`, `ftbxaerocompat`, `chunky`, `sereneseasons`, `biomesoplenty`, `lithostitched`

### ⚡ Performance / Otimização (16 mods)
`modernfix`, `ferritecore`, `immediatelyfast`, `lithium`, `noisium`, `entityculling`, `gpumemleakfix`, `fastfurnace`, `fastsuite`, `fastworkbench`, `sodium extra`, `sodiumoptionsapi`, `reeses sodium options`, `spark`, `servercore`, `toofast`

### 🍳 Industrial / Tech Extra (8 mods)
`tfmg` (The Factory Must Grow), `powah`, `oritech` (Oh The Rests You'll Take? não — Oritech), `xnet`, `cable facades`, `cabletiers`, `storagedrawers`, `functionalstorage`

### 📋 EMI / JEI Ecosystem (6 mods)
`emi`, `emi enchanting`, `emi loot`, `emiprofessions`, `dnejei` (Data & Essence JEI), `craftingstationjei`

### 🎒 Inventário / UI (10 mods)
`inventoryhud`, `invtweaks`, `mousetweaks`, `controllable`, `trashslot`, `trashcans`, `clickadv`, `portablecraftingtable`, `simplylight`, `simple burnout torch`

### 🤖 KubeJS / Modding API (7 mods)
`kubejs neoforge`, `rhino`, `lootjs`, `kubejspowah`, `kubejs mekanism`, `occultism kubejs`, `recipeessentials`

### 👤 Player / Animação (5 mods)
`customplayermodels`, `cpm svc compat`, `emotecraft for mc`, `notenoughanimations`, `skinlayers3d`

### 🎨 Visual / Texturas (6 mods)
`ctm` (Connected Textures), `entity model features`, `entity texture features`, `supplementaries`, `quark`, `interiors`

### 🔊 Áudio (3 mods)
`sounds`, `more sounds`, `mru`

### 🏛️ Bibliotecas / Core (12 mods)
`anvilcore`, `atlas api`, `bjornlib`, `caelus`, `fzzy config`, `glodium`, `halcyon v`, `integrated api`, `kambrik`, `lithostitched`, `moonlight`, `papi`, `sable`, `structureessentials`, `data anchor`, `databank`

### 🛡️ Outros
`alltheleaks`, `almanac`, `almostunified`, `attributefix`, `chunksending`, `forgivingvoid`, `ftb jei extras`, `handcrafted`, `morered`, `neoauth`, `ntgl`, `ore doubling mod`, `rarcompat`, `ritchiesprojectilelib`, `sliceanddice forge`, `aquaculturedelight`, `artifacts`, `extra mod integrations all`, `integratedcrafting`, `zeta` (Quark lib)

---

## ➖ Mods Removidos (v1.4 → v3.1.3)

**Total: 85 mods cortados.** Principais motivos: redirecionamento de escopo (tirar fantasy/aventura, focar em tech+RPG steampunk), substituição por alternativas melhores, conflitos.

### 🌳 Dimensões / Aventura cortadas
`aether`, `aethervillages`, `twilightforest`, `reliquified twilight forest`, `betterarcheology`, `escalated`

### ⚛️ Tech alternativos removidos
`modern industrialization`, `extendedcrafting`, `justdirethings`, `megacells`, `rftoolsbuilder`, `rftoolspower`, `rftoolsutility`, `extremereactors2`, `zerocore2`, `laserio`, `additionalenchantedminer`, `applied mekanistics`, `ae2ct`, `ae2qolrecipes`

### 🌿 Decoração / Cosmético removidos
`bibliobiomes`, `bibliocraft`, `bibliowoods`, `unusual furniture`, `valhelsia furniture`, `valhelsia structures`, `mcwaurora`, `auroras`, `cobblegengalore`, `blocksyouneed luna`, `additionalstructures`, `additionalredstone`, `steampunk clocktower`, `reinforced construction`, `pipeorgans`

### 🧙 Magia substituída
`ars additions`, `ars fauna`, `ars monde lib`, `create apothic enchanting`, `apothic materials`

### 🌱 Farming alternativo
`harvest with ease`, `cookingforblockheads`, `mechanical botany`, `create integrated farming`

### 🔧 Utilitários substituídos
`chunkloaders`, `chickenchunks`, `farsight`, `chippedexpress universal`, `reintegrated chipped`, `craftingstation` (substituído por `craftingstationjei`), `crafting on a stick`, `portable crafting grid`, `lithostitched neoforge` (re-adicionado como `lithostitched`), `cobweb`, `fancymenu`, `konkrete`, `netherportalfix`, `nochatreports`, `enchdesc`, `addonslib`, `bcc`, `bellsandwhistles`

### 📦 Storage alternativo
`storage drawers neoforge` (versão antiga, substituída por `storagedrawers neoforge` repackaged)

### 🐾 Mobs / Compat antigos
`entity model features neoforge`, `entity sound features neoforge`, `entity texture features neoforge` (versões antigas substituídas por non-suffixed)
`moonlight` (versão antiga, substituída por `moonlight neoforge`)
`immersive armors`, `dndesires`, `matc`, `melody`, `t and t neoforge fabric`, `tf dnv`, `trading floor`

### 🛠️ Loot / FTB antigos
`lootintegrations ctov`, `lootintegrations valhelsia`, `ftb chunks modded`, `ftb materials neoforge`

### 🌌 Diversos
`createframed`, `create dragons plus` (versão antiga; substituída por `createdragonsplus` repackaged), `sliceanddice neoforge` (substituído por `sliceanddice forge`), `scalablecatsforce`, `extralib`, `unilib`, `default skill trees` (substituído por `tecmod_skills`)

---

## 📜 Quests (criadas do zero)

A v1.4 tinha **zero capítulos**. Tudo abaixo foi escrito durante o desenvolvimento (principalmente Era 5 e 6).

### 35 capítulos · ~2358 quests

| Capítulo | Quests | Tipo |
|---|---|---|
| Bem-vindo à Arena | ~10 | Onboarding + Escolha do Destino |
| Cold Sweat | 30 | Era 6 (novo) |
| Create | 113 | Refeito (hub: andesite_alloy) |
| Create Addons | ~40 | Novo |
| Mekanism | 121 | Refeito (hub: steel_casing) |
| Immersive Engineering | 133 | Refeito (hammer → coal_coke → steel) |
| AE2 | 107 | Novo |
| Refined Storage | 72 | Novo |
| Storage (Sophisticated / Travelers) | 90 | Novo |
| Ars Nouveau | 123 | Novo |
| Iron's Spellbooks | 98 | Novo |
| Forbidden Arcanus | 82 | Novo |
| Occultism | 87 | Novo |
| Apotheosis | 76 | Reorganizado (INFERNO/OCEANO/PROFUNDEZA) |
| Mystical Agriculture | 104 | Novo |
| Farmer's Delight | 89 | Novo |
| Aquaculture | 85 | Novo |
| Cataclysm | 91 | Novo |
| Enigmatic Legacy | 97 | Novo |
| Mowzie's Mobs | 39 | Novo |
| Aeronautics / Big Cannons / Trains / Estruturas & Farms | ~80 | Novo |
| EnderIO / Industrial Foregoing / Oritech / PneumaticCraft / Powah / TFMG / WDA | ~200 | Novo |
| Armaduras / Espadas / Ferramentas / Caminho Máquinas | ~60 | Gear progression |

### Sistema de Labels Customizadas
- ~150+ PNGs gerados via PIL/Pillow (fontes **IronManOfWar-B/C**)
- Resource pack próprio: `tecmod_quest_labels`
- Estilo brass/copper steampunk consistente com o tema

### Validação Massiva de Itens (Era 6)
**4 fases de correção** usando KubeJS `Item.exists()` runtime check + análise estática:

**Fase 1 — 13 IDs inválidos em Iron's Spellbooks + Ars Nouveau:**
- 9 pergaminhos de escola → `scroll` + `spell_container` colorido
- `affinity_ring_fire/ice/lightning` → `affinity_ring`
- `dreadsword/firebrand/obsidian_katana` → `misery/keeper_flamberge/legionnaire_flamberge`
- `legendary_spell_book` → `netherite_spell_book`
- `inscription_table` → `scribes_table`
- `alteration_apparatus` → `alteration_table`
- `summoning_crystal` (Occultism) → `summon_focus`
- `amulet_of_environment` → `amulet_of_mana_regen`
- `ring_of_extend_time` → `ring_of_potential`

**Fase 2 — 40 placeholders em 7 capítulos:**
- Apotheosis (12), Mowzie's Mobs (10), Occultism (8), Cataclysm (4), Farmer's Delight (2), Forbidden Arcanus (2), Storage (2)

**Fase 3 — Validação runtime via KubeJS:**
- Script `_validate.js` (renomeado de `_questitemcheck.js`) confere todo ID no startup
- 13 ghost-items identificados e corrigidos (lang+model existiam, item não registrado)

**Fase 4 — Substituições pós-validação:**
- `occultism:soul_gem_empty → soul_gem`
- `occultism:trinity_gem_empty → trinity_gem`
- `occultism:fragile_soul_gem_empty → spirit_attuned_crystal`
- `occultism:otherglass → otherstone`
- `cataclysm:final_fractal → the_annihilator`
- `cataclysm:zweiender → the_incinerator`
- `irons_spellbooks:arcane_debris → arcane_ingot`
- `irons_spellbooks:arcane_salvage → arcane_essence`
- `irons_spellbooks:enchanted_ward_amulet → concentration_amulet`
- `apotheosis:lucky_foot → apotheosis:gem`
- `apothic_enchanting:infused_endshelf → draconic_endshelf`
- `ars_nouveau:ring_of_amplify → ring_of_greater_discount`
- `travelersbackpack:travelers_backpack → standard`

---

## 🎁 Conteúdo Customizado

### Sistema "Escolha do Destino" (Era 6)
- Quest **"Escolha seu Destino"** entrega **1× Ficha do Destino** (item KubeJS)
- 2 caminhos mutuamente exclusivos (`consume_items: true`):
  - 🔴 **Caminho Maldito**: equipa `cursed_ring` → ganha `unwitnessed_amulet` + 200 XP
  - ✨ **Caminho Protegido**: ganha `unwitnessed_amulet` + 100 XP
- Auto-complete via `curios_quest_autocomplete.js` (36 itens curio mapeados)
- Substitui o `giveStarterGear` do Enigmatic Legacy Plus (desativado)

### Item Customizado: Ficha do Destino
- ID: `kubejs:ficha_destino` · §6 raridade épica · stack 1
- Textura 16×16 customizada: moeda dourada com ampulheta gravada (areia vermelha cima/dourada baixo + aura roxa épica)
- Asset em `kubejs/assets/kubejs/textures/item/ficha_destino.png`

### Árvore de Habilidades "Engenharia" (Puffish Skills)
- **15 nós, 13 perks** com tema steampunk
- Datapack separado: `tecmod_skills.zip` (namespace `tecmod`)
- Atributos: `movement_speed`, `attack_speed`, `luck`, `max_health`, `mining_speed`, `fortune`, `jump`, `melee_damage`, `ranged_damage`, `resistance`, `healing`, `stamina`
- Ícone: `create:cogwheel` · Tecla: **K**

### KubeJS Scripts (servidor)
- `custom_items.js` — registra `kubejs:ficha_destino` + `kubejs:incomplete_steel_casing`
- `curios_quest_autocomplete.js` — auto-complete de quests por equipar curio (36 itens mapeados)
- `loot_tweaks_wda.js` — bônus de loot WDA + Cataclysm + Mowzies
- `projecte_receitas.js` — integrações ProjectE
- `slots_iniciais.js` — slot starter (desativado)
- `one_player_sleep.js` — dormir com 1 jogador
- `_validate.js` — validador runtime de IDs

### KubeJS Data
- `kubejs/data/tecmod/tags/item/altitude_insulation.json` — tag para proteção de altitude no Cold Sweat

---

## 🎨 HUD & Visual

### Iron's Spellbooks
- `manaBarAnchor = "Hunger"` + `manaBarDisplay = "Contextual"` (default — barra de mana só aparece quando segura magia)
- `spellBarAnchor = "Hotbar"` + `spellBarDisplay = "Always"`

### Cold Sweat
- `Custom hotbar layout = true` (config oficial — desloca XP em 4px pra termômetros)
- Altitude config: 3 faixas frias protegidas por tag `tecmod:altitude_insulation` (sets Lã de Cabra + Hoglin)

### Enigmatic Legacy Plus
- `etheriumShieldRenderLayer = false`
- `etheriumShieldIcon = false`
- `giveStarterGear = false`

### Inventory HUD+
- Editor de posições via tecla **0** (zero)
- Todas features mantidas (ArmorDamage, Potions, etc.)
- Posições calibradas no `inventoryhud-client.toml`

### Resource Packs (ordem por prioridade na 3.1.3)
1. FreshAnimations v1.10.4 (base)
2. Fresh Moves v3.1 (extends, com olhos animados)
3. **FA+Emissive v1.6** (olhos brilhantes — FA+All_Extensions removido por bugar texturas do porco)
4. FA+Spiders v2.2
5. Excalibur Burnt/Create-6
6. Create Style Interface + addons (MekaPipe, SophBackpacks, EasyVillager, Looter)
7. Clearate, Create Tempad, Create Utility, Created Simple Storage, Metal Pipe
8. The Brazilian Project (PT-BR)
9. Icon Fresh 0.4 (ícones Xaero)
10. `tecmod_quest_labels` (custom)

### Resource Packs removidos
- AOC Resources (.disabled)
- Ars-Nouveau-Brass-ified-Create-Style (ANBICS)
- Create LootR Chest (substituído por `create_looter_1.21.1-v1`)
- Create Style for Refined Storage
- CreateSophisticatedBackpacks (substituído por `CreateSophBackpacks`)
- CreateWaystones v1.0.2.b
- Create_UI_1.21 (.disabled)

---

## ⌨️ Keybinds (12+ conflitos resolvidos · Era 6)

### In-world
- **B** → `not_enough_revives.bleed_out` (livre; movidos: emotecraft.fastchoose, occultism.backpack, xaero_new_waypoint, sophisticatedbackpacks.open_backpack)
- **M** → Xaero Map único (FTB Chunks minimap desligado; enderio.toggle_magnet → keypad.6)
- **O** → Iris shaders (inventoryhud.openconfig liberado)
- **K** → Puffish Skills (iris.toggleShaders → F6; kubedex → F7)
- **V** → `irons_spellbooks.spellbook_cast` (cataclysm.ability → keypad.divide; ars_nouveau.selection_hud → apostrophe; voice_chat → keypad.subtract)
- **C** → `ars_nouveau.open_book` (cataclysm.helmet_ability → keypad.7)
- **Y** → `xaero_minimap_settings` (cataclysm.chestplate_ability → keypad.decimal)
- **N** → `mekanism.mode` (occultism.storage_remote → insert)
- **X/Z** → `ars_nouveau` slots (expanded_combat.cycle_quiver_left → F10, _right → period)
- **0** (zero topo) → `inventoryhud.editor` (editor in-game)

---

## ⚙️ Configurações Importantes

### Sophisticated Backpacks
Slot counts restaurados aos defaults: 27/45/54/81/108/120 (leather/copper/iron/gold/diamond/netherite)

### ModernFix (performance)
- `mixin.perf.dynamic_resources = true`
- `mixin.perf.deduplicate_location = true`
- `mixin.perf.dynamic_entity_renderers = true`
- `mixin.perf.ingredient_item_deduplication = true`
- `mixin.bugfix.missing_block_entities = true`
- `mixin.bugfix.packet_leak = true`
- `mixin.bugfix.skip_redundant_saves = true`

### Cold Sweat Altitude
- 3 faixas frias ativadas: `high_peaks/-0.08`, `low_sky/-0.20`, `extreme_sky/-0.45`
- Tag `tecmod:altitude_insulation` = sets Lã de Cabra + Hoglin
- `requiredPieces = 1`, `protectionReductionPerPiece = 0.25`, `fullProtectionPieces = 4`
- 4 peças = frio anulado, parcial = proporcional

### Cold Sweat Main
- Grace Period 6000 ticks (5 min spawn imune)
- Acclimation Speed 0.0011 (acclimation reduzido pra ser mais punitivo)

---

## 🧹 Mods / Cleanup importantes da Era 6

### ❌ Removidos por conflito
- **iris-flywheel-compat** — `accesstransformer.cfg` faltando + spam de warnings do Veil → causava texturas brancas no Create sob shader E travava seletor de shaders do Iris

### ✅ Reativados
- **Reese's Sodium Options** + **SodiumOptionsAPI** — confirmados funcionar entre versões (1.21.4 jar no pack 1.21.1)

---

## 🗺️ Mapa
- FTB Chunks minimap **desligado** (`minimap.enabled = false`)
- Xaero's Minimap único minimap ativo
- Iris shaderpack via menu de vídeo + tecla `O`

---

## 🧹 Limpeza Geral (Era 6)
- 177 arquivos `.bak` em `config/` removidos
- 36 backups de quest chapters (`.preFIX/.preEXP/.preDEP`) removidos
- 114 logs antigos comprimidos removidos
- 18 crash reports antigos removidos
- Scripts temporários (`.py`) removidos

---

## 📝 Notas Conhecidas

- Erros de loot table durante `/reload` (`railways:track_tfc_*`, `mekanism_extras:absolute_*`) são **inofensivos** — registros preventivos pra mods não instalados (TFC, Twilight Forest, Natures Spirit)
- Conflito TFMG × Create no JEI (`create:potion subtype already registered`) — não afeta gameplay, só impede `/reload`. Use **restart do mundo** pra recarregar scripts KubeJS
- **not_enough_revives**: aperte **B** pro bleed out quando em knockdown

---

## 🗂️ Versões Publicadas no CurseForge

| Versão | Data | Tamanho | Notas |
|---|---|---|---|
| **3.1.3** | 24 Mai 2026 | ~13.4 MB | Este release (em preparação) |
| 3.1.2 | 19 Mai 2026 | 13.3 MB | Último publicado anterior |
| 3.1.1 | 14 Mai 2026 | 13.1 MB | |
| 3.1.0 | 12 Mai 2026 | 13.1 MB | |
| 3.0.0.9 | 8 Mai 2026 | 12.8 MB | |
| 3.0.0.8 | 6 Mai 2026 | 12.8 MB | Big mod expansion |
| 3.0.0.6 | 20 Abr 2026 | 8.2 MB | |
| 3.0.0.5 fix | 4 Mar 2026 | 8.2 MB | |
| 3.0.0.5 | 4 Mar 2026 | 8.2 MB | |
| 3.0.0.4 | 1 Mar 2026 | 8.1 MB | |
| 3.0.0.2 | 1 Mar 2026 | 8.1 MB | Renascimento "O Legado Não Morre" |
| 2.2.1 | 4 Out 2025 | 4.2 MB | Primeira leva de overrides |
| 2.1.6 | 2 Ago 2025 | 1.8 MB | |
| 2.1.5 | 22 Jul 2025 | 1.8 MB | |
| 2.1.4 | 21 Jul 2025 | 1.8 MB | |
| 2.1.3 (beta) | 21 Jul 2025 | 1.8 MB | |
| 2.1.1 | 20 Jul 2025 | 1.8 MB | |
| 2.1.0 | 19 Jul 2025 | 1.8 MB | |
| 2.0.2 | 14 Jul 2025 | 1.7 MB | |
| 2.0.1 | 13 Jul 2025 | 1.6 MB | |
| 2.0.0 | 13 Jul 2025 | 1.6 MB | Rebranding "Tecmod" |
| 1.6.1 | 12 Jul 2025 | 3.0 MB | |
| 1.6 (beta) | 12 Jul 2025 | 3.0 MB | |
| 1.5.6 | 12 Jul 2025 | 3.0 MB | |
| 1.5.4 | 12 Jul 2025 | 3.0 MB | |
| 1.5.3 | 11 Jul 2025 | 2.9 MB | |
| 1.5.1 | 8 Jul 2025 | 3.0 MB | |
| **1.4** | 7 Jul 2025 | 3.0 MB | Primeira release pública |
