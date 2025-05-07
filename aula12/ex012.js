var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamete ${hora} horas.` )
if (hora < 5){
    console.log('Boa Madrugada')
} else if(hora <= 11){
    console.log('Bom dia')
} else if(hora <= 17){
    console.log('Boa tarde')
} else if(hora <= 23){
    console.log('Boa noite!')
}
