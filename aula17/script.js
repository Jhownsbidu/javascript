let num = window.document.querySelector('input#txtn')
let tabu = window.document.querySelector('select#tabu')
var res = window.document.querySelector('div#res')
let valores = []

function isNumerto(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else{
        return false
    }

}

function inLista(n, l){
    if (l.indexOf(Number(n)) !=-1){
        return true
    } else{
        return false
    }

}

function adicionar(){
    if(isNumerto(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tabu.appendChild(item)

        res.innerHTML = ''

    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()

}

function finalizar(){
    if (valores.length ==0) {
        window.alert('Adicione valores antes de finalizar')

    } else {
        let tot= valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores [pos]
            if (valores [pos] > maior)
                maior = valores[pos]
            if (valores [pos] < menor)
                menor = valores[pos]
        }
        

        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p style="color: black;"> Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p style="color: black;"> O maior valore informado foi ${maior}.</p>`
        res.innerHTML += `<p style="color: black;"> O meenor valor informdo foi ${menor}.</p>`
        res.innerHTML += `<p style="color: black;"> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p style="color: black;">A média dos valores digitados é ${media};</p>`
    }
}