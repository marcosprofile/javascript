// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Math.floor() retorna um valor inteiro
// caso pontos seja maior que 12 -> exibir "Carteira suspensa"

verificarVelocidade(130); //Nesse caso o valor é igual ao limite de 12 pontos, portanto será retornado "Carteira suspensa"

function verificarVelocidade(velocidade){

    const velocidadeMaxima = 70;
    const KmPorPontos = 5;

    if (velocidade <= velocidadeMaxima) // Se velocidade for menor ou igual a velocidadeMaxima(70) retorna "Ok"
        console.log("Ok");
    else {
        //Constante para cálculo da velocidade subtraída pela velocidadeMaxima(70) e dividida por KmPorPontos(5)
        const pontos = Math.floor((velocidade - velocidadeMaxima) / KmPorPontos);
        if (pontos >= 12) // Se o cálculo da constante for maior ou igual a 12 retorna "Carteira suspensa". Se não, retorna a quantidade de pontos
            console.log("Carteira suspensa");
        else
            console.log("pontos", pontos);
    }
}