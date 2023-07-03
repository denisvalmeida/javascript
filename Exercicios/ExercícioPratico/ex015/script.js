function verificar(){
    var data = new Date()
    var ano = data.getFullYear() 
    var tano = document.getElementById (`txtano`)
    var resultado = document.querySelector (`div#resultado`)
    
    
    if (tano.value.length == 0 || tano.value > ano){
    window.alert ('verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName (`radsex`)
        var idade = ano - Number(tano.value)
        var genero = ""
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade <11){
                //criança
                img.setAttribute ('src', 'menino.png')
            }else if (idade <18){
                //jovem
                img.setAttribute ('src', 'menino_jovem.png')
            }else if (idade < 35){
                //adulto
                img.setAttribute('src', 'homem_adulto.png')
            }else if (idade < 60){
                //meia idade
                img.setAttribute ('src', 'homem_meia_idade.png')
            }else{
                //idoso
                img.setAttribute('src', 'homem_idoso.png')
            }
        }else{
            genero = 'mulher'
            if(idade <11){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if (idade <18){
                //jovem
                img.setAttribute('src', 'menina_jovem.png')
            }else if (idade < 35){
                //adulto
                img.setAttribute('src', 'mulher_adulta.png')
            }else if (idade < 60){
                //meia idade
                img.setAttribute('src', 'mulher_meia_idade.png')
            }else{
                //idoso
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos de idade`
        resultado.appendChild(img)
    }

}



