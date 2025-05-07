function carregar(){
    var msg =window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    


   

    msg.innerHTML =`Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src ='manha.png'
        
        document.body.style.background = 'rgb(238, 178, 191)'

    }
    else if( hora >= 12 && hora < 18){
        img.src ='tarde.png'
        document.body.style.background = 'rgb(224, 211, 132)'
    }
    else {
        img.src = 'noite.png'
        document.body.style.background = 'rgb(48, 47, 44)'

    }

}
