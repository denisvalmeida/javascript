function resultado(){
    let numero = document.querySelector('input#numero').value
    let tab = document.querySelector('select#seltab')

    if (numero.length == 0){
        alert ('Por favor, insira um número')
    }else{
        let n = Number(numero)
        

        for(let c=1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) 
        }
       
    }
    
}