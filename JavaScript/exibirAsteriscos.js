// Função que exibe a quantidade de "*" que a linha possui.

function exibirAsteriscos(linhas) {

    let padrao = "";
    for (let linha = 1; linha <= linhas; linha++){
        padrao += "*"
        console.log(padrao);

    }
}

// Fazendo com loops

function exibirAsteriscosLoops(linhas){

    for (let linha = 1; linha <= linhas; linha++){
        let padrao = "";
        for(let i = 0; i < linha; i++){
            padrao += "*";
        }
        console.log(padrao);
    }
}

exibirAsteriscosLoops(5);