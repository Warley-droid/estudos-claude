
const form = document.querySelector('#form-tarefa');
const input = document.querySelector('#tarefa');
const lista = document.querySelector('#lista');
const erro = document.querySelector('#erro');
const contador = document.querySelector('#contador');
const limparConcluidas = document.querySelector('#limpar-concluidas');

// Array de objetos com as tarefas
let tarefas = carregar();

// Função para carregar as tarefas
function carregar() {
    try {
        const dados = localStorage.getItem('tarefas');

        return dados ? JSON.parse(dados) : [];
    } catch (error) {
        return [];
    }
}

// Função para salvar as tarefas
function salvar() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

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

    tarefas.push({
        texto: texto,
        feita: false
    });

    salvar();
    renderizar();

    input.value = '';
    input.focus();
});

// Usando delegação de eventos
lista.addEventListener('click', (event) => {

    const li = event.target.closest('li');

    if (!li) return;

    const indice = Number(li.dataset.index);

    // Verificando se o botão remover foi clicado
    if (event.target.closest('button.remover')) {

        tarefas.splice(indice, 1);

    } else {

        // Riscar ou desriscar a tarefa
        tarefas[indice].feita = !tarefas[indice].feita;
    }

    salvar();
    renderizar();
});

// Limpando as tarefas concluídas
limparConcluidas.addEventListener('click', () => {

    tarefas = tarefas.filter((tarefa) => {
        return tarefa.feita === false;
    });

    salvar();
    renderizar();
});

// Mostrando as tarefas ao abrir a página
renderizar();