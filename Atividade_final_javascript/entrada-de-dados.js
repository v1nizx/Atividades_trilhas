// Cadastro de jogador na equipe (sem dependência externa)
function cadastrarJogador(equipe, nome, pontuacao) {
  console.log("\n--- CADASTRO DE JOGADOR ---");

  nome = String(nome || "").trim();

  if (nome === "") {
    console.log("ERRO! O nome não pode ficar vazio.");
    return null;
  }

  // Evita duplicados (mesmo padrão de busca dos outros arquivos)
  for (let i = 0; i < equipe.length; i++) {
    if (equipe[i].nome.toLowerCase() === nome.toLowerCase()) {
      console.log(`ERRO! O jogador ${nome} já está na equipe.`);
      return null;
    }
  }

  pontuacao = Number(pontuacao);

  if (isNaN(pontuacao) || pontuacao < 0) {
    console.log("ERRO! Digite uma pontuação válida (número maior ou igual a 0).");
    return null;
  }

  let novoJogador = {
    nome: nome,
    pontuacao: pontuacao
  };

  equipe.push(novoJogador);
  console.log(`SUCESSO! ${nome} entrou para a equipe com ${pontuacao} pontos!`);
  return novoJogador;
}

module.exports = { cadastrarJogador };

// Permite testar o arquivo sozinho com: node entrada-de-dados.js "bolinha" 1200
if (require.main === module) {
  let equipe = [];
  let nome = process.argv[2] || "bolinha";
  let pontuacao = process.argv[3] || 1200;
  cadastrarJogador(equipe, nome, pontuacao);
  console.log("Equipe atual:", equipe);
}
