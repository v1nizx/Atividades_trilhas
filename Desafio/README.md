# Vanguard — Alfaiataria e Estilo Contemporâneo

## Identificação

- **Aluno:** Marcos Vinicius Morais Rios
- **Trilha:** Desenvolvimento Mobile
- **Projeto:** Vanguard — loja de roupa masculina

## Apresentação

A Vanguard é uma loja virtual de moda masculina focada em alfaiataria contemporânea. A página apresenta uma coleção de peças elegantes, com informações de acabamento, materiais e entrega.

## Uso de inteligência artificial

Utilizei inteligência artificial como apoio no desenvolvimento da identidade visual da página, incluindo a definição da proposta estética, da paleta de cores, da tipografia e da organização visual da loja. A implementação, adaptação do layout e integração das funcionalidades foram realizadas no projeto.

Produtos disponíveis na simulação de compra:

| Produto | Preço |
| --- | ---: |
| Blazer Alfaiataria Slim Navy | R$ 489,00 |
| Camisa Social Algodão Egípcio | R$ 189,00 |
| Sapato Oxford Brogue Café | R$ 349,00 |

O botão **Simular compra** solicita a quantidade de cada produto, calcula os subtotais e exibe o resumo da compra na tela e em um alerta.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Tailwind CSS via CDN
- Google Fonts e Material Symbols

## Como executar

1. Clone ou baixe este repositório.
2. Abra a pasta `Desafio`.
3. Abra o arquivo `index.html` em um navegador.

Também é possível usar a extensão **Live Server** do VS Code para abrir a página em um servidor local. Não há dependências ou instalação de pacotes necessária.

## Captura de tela

![Página inicial da loja Vanguard](/Desafio/assets/Captura%20de%20tela%20de%202026-10-27%2010-06-02.png)

## Testes realizados

- Abertura da página no navegador e verificação do layout inicial.
- Clique nos botões **Simular compra**.
- Simulação com quantidades positivas dos três produtos.
- Simulação sem selecionar nenhum produto.
- Entrada de valores negativos ou não numéricos, verificando a validação para zero.
- Verificação do cálculo dos subtotais, do valor total e da atualização do extrato na tela.
- Verificação da sintaxe do arquivo `script.js`.

## Dificuldade e aprendizado

A principal dificuldade foi separar corretamente os conteúdos de HTML, CSS e JavaScript. O arquivo JavaScript havia recebido tags `<script>`, o que causava erro de sintaxe no editor. Ao corrigir a organização dos arquivos e adicionar a importação do script no HTML, aprendi a estruturar melhor os recursos de uma página web e a importância de validar cada arquivo conforme sua linguagem.
