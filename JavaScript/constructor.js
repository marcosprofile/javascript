function criarCachorro(raca) {
    let cachorro = Object.create({})
    cachorro.raca = raca
    return cachorro
}

console.log(criarCachorro())

let doberman = criarCachorro('Doberman')

console.log(doberman.raca)