PlayerEvents.loggedIn(event => {
    const player = event.player;
    
    // A "Tag" mágica. Verifica se o jogador já recebeu o bônus antes.
    // Se ele NÃO tiver a tag, o código roda.
    if (!player.stages.has('bonus_relics_recebido')) {
        
        // ----- ADICIONE OS SLOTS AQUI -----
        // O comando é: curios add [jogador] [tipo_do_slot] [quantidade]
        
        // Exemplo: Dá +2 espaços para anéis (ring)
        event.server.runCommandSilent(`curios add ${player.username} ring 2`);
        
        // Exemplo: Dá +1 espaço para amuleto (charm)
        event.server.runCommandSilent(`curios add ${player.username} charm 1`);
        
        // Exemplo: Dá +1 espaço para colar (necklace)
        event.server.runCommandSilent(`curios add ${player.username} necklace 1`);
        
        // Exemplo: Dá +1 espaço para cinto (belt)
        event.server.runCommandSilent(`curios add ${player.username} belt 1`);

        // Dá o livro de quests (FTB Quests) para o jogador iniciar sua jornada
        player.give('ftbquests:book');

        // Carimba a alma do jogador com a tag para ele nunca mais receber isso ao relogar
        player.stages.add('bonus_relics_recebido');
        
        // Manda uma mensagem de boas-vindas exclusiva no chat dele
        player.tell('§6[Tecmod Arena] §fSua alma é forte! Você começou com slots extras para Relíquias e o seu Livro de Quests.');
    }
})