const alunos = [
    "João",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Leo",
];

//remove 1 elemento a partir do índice 0 e insere Rodrigo
alunos.splice(0, 1, "Rodrigo");
//Rodrigo(0), Ana(1), Caio(2), Lara(3), Marjorie(4), Leo(5)


//remove 2 elementos a partir do índice 0 e insere Thiago
alunos.splice(0, 2, "Thiago");
//Thiago(0), Caio(1), Lara(2), Marjorie(3), Leo(4)


//remove 2 elementos a partir do índice 1 e insere Fernando
alunos.splice(1, 2, "Fernando");
//Thiago(0), Fernando(1), Marjorie(2), Leo(3)


//remove 1 elemento a partir do índice 2 e insere Carla
alunos.splice(2, 1, "Carla");
//Thiago(0), Fernando(1), Carla(2), Leo(3)


console.log(alunos); //retorna ["Thiago", "Fernando", "Carla", "Leo"]
