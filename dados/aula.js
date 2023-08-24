/* Prototype */
const prototipo = {};
const numero = 26;
console.log(prototipo);
console.log('Marcos'.__proto__);
console.log(true.__proto__);
console.log(numero.hasOwnProperty());

/**
 * Type conversion (typecasting) vs Type coersion
*/

// Alteração de um tipo de dado para outro tipo

console.log('9' + 5);
console.log(Number('9') + 5);
console.log(9 + 5);

/**
 * Manipulando Strings e Números
*/

// Transformando String em Número e Número em String
let string = "123";
console.log(string);
console.log(Number(string));
let number = 321;
console.log(number);
console.log(String(number));

// Constar quantos caracteres tem uma palavra e quantos digitos tem um número
let word = "paralelepipedo";
console.log(word.length);
console.log(String(number).length);

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
number = 435.134654;
console.log(number.toFixed(2).replace(".", ","));

// Transformar letras minúsculas em maiúsculas
word = "Programar é muito bom!";
console.log(word.toUpperCase());
console.log(word.toLowerCase());

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero aprender JavaScript";
let myArray = phrase.split(" ");
console.log(myArray);
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore);
console.log(phraseWithUnderscore.toLowerCase());

// Verificar se o text contém a palavra Amor
phrase = "Eu quero viver o amor!";
console.log(phrase.includes("amor"));

// Criar array com construtor
myArray = new Array('a', 'b', 'c', 'd');
console.log(myArray);
let myFunction = () => {
  return 'Hello World'
};
myArray.push(myFunction);
console.log(myArray.length);
console.log(myArray[4]());

// Transformar uma cadeia de caracteres em elementos de um array
word = "javascript"
console.log(Array.from(word));

let techs = ['html', 'css', 'js', 'angular'];
console.log(techs);

// Adicionar um item no fim
techs.push('react');
console.log(techs);

// Adicionar um item no começo
techs.unshift('sql');
console.log(techs);

// Remover do fim
console.log(techs.pop());
console.log(techs);

// Remover do começo
console.log(techs.shift());
console.log(techs);

// Pegar somente alguns elementos do array
console.log(techs.slice(2, 4));

// Remover 1 ou mais items em qualquer posição do array
console.log(techs.splice(1, 2));

// Encontrar a posição de um elemento no array
techs = ['sql', 'html', 'css', 'js', 'angular', 'react'];
let index = techs.indexOf('css');
console.log(index);
techs.splice(index, 1);
console.log(techs);