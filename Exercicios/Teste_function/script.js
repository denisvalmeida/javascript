let numero1 = document.querySelector('input#txtv1')
let numero2 = document.querySelector('input#txtv2')
let resultado = document.querySelector('div#resultado')

function calcular(){
    let soma = Number(numero1.value) + Number(numero2.value)
    resultado.innerHTML = `A soma é ${soma}`
}



