// Primeira função
let corSite = "azul";

function resetaCor (cor, tonalidade) {
    corSite = cor + ' ' +  tonalidade;
};

console.log(corSite);
resetaCor("verde" , "claro");
console.log(corSite);

// Segunda função
let videoGame = "Xbox";

function novoGame (novo) {
    videoGame = novo;
}

console.log("Antes eu tinha um ", videoGame);
novoGame("Playstation");
console.log("Agora eu tenho um ",  videoGame);