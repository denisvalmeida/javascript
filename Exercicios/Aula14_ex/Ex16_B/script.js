function contar(){
    var inicio = document.querySelector('input#inicio').value 
    let final = document.querySelector('input#final').value 
    let passo = document.querySelector('input#passo').value
    let res = document.querySelector('div#resultado')

    if(inicio.length == 0 || final.length == 0 || passo.length == 0){
        alert('ERRO')

    }else{
        let i = Number(inicio)
        let f = Number(final)
        let p = Number(passo)
        if(p <=0){
            alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        res.innerHTML = ('Contando: ')

        if(i < f){
            for(var c = i; c <= f; c+=p){
                res.innerHTML += `${c} `
            }
        }else{
            for (var c = i; c >=f; c-=p)
            res.innerHTML += `${c} `
        }
    }
}