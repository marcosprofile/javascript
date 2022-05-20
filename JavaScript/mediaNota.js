const array = [70,70,80];

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return "F";
    if (media < 69) return "D";
    if (media < 79) return "C";
    if (media < 89) return "B";
    return "A";
}

function calcularMedia(array) {
    // somar valores e dividir pelo tamanho do array (70 + 70 + 80 = 220 / 3 = 73.33) no caso o valor está na media C
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma/(array.length); //
}

console.log(mediaDoAluno(array));