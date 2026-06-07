// Registro de itens customizados para processos de automação
StartupEvents.registry('item', event => {
    // Item de transição para a Steel Casing do Mekanism
    event.create('incomplete_steel_casing')
        .displayName('Incomplete Steel Casing')
        .texture('minecraft:item/barrier') // Placeholder se não tiver textura, ou use 'kubejs:item/incomplete_steel_casing'
        .tooltip('Intermediate item for Steel Casing')

    // Ficha do Destino — usada na escolha de caminho (Maldito x Protegido).
    // A quest-pai entrega 1; cada caminho CONSOME a ficha, garantindo escolha unica.
    event.create('ficha_destino')
        .displayName('§6Ficha do Destino')
        .texture('kubejs:item/ficha_destino')
        .maxStackSize(1)
        .tooltip('§7Entregue a UM dos caminhos. A escolha e permanente.')
        .rarity('epic')
})