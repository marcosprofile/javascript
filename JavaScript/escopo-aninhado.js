/*let y = 5

const multiplicar = function(n) {

    let y = n * 2

    console.log(y) // escopo da função

    if(y == 10) {
        let y = 55
        console.log(y) // escopo if dentro da função
    }
}

multiplicar(y)*/

let a = 10

function multiplicar2(x, y) {
    let a = x * y

    if(a > 10) {

        let a = 0

        a++

        console.log(a)

    }

    console.log(a)

}

console.log(a)

multiplicar2(3, 5)