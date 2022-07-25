let cachorro = {
    patas: 4,
    raca: 'Pastos Alemão',
    latir: function() {
        console.log('Au Au')
    }
}

let labrador = Object.create(cachorro)
console.log(labrador)
labrador.latir()
labrador.raca = 'Labrador'

console.log(labrador.raca)

let pastor = Object.create(cachorro)
pastor.raca = 'Pastor Alemão'

console.log(pastor.raca)