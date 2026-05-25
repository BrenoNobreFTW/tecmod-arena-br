// =====================================================
// Curios -> FTB Quests auto-complete
// Detecta acessorios equipados em slots de Curios e completa a quest do item.
// FTB Quests so verifica o inventario principal; isto cobre os slots de Curios.
// =====================================================
const QUEST_MAP = {
  "apotheosis:potion_charm": "268DC6793A91C4F0",
  "apothic_enchanting:filtering_shelf": "1381731684DB0A52",
  "apothic_enchanting:heart_seashelf": "7ED06341159160EA",
  "enigmaticlegacyplus:abyssal_heart": "7C51F8586CF77300",
  "enigmaticlegacyplus:angel_blessing": "0DEEA05B0B1435FF",
  "enigmaticlegacyplus:ascension_amulet": "0BD606A33DB5F207",
  "enigmaticlegacyplus:berserk_emblem": "1D76DC6A71A21225",
  "enigmaticlegacyplus:cosmic_heart": "516CD5A5EF0C6FC6",
  "enigmaticlegacyplus:creation_heart": "2FBCDDCD8A8C284C",
  "enigmaticlegacyplus:cursed_ring": "4FCE8435F34C1EB3",
  "enigmaticlegacyplus:desolation_ring": "3C14E522A741A4EE",
  "enigmaticlegacyplus:dislocation_ring": "74B1AF67C8A8A2FA",
  "enigmaticlegacyplus:earth_heart": "751650CC860076A2",
  "enigmaticlegacyplus:earth_heart_fragment": "1B439086BF4647B9",
  "enigmaticlegacyplus:eldritch_amulet": "7D4C3BCE403F0409",
  "enigmaticlegacyplus:ender_ring": "3024D5CA494FB531",
  "enigmaticlegacyplus:enigmatic_amulet_red": "5A534C8EA0543FEE",
  "enigmaticlegacyplus:ethereal_forging_charm": "73736137113A8538",
  "enigmaticlegacyplus:extra_ring": "7572E05F274E7D0E",
  "enigmaticlegacyplus:golden_ring": "1B07A62CD03C8EC6",
  "enigmaticlegacyplus:golem_heart": "1D93EE7D7ECAAF6D",
  "enigmaticlegacyplus:guardian_heart": "22F166993B13BFC0",
  "enigmaticlegacyplus:hell_blade_charm": "0FB3F9F73734270C",
  "enigmaticlegacyplus:infernal_ring": "13C9C82B2C03D751",
  "enigmaticlegacyplus:iron_ring": "1E0B369626BFC7D8",
  "enigmaticlegacyplus:magnet_ring": "2B21963929B5877A",
  "enigmaticlegacyplus:miner_ring": "2D095D92D6BCB87B",
  "enigmaticlegacyplus:mining_charm": "79144F359689BEC7",
  "enigmaticlegacyplus:monster_charm": "24CDEAC386B0458B",
  "enigmaticlegacyplus:pure_heart": "309F800BB9F6B746",
  "enigmaticlegacyplus:quartz_ring": "1CDBA2C84F8399A9",
  "enigmaticlegacyplus:redemption_ring": "409146DF420179ED",
  "enigmaticlegacyplus:scorched_charm": "3D44ADA4103B4E59",
  "enigmaticlegacyplus:twisted_heart": "45DDDFFEBE085547",
  "enigmaticlegacyplus:unwitnessed_amulet": "70916D14A0235379",
  "forbidden_arcanus:spectral_eye_amulet": "3283E1AC23BA4E58"
}
var EXTRA_MAP = {}   // quests extra por item (vazio: Caminho Maldito e escolha por clique)
var CuriosApi = null, BIR = null
try {
  CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi")
  BIR = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
} catch (e) { console.error("[CuriosQuests] nao carregou: " + e) }
var _done = {}     // username -> objeto-set de questids ja completados nesta sessao
var _dbg = {}      // username -> ja logou diagnostico
var _tick = 0
PlayerEvents.tick(event => {
  var p = event.player
  if (!CuriosApi || !p) return
  _tick++
  if (_tick % 40 !== 0) return                   // throttle (~a cada 40 eventos de tick)
  try {
    var opt = CuriosApi.getCuriosInventory(p)
    if (!opt || !opt.isPresent()) return
    var handler = opt.get()
    var seen = _done[p.username] || (_done[p.username] = {})
    // getEquippedCurios(): IItemHandler com TODOS os curios equipados (sem ambiguidade)
    var equipped = handler.getEquippedCurios()
    var n = equipped.getSlots()
    if (!_dbg[p.username]) { _dbg[p.username] = 1; console.info("[CuriosQuests] " + p.username + " -> " + n + " slots de curios") }
    for (var i = 0; i < n; i++) {
      var st = equipped.getStackInSlot(i)
      if (st.isEmpty()) continue
      var id = BIR.ITEM.getKey(st.getItem()).toString()   // "namespace:path"
      var targets = []
      if (QUEST_MAP[id]) targets.push(QUEST_MAP[id])
      if (EXTRA_MAP[id]) targets.push(EXTRA_MAP[id])
      for (var ti = 0; ti < targets.length; ti++) {
        var q = targets[ti]
        if (seen[q]) continue
        seen[q] = 1
        console.info("[CuriosQuests] completando " + id + " -> quest " + q + " (" + p.username + ")")
        event.server.runCommandSilent("ftbquests change_progress " + p.username + " complete " + q)
      }
    }
  } catch (err) {
    console.error("[CuriosQuests] runtime: " + err)
  }
})
