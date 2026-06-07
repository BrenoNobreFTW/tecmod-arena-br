# Tecmod Arena BR — Dev Repository

> Modpack steampunk RPG PT-BR para Minecraft 1.21.1 NeoForge
> **Versão atual:** v3.1.3
> **CurseForge:** https://www.curseforge.com/minecraft/modpacks/techmodarenabr

Este repositório contém **apenas os arquivos de desenvolvimento** do modpack (configs, scripts, quests, docs). Os mods em si não ficam aqui — eles são baixados pelo CurseForge App através do `manifest.json`.

---

## 📂 Estrutura

| Pasta / Arquivo | Conteúdo |
|---|---|
| `manifest.json` | Lista de mods (projectID + fileID) que o CurseForge baixa |
| `config/` | Configs de todos os mods + FTB Quests (2378 quests em 37 capítulos) |
| `kubejs/` | Scripts customizados (items, auto-complete de quests, loot tweaks) |
| `defaultconfigs/` | Configs aplicados a novos mundos |
| `datapacks/` | Árvore de habilidades customizada (Puffish Skills) |
| `resourcepacks/tecmod_quest_labels/` | Labels PNG das quests (estilo brass) |
| `CHANGELOG.md` | Histórico completo v1.4 → v3.1.3 |
| `CURSEFORGE_DESCRIPTION_HTML.html` | Descrição publicada na página do CurseForge |
| `options.txt` | Opções do cliente (ordem dos resource packs, etc.) |

---

## 🚀 Como rodar localmente

1. Instala o **CurseForge App**: https://www.curseforge.com/download/app
2. Vai em "Browse Modpacks" → procura **"Tecmod Arena BR"**
3. Click em Install — o app baixa todos os mods automaticamente via `manifest.json`
4. Ou: faz fork/clone deste repo e importa o `manifest.json` no CF App via "Create Custom Profile"

---

## 🖥️ Servidor

O ServerPack está na release do CurseForge. Inclui:
- `ServerPack.bat` / `.sh` — launcher com auto-update via Dropbox
- `ServerPack_DEBUG.bat` / `.sh` — versão sem auto-restart pra debugar crashes
- `version.txt` — 2 linhas: versão do modpack + versão do NeoForge (auto-detecção)

Mais detalhes em `LEIA-ME - Otimizacao.txt` dentro do ServerPack.

---

## 📜 Highlights da v3.1.3

- **2378 quests** em 37 capítulos PT-BR
- Novo grupo **Sobrevivência**: Cold Sweat + Serene Seasons + Mecânicas
- Sistema **"Escolha do Destino"** (item customizado KubeJS)
- Árvore de habilidades **"Engenharia"** (15 nós, 13 perks)
- When Dungeons Arise traduzido para PT-BR
- HUD calibrado (Iron's Spellbooks, Cold Sweat, InventoryHUD+)
- 12+ conflitos de keybind resolvidos
- iris-flywheel-compat removido (causava texturas brancas)
- EuphoriaPatcher removido do server pack (crashava dedicated)

Veja o [CHANGELOG.md](CHANGELOG.md) completo.

---

## 👤 Autor

**BrenoSNobreFTW** — Construa fábricas. Domine a magia. Sobreviva ao frio. 🏛️⚙️
