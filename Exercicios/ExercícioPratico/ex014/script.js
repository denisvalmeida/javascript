function carregar(){
    var mensagem = document.getElementById('mensagem')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`

    if (hora > 0 && hora < 12){
        foto.src = "manha.png"
        window.document.body.style.background = `#E9CDA8`
    } else if (hora > 11 && hora < 19){
        foto.src = "tarde.png"
        document.body.style.background = `#EB9E42`
    } else{
        foto.src = "noite.png"
        document.body.style.background = `#053979`
    }
}

