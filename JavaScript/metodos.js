const cachorro = {
    raca: '',
    uivar: function() {
        console.log('Auuuuuuuu')
    },
    rosnar: function() {
        console.log('grrrrr')
    },
    setRaca: function(raca) {
        this.raca = raca
    },
    getRaca: function() {
        return 'A raça é ' + this.raca
    }
}

cachorro.uivar()
cachorro.rosnar()

cachorro.setRaca('Shitzu')
console.log(cachorro.getRaca())
