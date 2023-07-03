function verificar(){
    var ano = document.querySelector('input#txtano').value
    var data = new Date()
    var anoat = data.getFullYear()
    var idade = anoat - ano
    var res = document.querySelector('div#res')

    if (ano.length == 0 || ano > anoat){
        alert `[ERRO] Verifique as informações e tente novamente`
    }else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img') //cria a tag <img> no HTML
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade < 12){
                img.setAttribute('src', 'menino.png')
                }else if (idade <18){
                    img.setAttribute('src', 'menino_jovem.png')
                }else if(idade <35){
                    img.setAttribute('src', 'homem_adulto.png')
                }else if(idade <60){
                    img.setAttribute('src', 'homem_meia_idade.png')
                }else{
                    img.setAttribute('src', 'homem_idoso.png')
                }
        }else{
            genero = 'mulher'
            if (idade < 12){
                img.setAttribute('src', 'menina.png')
                }else if (idade <18){
                    img.setAttribute('src', 'menina_jovem.png')
                }else if(idade <35){
                    img.setAttribute('src', 'mulher_adulta.png')
                }else if(idade <60){
                    img.setAttribute('src', 'mulher_meia_idade.png')
                }else{
                    img.setAttribute('src', 'mulher_idosa.png')
                }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Identificamos que você é ${genero} e tem ${idade} anos`
        res.appendChild(img)
    } // termina o primeiro else
}