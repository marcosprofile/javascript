let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum'; //se for maior que 100 = premium e se for menor que 100 = comum.

console.log(tipo);

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho; // Retorna true, pois apenas um valor precisa ser true
let podeAplicar1 = maiorDeIdade && possuiCarteiraDeTrabalho; // Retorna false, pois os dois valores precisam ser true

console.log(podeAplicar);
console.log(podeAplicar1);

// Falsy = undefined; null; 0; false; ''; NaN - not a number
//Truthy

let corPersonalizada = "";
let corPadrão = "Azul";
let corPerfil = corPersonalizada || corPadrão;

console.log(corPerfil);