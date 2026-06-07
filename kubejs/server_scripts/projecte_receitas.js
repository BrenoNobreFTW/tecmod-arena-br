ServerEvents.recipes(event => {

  // --- 1. PEDRA FILOSOFAL ---
  // Remove a receita original
  event.remove({ output: 'projecte:philosophers_stone' })

  // Cria a nova receita (Expert Style)
  event.shaped('projecte:philosophers_stone', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'cataclysm:ignitium_ingot',        // Boss Ignis (Cataclysm)
    B: 'mysticalagradditions:insanium_block', // Farm Extremo (Mystical Agriculture)
    C: 'mekanism:pellet_antimatter',      // Antimatéria (Mekanism)
    D: 'minecraft:dragon_egg',            // Troféu Final
    E: 'powah:nitro_crystal_block'        // Tier Máximo (Powah)
  })

  // --- 2. MESA DE TRANSMUTAÇÃO ---
  // Remove a receita original
  event.remove({ output: 'projecte:transmutation_table' })

  // Nova receita usando a Pedra Filosofal recém-criada
  event.shaped('projecte:transmutation_table', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:obsidian',
    B: 'projecte:dark_matter',
    C: 'projecte:philosophers_stone'
  })

})