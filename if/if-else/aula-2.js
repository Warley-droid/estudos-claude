// If Else
const num = -1

if (num < 0){
    console.log('Negativo')
}else if (num === 0){
    console.log('0')
}else{
    console.log('Positivo')
}

///////////////
const idade = 16
const temAutorizacao = true

if (idade >= 18 || temAutorizacao) {
    console.log('Pode entrar')
    
} else {
    console.log('Não pode entrar')
}

///////////////

const hora = new Date().getHours()

if (hora >= 18){
    document.body.style.backgroundColor = 'rgb(65, 48, 100)'

}else if (hora >= 12){
    document.body.style.backgroundColor = 'rgb(204, 102, 73)'

}else if (hora >= 6){
    document.body.style.backgroundColor = 'rgb(225, 213, 194)'

}else{
    document.body.style.backgroundColor = 'rgb(18, 20, 24)'
}


// Switch
const mes = 9

switch (mes){
        case 12:
        case 1:
        case 2:
            console.log('Verão')

    break
        case 3:
        case 4:
        case 5:
            console.log('Outuno')

            break
        case 6:
        case 7:
        case 8:
            console.log('Inverno')

            break
        case 9:
        case 10:
        case 11:
            console.log('Primavera')
            break

        default:
            console.log('Mês inválido!')
}