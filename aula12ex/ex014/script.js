function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudação = window.document.getElementById('titulo')
    var data = new Date()
    var hora = data.getHours()


    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e9ccaa'
        titulo.innerHTM = 'Bom dia!'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#be8871'
        titulo.innerHTML = 'Boa Tarde!'
    } else {
        //Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#303030'
        titulo.innerHTML = 'Boa Noite!'
    }
}