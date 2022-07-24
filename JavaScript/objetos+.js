let carro = {
    portas: 2,
    portamalas: '200L',
    motor: 2.0
}

let adicionais = {
    tetoSolar: true,
    arcondicionado: true
}


Object.assign(carro, adicionais)
console.log(carro)