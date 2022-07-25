/*
* JSON = JavaScript Object Notation;
* Utilizado para comunicação entre serviços, ex: back end <-> front end;
* Basicamente um tipo de dado padronizado, que lembra muito os objetos do JavaScript;
* Rigoroso na estrutura, ou seja, deve seguir o padrão imposto por este formato;
* Apenas aspas duplas;
* Não aceita comentários;
* Podemos converter o JSON para uma string de forma fácil;
* Ou também uma string para JSON
*/

let pessoa = {
    "nome": "Marcos",
    "idade": 25,
    "profissao": "Programador",
    "hobbies": ["Video game", "Leitura", "Estudo"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)