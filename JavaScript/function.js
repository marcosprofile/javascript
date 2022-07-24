function escreverNoConsole() {
    console.log("Escrevendo no console!")
}

escreverNoConsole();

const textoNoConsole = function() {
    console.log("Texto no console")
}

textoNoConsole();

const textoPorParametro = function(texto) {
    console.log(texto);
}

textoPorParametro("Testando por parâmetro");