let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let p = document.querySelector('#p')
let a = document.querySelector('a')

function msg(e) {
    console.log('Clicou no botão roxo')
    e.stopPropagation()
}

function remove() {
    console.log('Clicou no verde')
}

btn1.addEventListener('click', remove)

btn2.addEventListener('click', function() {
    btn1.removeEventListener('click', remove)

    console.log('Clicou no botão vermelho para remover o evento do botão verde')
})

btn3.addEventListener('click', msg)

p.addEventListener('click', function() {
    console.log('Clicou no paragrafo')
})

a.addEventListener('click', function(e) {

    e.preventDefault()

    console.log('Não vai entrar no link')

})