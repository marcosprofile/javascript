// Método para ler propriedades de um objeto e exibir somente as propriedades do tipo String que estão nesse objeto

const filme = {
    tiutlo : "Velozes e Furiosos",
    ano : 2001,
    diretor : "Justin Lin",
    personagem : "Brian O'Conner"
}

function exibirPropriedades(obj) {
    for (prop in obj) // interar sobre as propriedades de um objeto
        if(typeof obj[prop] === "string")
            console.log(prop,obj[prop])
}

exibirPropriedades(filme);