// Uma funçionalidade que permite uma função se chamar novamente
// Isso pode ser um problema caso a função se chame MUITAS vezes;

function retornarNumeroPar(n) {
    if(n % 2 == 0) {
        console.log(`n agora é par: ${n}`)
    } else {
        console.log(n)
        retornarNumeroPar(n - 1)
    }
}

retornarNumeroPar(19)

function recursao(n) {

    if(n - 1 < 2) {
        console.log("Recursão parou")
    } else if(n % 2 != 0) {
        console.log(`Número impar ${n}`)
    } else {
        console.log(`Número par ${n}`)
        recursao(n - 2)
    }
}

recursao(11)
