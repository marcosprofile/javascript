const soma = function(a, b) {
    return a + b
}

console.log(soma(5, 5))

const saudacao = function(nome) {
    if(nome == "Marcos") {
        return "Saudações Marcos"
    }
}

console.log(saudacao("Marcos"))

function multiplicarTresNumeros(x, y, z) {
    return x * y * z
}

console.log(multiplicarTresNumeros(2, 2, 2))

const mult = multiplicarTresNumeros(2, 2, 2)

console.log(`O valor de mult é: ${mult}`)