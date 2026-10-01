function buscarJogador(equipe, nomeBuscado) {
  nomeBuscado = String(nomeBuscado || "").trim();

  if (nomeBuscado === "") {
    console.log("ERRO! O nome não pode ficar vazio.");
    return null;
  }

  // Busca linear: mesmo padrão usado na atualização
  for (let i = 0; i < equipe.length; i++) {
    let jogadorAtual = equipe[i];

    if (jogadorAtual.nome.toLowerCase() === nomeBuscado.toLowerCase()) {
      console.log(`ENCONTRADO! ${jogadorAtual.nome} - ${jogadorAtual.pontuacao} pontos.`);
      return jogadorAtual;
    }
  }

  console.log(`ERRO! O jogador ${nomeBuscado} não faz parte da nossa equipe.`);
  return null;
}

function atualizarPontuacao(equipe, nomeBuscado, pontosNovos) {
  console.log("\n--- ATUALIZAÇÃO DE RANKING ---");

  if (equipe.length === 0) {
    console.log("ERRO! A equipe está vazia. Cadastre um jogador primeiro.");
    return false;
  }

  nomeBuscado = String(nomeBuscado || "").trim();

  if (nomeBuscado === "") {
    console.log("ERRO! O nome não pode ficar vazio.");
    return false;
  }

  pontosNovos = Number(pontosNovos);

  if (isNaN(pontosNovos)) {
    console.log("ERRO! Digite um número válido de pontos.");
    return false;
  }

  let encontrou = false;

  // Busca linear igual da aula anterior
  for (let i = 0; i < equipe.length; i++) {
    let jogadorAtual = equipe[i];

    if (jogadorAtual.nome.toLowerCase() === nomeBuscado.toLowerCase()) {
      // Altera dado que já existe na memória
      jogadorAtual.pontuacao += pontosNovos;
      encontrou = true;

      console.log(`SUCESSO! A pontuação de ${jogadorAtual.nome} subiu para ${jogadorAtual.pontuacao} pontos!`);
      break;
    }
  }

  if (encontrou === false) {
    console.log(`ERRO! O jogador ${nomeBuscado} não faz parte da nossa equipe.`);
    return false;
  }

  return true;
}

function listarEquipe(equipe) {
  console.log("\n--- EQUIPE ATUAL ---");

  if (equipe.length === 0) {
    console.log("Nenhum jogador cadastrado.");
    return;
  }

  for (let i = 0; i < equipe.length; i++) {
    console.log(`${i + 1}. ${equipe[i].nome} - ${equipe[i].pontuacao} pontos`);
  }
}

// Versão interativa usada pela Opção 5 do menu (usa readline nativo, sem prompt-sync)
async function atualizarPontuacaoInterativo(equipe, rl) {
  console.log("\n--- ATUALIZAÇÃO DE RANKING ---");

  if (equipe.length === 0) {
    console.log("ERRO! A equipe está vazia. Cadastre um jogador primeiro.");
    return false;
  }

  let nomeBuscado = (await rl.question("Qual jogador deseja atualizar? ")).trim();

  if (nomeBuscado === "") {
    console.log("ERRO! O nome não pode ficar vazio.");
    return false;
  }

  let encontrou = false;

  // Loop para percorrer a lista (igual ao da função de busca)
  for (let i = 0; i < equipe.length; i++) {
    let jogadorAtual = equipe[i];

    if (jogadorAtual.nome.toLowerCase() === nomeBuscado.toLowerCase()) {
      let entrada = await rl.question("Quantos pontos ele ganhou hoje? ");
      let pontosNovos = Number(String(entrada).trim());

      if (isNaN(pontosNovos)) {
        console.log("ERRO! Digite um número válido de pontos.");
        return false;
      }

      // Soma os pontos novos à pontuação atual
      jogadorAtual.pontuacao += pontosNovos;
      encontrou = true;

      console.log(`SUCESSO! A pontuação de ${jogadorAtual.nome} subiu para ${jogadorAtual.pontuacao} pontos!`);
      break;
    }
  }

  if (encontrou === false) {
    console.log(`ERRO! O jogador ${nomeBuscado} não faz parte da nossa equipe.`);
    return false;
  }

  return true;
}

module.exports = { buscarJogador, atualizarPontuacao, atualizarPontuacaoInterativo, listarEquipe };

// Permite testar o arquivo sozinho com: node gamerTeamManager.js
if (require.main === module) {
  let equipe = [
    { nome: "Fallen", pontuacao: 2500 },
    { nome: "bolinha", pontuacao: 1200 },
    { nome: "capitão", pontuacao: 800 }
  ];
  listarEquipe(equipe);
  atualizarPontuacao(equipe, "Fallen", 150);
  listarEquipe(equipe);
}
