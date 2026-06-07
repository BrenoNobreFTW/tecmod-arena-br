// One Player Sleep — basta 1 player dormindo pra passar a noite
// Útil pra coop/LAN sem precisar todos dormirem ao mesmo tempo
ServerEvents.loaded(event => {
    event.server.runCommandSilent('gamerule playersSleepingPercentage 1')
})
