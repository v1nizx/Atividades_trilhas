function simularCompra() {
    const PRECO_BLAZER = 489.00;
    const PRECO_CAMISA = 189.00;
    const PRECO_SAPATO = 349.00;

    let qtdBlazerInput = prompt("Quantas unidades de 'Blazer Alfaiataria Slim Navy' (R$ 489,00) você deseja comprar?\n(Digite 0 para nenhuma):", "0");
    if (qtdBlazerInput === null) return;
    let qtdBlazer = Number(qtdBlazerInput);

    let qtdCamisaInput = prompt("Quantas unidades de 'Camisa Social Algodão Egípcio' (R$ 189,00) você deseja comprar?\n(Digite 0 para nenhuma):", "0");
    if (qtdCamisaInput === null) return;
    let qtdCamisa = Number(qtdCamisaInput);

    let qtdSapatoInput = prompt("Quantas unidades de 'Sapato Oxford Brogue Café' (R$ 349,00) você deseja comprar?\n(Digite 0 para nenhuma):", "0");
    if (qtdSapatoInput === null) return;
    let qtdSapato = Number(qtdSapatoInput);

    // Validação de NaN ou números negativos
    if (isNaN(qtdBlazer) || qtdBlazer < 0) qtdBlazer = 0;
    if (isNaN(qtdCamisa) || qtdCamisa < 0) qtdCamisa = 0;
    if (isNaN(qtdSapato) || qtdSapato < 0) qtdSapato = 0;

    if (qtdBlazer === 0 && qtdCamisa === 0 && qtdSapato === 0) {
        alert("Nenhum produto foi selecionado para compra.");
        const displayEl = document.getElementById("extratoDisplay");
        const statusEl = document.getElementById("extratoStatus");
        if (displayEl && statusEl) {
            statusEl.textContent = "Nenhum item";
            displayEl.textContent = "A última simulação não selecionou nenhum item.";
        }
        return;
    }

    let subtotalBlazer = PRECO_BLAZER * qtdBlazer;
    let subtotalCamisa = PRECO_CAMISA * qtdCamisa;
    let subtotalSapato = PRECO_SAPATO * qtdSapato;
    let totalCompra = subtotalBlazer + subtotalCamisa + subtotalSapato;

    let resumo = "=== RESUMO DA SIMULAÇÃO DE COMPRA ===\n\n";
    if (qtdBlazer > 0) {
        resumo += "• Blazer Alfaiataria Slim Navy:\n  " + qtdBlazer + " un x R$ 489,00 = R$ " + subtotalBlazer.toFixed(2) + "\n\n";
    }
    if (qtdCamisa > 0) {
        resumo += "• Camisa Social Algodão Egípcio:\n  " + qtdCamisa + " un x R$ 189,00 = R$ " + subtotalCamisa.toFixed(2) + "\n\n";
    }
    if (qtdSapato > 0) {
        resumo += "• Sapato Oxford Brogue Café:\n  " + qtdSapato + " un x R$ 349,00 = R$ " + subtotalSapato.toFixed(2) + "\n\n";
    }
    resumo += "--------------------------------------\n";
    resumo += "VALOR TOTAL DA COMPRA: R$ " + totalCompra.toFixed(2) + "\n";
    resumo += "======================================";

    // Atualiza o painel visual na página para excelente feedback ao usuário
    const displayEl = document.getElementById("extratoDisplay");
    const statusEl = document.getElementById("extratoStatus");
    if (displayEl && statusEl) {
        statusEl.textContent = "Simulado com sucesso";
        displayEl.textContent = resumo;
    }

    alert(resumo);
}
