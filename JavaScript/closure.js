// Uma função que se lembra do ambiente em que ela foi criada

function lembrarSoma(x) {
    return function(y) {
        return x + y
    }
}

let soma1 = lembrarSoma(10)

console.log(soma1(30))

let soma2 = lembrarSoma(20)

console.log(soma2(30))
console.log(soma1(10))

function contador(i) {
    let cont = i
    let somarContador = function() {
       console.log(cont)
       cont++ 
    }
    return somarContador
}

let meuContador = contador(5)
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()

let meuContador1 = contador(10)
meuContador1()
meuContador1()
meuContador1()
meuContador1()
meuContador1()
meuContador1()
meuContador1()