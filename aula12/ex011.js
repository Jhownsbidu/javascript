var idade = 89
console.log(`Olá, Eu tenho ${idade} anos.`)
if (idade < 16){
    console.log('Não volta')
}
else if(idade < 18 || idade > 65){
    console.log('Volto opcional')
}
else{
    console.log('Volto obrigatorio')
}