/*
* Podemos definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring
*/

const person = {
    name: 'Marcos',
    lastName: 'Ferreira'
}

const {name: fname, lastName: lname} = person

console.log(fname)
console.log(lname)

let obj = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
}

const {rodas: qntRodas, portas: qntPortas, tetoSolar: tSolar} = obj

console.log(qntRodas)
console.log(qntPortas)
console.log(tSolar)

/*
* Podemos definir variáveis com os valores de um array utilizando o destructuring
*/

let nomes = ['Marcos', 'João', 'Pedro']

let [nomeA, nomeB, nomeC] = nomes

console.log(nomeA)
console.log(nomeB)
console.log(nomeC)
