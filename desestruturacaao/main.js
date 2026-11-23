// Importando as funções do storage.js
import { carregar, salvar } from './storage.js';

// Importando as funções do tarefas.js
import { adicionar, remover, alternar } from './tarefas.js';

// Selecionando os elementos HTML
const form = document.querySelector('#form-tarefa');
const input = document.querySelector('#tarefa');
const lista = document.querySelector('#lista');
const erro = document.querySelector('#erro');
const contador = document.querySelector('#contador');
const limparConcluidas = document.querySelector('#limpar-concluidas');

// Carregando as tarefas salvas
let tarefas = carregar();

// Função para atualizar o contador
function atualizarContador() {

    const pendentes = tarefas.filter((tarefa) => {
        return tarefa.feita === false;
    });

    contador.innerText = `${pendentes.length} tarefas pendentes`;
}

// Função para mostrar as tarefas na tela
function renderizar() {

    lista.innerHTML = '';

    tarefas.forEach((tarefa, indice) => {

        const li = document.createElement('li');

        li.textContent = tarefa.texto;
        li.dataset.index = indice;

        if (tarefa.feita) {
            li.classList.add('feita');
        }

        // Criando o botão de remover
        const botaoRemover = document.createElement('button');

        botaoRemover.textContent = 'Remover';
        botaoRemover.type = 'button';
        botaoRemover.classList.add('remover');

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });

    atualizarContador();
}

// Adicionando uma nova tarefa
form.addEventListener('submit', (event) => {

    event.preventDefault();

    const texto = input.value.trim();

    if (texto.length < 3) {
        erro.innerText = 'Erro: digite pelo menos 3 caracteres';
        return;
    }

    erro.innerText = '';

    // Recebendo o novo array
    tarefas = adicionar(tarefas, texto);

    salvar(tarefas);
    renderizar();

    input.value = '';
    input.focus();
});

// Removendo e alternando tarefas
lista.addEventListener('click', (event) => {

    const li = event.target.closest('li');

    if (!li || !lista.contains(li)) return;

    const indice = Number(li.dataset.index);

    // Verificando se o botão remover foi clicado
    if (event.target.closest('button.remover')) {

        tarefas = remover(tarefas, indice);

    } else {

        tarefas = alternar(tarefas, indice);
    }

    salvar(tarefas);
    renderizar();
});

// Limpando as tarefas concluídas
limparConcluidas.addEventListener('click', () => {

    tarefas = tarefas.filter((tarefa) => {
        return tarefa.feita === false;
    });

    salvar(tarefas);
    renderizar();
});

// Mostrando as tarefas ao abrir a página
renderizar();