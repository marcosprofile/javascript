/*
*  Uma forma de uma função receber indefinidos parâmetros
*  O operador rest vai virar um array
*  O parâmetro é definido por: ...nome
*/

let num = 1
let num1 = 5
let num2 = 3
let num3 = 4

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

imprimirNumeros(num,num1,num2)
console.log('Pausa')
imprimirNumeros(num2, num3)
console.log('Pausa')
imprimirNumeros(2,6,7,8,9,5,3,2,5,6,2,4,5)