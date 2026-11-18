const enviar = document.querySelector('#enviar')

enviar.addEventListener('click', clicar)

function clicar(){
    const nome = document.querySelector('#nome-id')
    const idadeInput = document.querySelector('#idade-id')
    const paragrafo = document.querySelector('#paragrafo-id')

    let ehMaiorDeIdade = ''

    if(idadeInput.value === ''){
        paragrafo.innerText = 'Preencha a idade.'
        return
    }

    const idade = Number(idadeInput.value)

    if(idade >= 18){
        ehMaiorDeIdade = 'Maior de idade'
    }else{
        ehMaiorDeIdade = 'Menor de idade'
    }

    paragrafo.innerText = `Meu nome é ${nome.value} e tenho ${idade} anos. ${ehMaiorDeIdade}`
}

const areaTriangulo = (base, altura) => (base * altura) / 2

const calcular = () => {
    const base = Number(document.querySelector('#base-id').value)
    const altura = Number(document.querySelector('#altura-id').value)

    document.querySelector('#area-tri').innerText =
        `A área do triângulo é de ${areaTriangulo(base, altura)}m²`
}

const calcularGraus = () => {
    const temperatura = Number(document.querySelector('#temperatura-id').value)
    const convertido = document.querySelector('#convertido-id')

    const cx18 = temperatura * 1.8

    convertido.innerText = `A temperatura é de ${cx18+32} Fahrenheit`
}