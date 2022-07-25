/*
* Exercício 1
* Crie um array com 5 itens;
* Acesse o item 1,3,4
*/

let arr = [10,20,30,40,50,60]

console.log(arr[0])
console.log(arr[2])
console.log(arr[3])

/*
* Exercício 2
* Crie um array com 2 elementos e outro com 4;
* Imprima o número de elementos de cada um na tela
*/

let arr1 = ['João', 'Pedro']
let arr2 = ['Maria', 'José', 'Henrique', 'Julia']

console.log(arr1.length)
console.log(arr2.length)

/*
* Exercício 3
* Crie um objeto onibus;
* Com as propriedades rodas = 8;
* Limite de passageiros = 40;
* Portas = 2;
* Imprima todas as propriedades no console
*/

let onibus = {
    rodas: 8,
    limiteDePassageiros: 40,
    portas: 2
}

console.log(onibus)

/*
* Exercício 4
* Adicione a propriedade janelas no ônibus, com o valor de 20
* Delete a propriedade rodas;
* Imprima a propriedade janelas no console
*/

onibus.janelas = 20

console.log(onibus.janelas)

delete onibus.rodas

console.log(onibus)

/*
* Exercício 5
* Crie um array com 5 nomes, incluindo o seu
* Verifique se o seu nome existe no array
* Se existir imprima alguma mensagem no console
*/

let nomes = ['Marcos', 'João', 'Pedro', 'Maria', 'Cecília']

if(nomes.includes('Marcos')) {
    console.log('Bem vindo Marcos')
} else {
    console.log('Nome não encontrado')
}

/*
* Exercício 6
* Crie dois arrays, um com mais de 5 elementos e outro com menos;
* Faça uma função que verifica o número de elementos;
* Se possuir menos que 5, imprima "Poucos elementos" no console;
* Se tiver mais, imprima "Muitos elementos"
*/

let frutas6 = ['Banana', 'Maça', 'Manga', 'Laranja', 'Abacate', 'Mamão', 'Melancia']
let frutas4 = ['Maça', 'Laranja', 'Manga', 'Banana']

function verificarElementos(arr) {
    
    if(arr.length >= 5) {
        console.log('Muitos elementos')
    } else {
        console.log('Poucos elementos')
    }
}

verificarElementos(frutas6)