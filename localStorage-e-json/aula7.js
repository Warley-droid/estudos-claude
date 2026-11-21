// Guardar dados no localStorage
function guardarDadosNoLocalStorage() {
  const nome = prompt('Digite seu nome:');
  if (nome) {
    const dados = { nome: nome, nivel: 7 };
    localStorage.setItem('dadosUsuario', JSON.stringify(dados));
    console.log('Dados guardados!');
  }
}

// Ler dados do localStorage
function lerDadosDoLocalStorage() {
  const dadosStr = localStorage.getItem('dadosUsuario');
  if (dadosStr) {
    const dados = JSON.parse(dadosStr);
    console.log(`Nome: ${dados.nome}, Nível + 1: ${dados.nivel + 1}`);
  } else {
    console.log('Nenhum dado encontrado no localStorage.');
  }
}

// Recarregar a página
function recarregarPagina() {
  location.reload();
}

// Event listeners
document.getElementById('guardar').addEventListener('click', guardarDadosNoLocalStorage);

document.getElementById('ler').addEventListener('click', lerDadosDoLocalStorage);

document.getElementById('recarregar').addEventListener('click', recarregarPagina);




// Botão para a mudança de tema
const botaoTema = document.getElementById('botao-tema');

// Verificando o tema salvo
let isDarkMode = localStorage.getItem('tema') === 'escuro';

// Tema que já está salvo
if (isDarkMode){
    document.body.classList.add('dark-mode');
}

function toggleTheme(){
    document.body.classList.toggle('dark-mode');

    isDarkMode = document.body.classList.contains('dark-mode');

    // Salvando o tema
    if (isDarkMode){
        localStorage.setItem('tema', 'escuro');
    }else{
        localStorage.setItem('tema', 'claro')
    }
}

// Adicionando evento  no botão de tema
botaoTema.addEventListener('click', toggleTheme);