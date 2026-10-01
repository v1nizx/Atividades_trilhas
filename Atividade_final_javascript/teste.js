const { cadastrarJogador } = require("./entrada-de-dados");
const { avaliarJogador } = require("./tomada-decisoes");
const { atualizarPontuacao, listarEquipe } = require("./gamerTeamManager");

// Arquivo de teste: demonstra o fluxo completo com dados prontos
let equipe = [];

console.log("--- TESTE DA EQUIPE ---");

cadastrarJogador(equipe, "bolinha", 1200);
cadastrarJogador(equipe, "capitão", 800);

// boolean: aprovado tem que ser true ou false
let aprovado = avaliarJogador(equipe[0].nome, equipe[0].pontuacao);
console.log("Aprovado?", aprovado);

avaliarJogador(equipe[1].nome, equipe[1].pontuacao);

// Simula ganho de pontos
atualizarPontuacao(equipe, "capitão", 300);

listarEquipe(equipe);
