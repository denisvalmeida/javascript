let num = [5, 1, 7, 3, 9]

// num.push(50) // coloca mais um valor na última posição do vetor
num.sort() // ordena os valores em ordem crescente

console.log (num) // retorna o conteúdo das posições
console.log(`O vetor tem ${num.length} posições.`) // retorna o número de posições

let pos = num.indexOf(4) // procura o valor entre paranteses dentro do vetor, se não existir o valor ele retorna a posição -1
if (pos == -1){
    console.log(`Valor não encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}

