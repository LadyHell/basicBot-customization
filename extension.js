(function () {
    //Nome de usuário de onde foi feito a cópia, assim você não precisa mudar tanta coisa.
    var fork = "Yemasthui";
		
    //Definir função pela extensão do bot.
    function extend() {
        //Se o bot não iniciou corretamente, tente novamente 1 segundo depois.
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaução para ter certeza de que foi atribuido corretamente.
        var bot = window.bot;

        //Carregar configurações personalizadas abaixo. ↓
        bot.retrieveSettings();

        /*
        bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'deu-lhe um biscoito de onda forte pra você ver macacos em cima do poste.',
                    'deu-lhe um biscoito da sorte. Pera, não tem nada escrito! :joy:',
                    'deu-lhe um pau pra você enfiar no seu cu.',
                    'deu-lhe um biscoito de chocolate abençoado por Satã.',
                    'deu-lhe um enorme biscoito. Quando o toca, ele se duplica num outro biscoito... queima gzuis!',
                    'deu-lhe um biscoito da sorte, tem escrito: "Manda nudes"',
                    'deu-lhe um biscoito de "pó" pra você cheirar, UHEAUEHAUHEAUHE.
                    'deu-lhe um biscoito da sorte, tem escrito: "Venda sua alma."',
                    'deu-lhe um biscoito da sorte, tem escrito: "Suprise modafocaa."',
                    'deu-lhe um biscoito da sorte, tem escrito: "Vai se prostituir pra comprar x-burguer que é melhor pra você."',
                    'deu-lhe um biscoito da sorte, tem escrito: "Se você mecher o quadril, vão achar que você é funkeiro. UAEHUAHEAUHE',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo <3"',
                    'deu-lhe um biscoito de ouro, mas não dá pra comer porque é ouro, burraum.',
                    'deu-lhe um dicionário, uma caneta e um livro pra você aprender a escrever direito, filho da puta.',
                    'deu-lhe um biscoito de arco-íris feito com amor :heart: ~ai que coisa gay.',
                    'deu-lhe um biscoito que foi esquecido na chuva. Se eu você você, eu não comeria esse biscoito. :eyes:',
                    'te trouxe biscoitos fresquinhos... parecem ser deliciosos!!'
                ];
        */
        
         ball: [
            "Os sinais apontam para sim.",
            "Sim.",
            "Tio lúcifer tá dizendo que sim, então a resposta é sim...",
            "Sem dúvida.",
            "Minhas fontes dizem que não.",
            "Pergunte again, parça.",
            "Meça suas perguntas, parça, eu sou malandrão",
            "Concentre-se e pergunte novamente.",
            "Ao meu ver acho que nao.",
            "Definitivamente sim.",
            "Melhor não dizer agora, Gzuis tá vendo.",
            "Muito duvidoso.",
            "Eeeh.. claro que não.",
            "É certo.",
            "Não podemos prever isso agora.",
            "Provavelmente.",
            "Pergunte no posto ipiranga.",
            "A minha resposta é não.",
            "Pelo oque eu vejo sim.",
            "Não conte com isso.",
            "Sim, em devido tempo.",
            "Minhas fontes dizem que não.",
            "Definitivamente não.",
            "Você vai ter que esperar.",
            "Eu tenho minhas dúvidas.",
            "Ao meu ver.. não.",
            "Parece bom para mim!",
            "Quem sabe?",
            "Depois dessa vou me cortar com faquinha de rocambole.",
            "Provavelmente.",
            "Você tá de brincadeixo uti me?",
            "Seje menas.",
            "Esqueça isso."
            ],
        
        bot.commands.testCommand = {
            command: ['test'], //Exemplo de comando
            rank: 'user', //user/bouncer/mod/manager
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me 1, 2, 3... testando"); // Mensagem a ser enviada no chat
                }
            }
        };

        //Carregar o pacote do chat novamente para registrar todas as mudanças
        bot.loadChat();

    }

    //Mudar as configurações padrões do bot e ter certeza que elas foram carregadas corretamente

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "MidnightBot",
        language: "portuguese",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true ou false
        chatLink: "https://rawgit.com/" + fork + "/basicBot/master/lang/pt.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
        	["theme", "Essa música não se encaixa nos padrões da sala. "],
        	["op", "Essa música está na lista OP. "],
        	["history", "Essa música ainda tá no histórico, presta atenção, caralho. "],
        	["mix", "Essa poarr é longa demais, vou pular. "],
        	["sound", "Essa música não está tocando e o áudio tá muito ruim, vê se não faz de novo na próxima vez. "],
        	["nsfw", "Essa música que você tocou é NSFW (imprópria), enfia seus NSFW no seu cu. "],
        	["unavailable", "Essa música não está disponível, chora mais. :joy: "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Mensagem temporária do dia",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Inicia o bot e o extende quando for completamente carregado.
    $.getScript("https://rawgit.com/" + fork + "/basicBot/master/basicBot.js", extend);

}).call(this);
