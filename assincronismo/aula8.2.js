const lista = document.querySelector('#lista');
const mensagem = document.querySelector('#mensagem');

// Criando uma função assíncrona
async function buscarUsuarios() {

    // Verificando se existem usuários salvos
    const dadosSalvos = localStorage.getItem('usuarios');

    // Se já existir dados salvos, mostra sem chamar a API
    if (dadosSalvos) {

        const usuarios = JSON.parse(dadosSalvos);

        mostrarUsuarios(usuarios);

        return;
    }

    try {

        // Mostrando mensagem de carregamento
        mensagem.textContent = 'Carregando...';

        // Buscando os usuários na API
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');

        // Verificando se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error('Erro ao buscar usuários!');
        }

        // Transformando a resposta em JSON
        const usuarios = await resposta.json();

        // Salvando os usuários no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Mostrando os usuários na tela
        mostrarUsuarios(usuarios);

    } catch (erro) {

        // Mostrando mensagem de erro
        mensagem.textContent = 'Não foi possível carregar os usuários!';

        console.log(erro);

    } finally {

        // Removendo a mensagem de carregamento
        if (mensagem.textContent === 'Carregando...') {
            mensagem.textContent = '';
        }

    }

}

// Função para mostrar os usuários
function mostrarUsuarios(usuarios) {

    // Limpando a lista
    lista.innerHTML = '';

    // Percorrendo os usuários
    usuarios.forEach((usuario) => {

        // Criando o elemento li
        const item = document.createElement('li');

        // Adicionando nome e email
        item.textContent = `Nome: ${usuario.name} | E-mail: ${usuario.email}`;

        // Adicionando o li dentro da ul
        lista.appendChild(item);

    });

}

// Chamando a função
buscarUsuarios();