function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano ){
        window.alert('[ERRO] Verificar os dados e tente novamente')

    }
    else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var  genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                img.setAttribute('src', 'crianca-m.png')

            }
            else if(idade < 22){
                img.setAttribute('src', 'jovem-m.png')

            } else if(idade <50){
                img.setAttribute('src', 'adulto-m.png')

            } 
            else{
                img.setAttribute('src', 'idoso-m.png')
            }

        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-f.png')

            }
            else if(idade <21){
                img.setAttribute('src', 'jovem-f.png')

            }else if(idade < 50){
                img.setAttribute('src', 'adulto-f.png')

            }
            else{
                img.setAttribute('src', 'idosa-f.png')

            }
        }

        res.style="text-align: center;"
        res.innerHTML = `Detectamos ${genero} com a ${idade} anos.`
        res.appendChild(img)
    }
}
