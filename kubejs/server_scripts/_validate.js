// Health-check da configuracao KubeJS - roda primeiro (prefixo _)
// Detecta items/tags ausentes que outros scripts dependem.
// Nao quebra nada se algo falhar - so avisa nos logs.

ServerEvents.recipes(event => {
    const required = {
        'Mekanism+Create Steel Casing': [
            'mekanism:steel_casing',
            'create:andesite_casing',
            'kubejs:incomplete_steel_casing'
        ],
        'Unificacao - mods': [
            'minecraft:iron_ingot',
            'mekanism:ingot_steel',
            'immersiveengineering:ingot_silver',
            'create:zinc_ingot'
        ],
        'Conversao - itens prioritarios': [
            'minecraft:copper_ingot',
            'mekanism:ingot_steel',
            'mekanism:ingot_lead',
            'mekanism:ingot_tin',
            'mekanism:ingot_bronze',
            'mekanism:ingot_uranium',
            'mekanism:ingot_osmium',
            'immersiveengineering:ingot_silver',
            'immersiveengineering:ingot_nickel',
            'immersiveengineering:ingot_aluminum',
            'create:zinc_ingot'
        ]
    }

    let missingTotal = 0
    let okTotal = 0
    let missingByCategory = {}

    let categories = Object.keys(required)
    for (let i = 0; i < categories.length; i++) {
        let category = categories[i]
        let items = required[category]
        let missingItems = items.filter(function(id) { return !Item.exists(id) })

        okTotal += items.length - missingItems.length

        if (missingItems.length > 0) {
            missingTotal += missingItems.length
            missingByCategory[category] = missingItems
        }
    }

    console.info('================================================')
    console.info('[KubeJS Validate] Tecmod Arena - Health Check')
    console.info('================================================')
    console.info('[KubeJS Validate] Items OK: ' + okTotal)
    console.info('[KubeJS Validate] Items ausentes: ' + missingTotal)

    if (missingTotal === 0) {
        console.info('[KubeJS Validate] Tudo certo - todos os items criticos existem.')
    } else {
        console.warn('[KubeJS Validate] AVISO: items ausentes detectados!')
        let missingCats = Object.keys(missingByCategory)
        for (let j = 0; j < missingCats.length; j++) {
            let cat = missingCats[j]
            let list = missingByCategory[cat]
            console.warn('[KubeJS Validate]   ' + cat + ':')
            for (let k = 0; k < list.length; k++) {
                console.warn('[KubeJS Validate]     - ' + list[k])
            }
        }
        console.warn('[KubeJS Validate] Scripts dependentes vao pular receitas envolvendo esses items.')
    }

    console.info('================================================')
})
