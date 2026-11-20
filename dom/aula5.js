// Contador
const botao = document.querySelector('#contador');
const numero = document.querySelector('#numero');
let contador = 0;

numero.textContent = contador;

botao.addEventListener('click', () =>{
    contador++;

    numero.textContent = contador;
});

// Mudar o tema
const botaoTema = document.querySelector('#botao-tema');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('escuro')
});

// Lista de países
const lista = document.querySelector('#lista');
const paises = ['Brasil', 'Chile', 'Peru'];

paises.forEach((pais) => {
    const li = document.createElement('li');
    li.textContent = pais;

    // Criando o botão de remover itens da lista
    const remover = document.createElement('button');
    remover.textContent = 'Remover';

    // Adicionando o botão REMOVE dentro do li
    li.appendChild(remover);

    // Adicionando o li por dentro da lista
    lista.appendChild(li);

    // Adicionando evento no botão remover
    remover.addEventListener('click', () => {
        li.remove();
    });
});