function hora(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png';
        document.body.style.background = '#7F94AF'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png';
        document.body.style.background = '#DFC3A4'
    } else {
        img.src = 'noite.png';
        document.body.style.background = '#5F636B'
    }
}
