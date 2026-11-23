
// Selecionando o parágrafo
const contagem = document.querySelector('#contagem');

// Criando uma variável para armazenar o número
let numero = 10;
contagem.textContent = numero; // mostra o 10 imediatamente

// Criando o intervalo
const intervalo = setInterval(() => {

    numero--; // É o equivalente a: numero = numero - 1

    // Verificando se chegou a zero
    if (numero === -1) {

        contagem.textContent = 'Acabou!';

        // Parando o intervalo
        clearInterval(intervalo);

    } else {

        contagem.textContent = numero;

    }

}, 1000);
