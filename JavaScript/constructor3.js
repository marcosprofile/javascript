function Cachorro(raca) {
    this.raca = raca;
}

Cachorro.prototype.uivar = function() {
    console.log('Auuuuuuuuuu')
}

let pug = new Cachorro('Pug')

console.log(pug.raca)
pug.uivar()