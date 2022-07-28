function formataData(data) {

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`
    }

    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataAtual = formataData(data)

console.log(dataAtual)
console.log(data.toString())

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia da semana', data.getDay())