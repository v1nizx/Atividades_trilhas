const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

const { cadastrarJogador } = require("./entrada-de-dados");
const { avaliarJogador } = require("./tomada-decisoes");
const { buscarJogador, atualizarPontuacaoInterativo, listarEquipe } = require("./gamerTeamManager");

let equipe = [
  { nome: "Fallen", pontuacao: 2500 },
  { nome: "bolinha", pontuacao: 1200 },
  { nome: "capitão", pontuacao: 800 }
];

function exibirMenu() {
  console.log("\n=== MENU PRINCIPAL ===");
  console.log("1 - Cadastrar jogador");
  console.log("2 - Listar equipe");
  console.log("3 - Avaliar jogador");
  console.log("4 - Buscar jogador");
  console.log("5 - Atualizar pontos");
  console.log("0 - Sair");
}

async function main() {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  let opcao = "";

  while (opcao !== "0") {
    exibirMenu();
    opcao = (await rl.question("Escolha uma opção do menu: ")).trim();

    if (opcao === "1") {
      let nome = await rl.question("Nome do jogador: ");
      let pontuacao = await rl.question("Pontuação inicial: ");
      cadastrarJogador(equipe, nome, pontuacao);
    } else if (opcao === "2") {
      listarEquipe(equipe);
    } else if (opcao === "3") {
      let nome = await rl.question("Nome do jogador: ");
      let pontuacao = await rl.question("Pontuação: ");
      avaliarJogador(nome, pontuacao);
    } else if (opcao === "4") {
      let nome = await rl.question("Qual jogador deseja buscar? ");
      buscarJogador(equipe, nome);
    } else if (opcao === "5") {
      // Opção 5 - Atualizar Pontos: segue o roteiro do enunciado
      await atualizarPontuacaoInterativo(equipe, rl);
    } else if (opcao === "0") {
      console.log("Saindo... Até a próxima!");
    } else {
      console.log("ERRO! Opção inválida. Escolha de 0 a 5.");
    }
  }

  rl.close();
}

if (require.main === module) {
  main();
}

module.exports = { main };
