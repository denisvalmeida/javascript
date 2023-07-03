function contar(){
    let inicio = document.querySelector('input#inicio').value 
    let final = document.querySelector('input#final').value 
    let passo = document.querySelector('input#passo').value
    let res = document.querySelector('div#resultado')

    if (inicio.length == 0 || final.length == 0 || passo.length ==0){
        alert('[ERRO!] Existem campos em branco')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio)
        let f = Number(final)
        let p = Number(passo)

        if (i < f){
            for(var c=i; c<=f; c+=p){   
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(var c=i; c>=f; c-=p)
            res.innerHTML += `${c} \u{1F449}`
        }
        
        res.innerHTML += `\u{1F3C1}`

    }

    

}