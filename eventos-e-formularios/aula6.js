const texto = document.querySelector('#texto');
const contador = document.querySelector('#contador');

// Evento para detectar a digitação
texto.addEventListener('input', contarCaracteres);

function contarCaracteres(){
    // Contando os caracteres digitados
    const quantidade = texto.value.length;

    // Mostrar o resultado na página
    contador.innerText = `${quantidade} ${quantidade === 1 ?'caractere' : 'caracteres'}`;
}




const form = document.querySelector('#form-tarefa');
const input = document.querySelector('#tarefa');
const lista = document.querySelector('#lista');
const erro = document.querySelector('#erro')

// Criando a lista de tarefas
form.addEventListener('submit', (event) => {

  event.preventDefault(); // impede o recarregamento

  const texto = input.value.trim();
  
//Verificando se a tarefa tem menos do que 3 caracteres
if (texto.length < 3) {

    erro.innerText = 'Erro: digite pelo menos 3 caracteres';

    return;
}

    erro.innerText = '';

  const li = document.createElement('li');
  
  li.textContent = texto;

//Criando o botão de remover
const botaoRemover = document.createElement('button');
botaoRemover.textContent = 'remover';
botaoRemover.classList.add('remover');

  li.appendChild(botaoRemover);
  lista.appendChild(li);

  input.value = '';
  input.focus();
});

// Usando delegação de eventos
lista.addEventListener('click', (event) => {

        // Verificando se o elemento clicado é um botão
    if (event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove();

    } else if (event.target.tagName === 'LI'){

        // Risca ou desrisca a tarefa
        event.target.classList.toggle(`feita`);
    }
})