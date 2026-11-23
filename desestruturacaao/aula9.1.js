// EXERCÍCIO 2 - SPREAD E REST

// a) Função para calcular a média
function media(...notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);

    return soma / notas.length;
}

console.log('Média:', media(7, 8, 9, 10));


// b) Juntando dois arrays
const nomes1 = ['João', 'Maria', 'Pedro'];
const nomes2 = ['Ana', 'Carlos', 'Lucas'];

const todosNomes = [...nomes1, ...nomes2];

console.log('Todos os nomes:', todosNomes);


// c) Copiando e modificando um objeto
const config = {
    tema: 'claro',
    fonte: 16
};

const novaConfig = {
    ...config,
    tema: 'escuro'
};

console.log('Configuração original:', config);
console.log('Nova configuração:', novaConfig);