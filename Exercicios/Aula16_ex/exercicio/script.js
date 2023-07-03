let num = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = [] //vetor vazio

function isNumero(n){ // Vai pegar o parametro da FUNCTION ADICIONAR, o NUM, e substituir por N
    if(Number(n) >= 1 && Number(n) <= 100){ // IMPORTANTE: converter a variável 'n' com o 'Number'
        return true
    }else{
        return false
    }
}

function isLista(n, l){
    if (l.indexOf (Number(n)) != -1){ //Verifica se o número está fora do índice permitido
        return true
    }else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)){ // verifica se as duas condições são verdadeiras
         valores.push(Number(num.value)) // adiciona o valor na variavel 'valores' (linha 4)
         let item = document.createElement ('option') // cria a tag option dentro do select
         item.text = `Valor ${num.value} adicionado.`
         lista.appendChild(item)
         res.innerHTML = ''
    } else{
        alert ('Número inválido ou repetido')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length ==0){
        alert('Digite algum valor antes de finalizar.')
    }else{
        let tot = valores.length // quantidade de valores dentro do vetor
        let maior = 0
        let menor = valores[0]
        let soma = 0
        let media =0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${tot} valores</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`

    }
}
