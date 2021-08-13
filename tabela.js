function tabelaMultiplicacao(x) {
    let resultado = []
    for (let linha = 0; linha <= x; linha++) {        //linha da tabela
        resultado[linha] = [];
        for(let coluna = 0; coluna <= x; coluna++){   // coluna da tabela
            resultado[linha][coluna]= linha*coluna    
        }
    }
    console.table(resultado)
    return resultado
}

