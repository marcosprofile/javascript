let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) == Object.prototype)

if (pessoa.maos == 2) {
    console.log('Correto')
} else {
    console.log('Incorreto')
}