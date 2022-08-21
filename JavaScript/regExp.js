const reg1 = new RegExp('testando')
console.log(reg1.test('tttttestandoooooo'))

const reg2 = /teste/
console.log(reg2.test('tttttesteeeeee'))

const reg3 = /[123456]/
console.log(reg3.test('Números: 9, 8, 7'))
console.log(reg3.test('Números: 6'))

const reg4 = /[0-9]/
console.log(reg4.test('Números: 7'))

const pontoRegex = /./
console.log(pontoRegex.test('123dsf'))

// \d - Qualquer dígito de caractere
// \w - Um caractere alfanumérico
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são dígitos
// \W - Caractere não-alfanumérico
// \S - Caractere que não seja espaço em branco
// . - Qualquer caractere, menos nova linha

const dRegex = /\d/ // [0-9]
console.log('d')
console.log(dRegex.test('asd'))
console.log(dRegex.test(' '))
console.log(dRegex.test('123'))
console.log(dRegex.test('123asdawe'))

const dRegex2 = /\D/ // [^0-9]
console.log('D')
console.log(dRegex2.test('asd'))
console.log(dRegex2.test(' '))
console.log(dRegex2.test('123'))
console.log(dRegex2.test('123asdawe'))

const sRegex = /\s/
console.log('s')
console.log(dRegex2.test('asd'))
console.log(dRegex2.test(' '))
console.log(dRegex2.test('123'))
console.log(dRegex2.test('123asdawe'))

const wRegex = /\w/
console.log('w')
console.log(dRegex2.test('asd'))
console.log(dRegex2.test(' '))
console.log(dRegex2.test('123'))
console.log(dRegex2.test('123asdawe'))

const ano = /\d\d\d\d/
console.log(ano.test('05'))
console.log(ano.test('2022'))
console.log(ano.test('teste'))

const palavraPeloMenosTresLetras = /\w\w\w/
console.log(palavraPeloMenosTresLetras.test('dia'))
console.log(palavraPeloMenosTresLetras.test('ano'))
console.log(palavraPeloMenosTresLetras.test('oi'))
console.log(palavraPeloMenosTresLetras.test('teste'))

// Operador not
const notAeB = /[^ab]/
console.log('notAeB')
console.log(notAeB.test('a'))
console.log(notAeB.test('Aqui tem a'))

const notAaZ = /[^a-z]/
console.log('notAaZ')
console.log(notAaZ.test('a'))
console.log(notAaZ.test('sdhfbasjhdfbahsjdfb'))

// Operador preciso
const cep = /\d{5}-\d{3}/
console.log('cep')
console.log(cep.test('88117-500'))
console.log(cep.test('asdas'))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/
console.log('tel')
console.log(tel.test('(11)99999-9999'))
console.log(tel.test('(11)9999-9999'))

/*
* EXEC
* O método exec nos retorna um objeto com algumas informações sobre a regex
* Se nada for encontrado, retorna null
*/

const teste = /\d+/
console.log('teste .exec')
console.log(teste.exec('Tem o número 100 aqui'))
console.log(teste.exec('Tem o número aqui'))

/*
* Choice pattern
* Podemos colocar uma instrução na regex que funciona como um \\ (or) das condicionais
*/

const frutas = /\d+ (bananas|maçãs|laranjas)/
console.log('frutas')
console.log(frutas.test('10 bananas'))
console.log(frutas.test('20 batatas'))
console.log(frutas.test('4 laranjas'))

const verificaNome = /\w+: (Matheus|João|Maria)/
console.log('verificaNome')
console.log(verificaNome.test('Nome: Matheus'))
console.log(verificaNome.test('Nome: José'))
console.log(verificaNome.test('Nome: João'))


// Validando um domínio

const validarDominio = /[?www.]\w+\.com|com.br/
console.log('validarDominio')
console.log(validarDominio.test('www.google.com'))
console.log(validarDominio.test('www.teste'))
console.log(validarDominio.test('teste.com'))
console.log(validarDominio.test('www.horadecodar.com.br'))
console.log(validarDominio.test('horadecodar.com.br'))

// Validando e-mail

const validarEmail = /\w+@\w+\.\w+/
console.log('validarEmail')
console.log(validarEmail.test('teste@email.com'))
console.log(validarEmail.test('teste@email'))
console.log(validarEmail.test('teste@yahoo.com.br'))
console.log(validarEmail.test('email.com'))

// Validando data de nascimento - dd/mm/aaaa

const validarDataDeNasc = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
console.log('validarDataDeNasc')
console.log(validarDataDeNasc.test('20/10/2000'))
console.log(validarDataDeNasc.test('25/12/15'))
console.log(validarDataDeNasc.test('5/2/2015'))
console.log(validarDataDeNasc.test('5/2/25/12/2015'))