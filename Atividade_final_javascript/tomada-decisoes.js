const pontuacaoMin = 1000;

// Avalia se o jogador tem pontos suficientes para a equipe principal
function avaliarJogador(nome, pontuacao) {
  nome = String(nome || "").trim();
  pontuacao = Number(pontuacao);

  console.log("Analisando perfil...");

  if (nome === "") {
    console.log("ERRO! O nome não pode ficar vazio.");
    return false;
  }

  if (isNaN(pontuacao)) {
    console.log("ERRO! Digite uma pontuação válida (número).");
    return false;
  }

  if (pontuacao >= pontuacaoMin) {
    console.log(`APROVADO! ${nome} tem nível para a equipe principal.`);
    return true;
  } else {
    let pontosFaltantes = pontuacaoMin - pontuacao;
    console.log(`REPROVADO! Faltam ${pontosFaltantes} pontos para ${nome} entrar no time.`);
    return false;
  }
}

module.exports = { avaliarJogador, pontuacaoMin };

// Permite testar o arquivo sozinho com: node tomada-decisoes.js "bolinha" 1200
if (require.main === module) {
  let nome = process.argv[2] || "bolinha";
  let pontuacao = process.argv[3] || 1200;
  avaliarJogador(nome, pontuacao);
}
