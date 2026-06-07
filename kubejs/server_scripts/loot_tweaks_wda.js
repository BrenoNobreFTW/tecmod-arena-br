// =====================================================
// Loot Tweaks — When Dungeons Arise + Cataclysm + Mowzie's
// LootJS 3.7.0 NeoForge API
// =====================================================
// API correta:
//   LootJS.modifiers(event => { ... })
//   event.addTableModifier(/regex/)
//   event.addEntityModifier('mod:entity')
//   .randomChance(0.30)
//   .addLoot('item_id' | Item.of(...))
// =====================================================
LootJS.modifiers(event => {

    // ----------------------------------
    // WHEN DUNGEONS ARISE — chest bonus
    // ----------------------------------
    event.addTableModifier(/dungeons_arise:.*/)
        .randomChance(0.30)
        .addLoot(
            Item.of('mekanism:hdpe_pellet', 2),
            Item.of('powah:capacitor_hardened', 1),
            Item.of('industrialforegoing:plastic', 6),
            Item.of('immersiveengineering:plate_steel', 4),
        )

    // Coastal / Lighthouse / Pirate Ship — aquatic loot
    event.addTableModifier(/dungeons_arise:.*(lighthouse|undead_pirate_ship|fishing_hut|illager_corsair|illager_galley).*/)
        .randomChance(0.25)
        .addLoot(
            Item.of('aquaculture:neptunium_ingot', 2),
            Item.of('aquaculture:neptunium_fishing_rod', 1),
        )

    // Treasure boost geral
    event.addTableModifier(/dungeons_arise:.*/)
        .randomChance(0.50)
        .addLoot(
            Item.of('minecraft:diamond', 2),
            Item.of('minecraft:emerald', 3),
            Item.of('apotheosis:gem_dust', 1),
        )

    // ----------------------------------
    // CATACLYSM bosses — drops extras
    // ----------------------------------
    event.addEntityModifier('cataclysm:ancient_remnant')
        .randomChance(1.0)
        .addLoot(
            Item.of('apotheosis:gem', 1),
            Item.of('minecraft:netherite_scrap', 2),
        )

    event.addEntityModifier('cataclysm:ignis')
        .randomChance(0.75)
        .addLoot(
            Item.of('apotheosis:gem', 1),
            Item.of('minecraft:blaze_rod', 6),
        )

    event.addEntityModifier('cataclysm:ender_guardian')
        .randomChance(1.0)
        .addLoot(
            Item.of('apotheosis:gem', 1),
            Item.of('minecraft:ender_pearl', 6),
        )

    event.addEntityModifier('cataclysm:netherite_ministrosity')
        .randomChance(0.75)
        .addLoot(
            Item.of('apotheosis:gem', 2),
            Item.of('minecraft:netherite_ingot', 1),
        )

    // ----------------------------------
    // MOWZIE'S MOBS bosses
    // ----------------------------------
    event.addEntityModifier('mowziesmobs:ferrous_wroughtnaut')
        .randomChance(0.5)
        .addLoot(
            Item.of('apotheosis:gem', 1),
            Item.of('minecraft:iron_block', 3),
        )

    event.addEntityModifier('mowziesmobs:frostmaw')
        .randomChance(0.5)
        .addLoot(
            Item.of('minecraft:packed_ice', 12),
            Item.of('apotheosis:gem', 1),
        )
})

console.info('[LootTweaks] WDA + Cataclysm + Mowzies loot bonus carregado.')
