function tabuada(){
    var num = document.querySelector('input#numero').value 
    var resultado = document.querySelector('select#seltab')

    if (num.length == 0){
        alert('preencha o campo com um número')
    }else{
        let n = Number(num)
        resultado.innerHTML = ('')
        for(var c=1; c<=10; c++){
            let item = document.createElement('option') // cria o option dentro do select
            item.text = (`${c} x ${n} = ${n*c}`)
            resultado.appendChild(item)
           // resultado.innerHTML = (`${c} x ${n} = ${n*c}`)
        }
    }
}