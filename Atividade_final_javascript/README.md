# Atividade Final JavaScript — Gerenciador de Equipe Gamer

Atividade de fixação: entrada de dados, tomada de decisões, busca linear com `for` e atualização de objetos em um array.

## Arquivos

- `menu.js` — menu principal (1 a 5 + 0)
- `entrada-de-dados.js` — `cadastrarJogador(equipe, nome, pontuacao)`
- `tomada-decisoes.js` — `avaliarJogador(nome, pontuacao)` (mínimo 1000 pontos)
- `gamerTeamManager.js` — `buscarJogador`, `atualizarPontuacao` e `listarEquipe`
- `teste.js` — demonstração automática do fluxo

Sem dependências externas (só `readline` nativo do Node).

## Como rodar

```bash
npm start      # abre o menu
node teste.js  # roda a demonstração
```

## Menu

1 - Cadastrar | 2 - Listar | 3 - Avaliar | 4 - Buscar | 5 - Atualizar pontos | 0 - Sair

Exemplo opção 5:

```
Escolha uma opção do menu: 5

--- ATUALIZAÇÃO DE RANKING ---
Qual jogador deseja atualizar? Fallen
Quantos pontos ele ganhou hoje? 150
SUCESSO! A pontuação de Fallen subiu para 2650 pontos!
```
