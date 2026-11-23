
// Selecionando o parágrafo
const mensagens = document.querySelector('#mensagens');

// Criando a função esperar usando Promise
function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Criando uma função assíncrona
async function mostrarMensagens() {

    mensagens.textContent = 'Primeira mensagem';

    await esperar(2000);

    mensagens.textContent += ' | Segunda mensagem';

    await esperar(2000);

    mensagens.textContent += ' | Terceira mensagem';

}

// Chamando a função
mostrarMensagens();