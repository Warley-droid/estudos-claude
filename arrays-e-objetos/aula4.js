const numeros = [2, 9, 8, 4, 11];

// Usando o método 'map' para elevar os números ao quadrado
const quadrado = numeros.map((n) => n**2);

console.log(quadrado);

// Usando filter para guardar somente os números maiores do que 10

const maiorQueDez = numeros.filter((numeroDez) => numeroDez >= 10);

console.log(maiorQueDez);

const livro = {
    titulo:'JavaScript',
    autor:'Warley',
    paginas:254,

    descrever() {
    return `O livro ${this.titulo} feito pelo autor ${this.autor} tem ${this.paginas} páginas.`;
    }
};

console.log(livro.descrever())

// usando o método filter
const produtos = [
    {produto:'Sabonete', preco:4.50,},
    {produto:'Panela de pressão', preco:100,},
    {produto:'Calculadora', preco:15.25,},
    {produto:'Livro', preco:67,},
];

const produtosBaratos = produtos.filter((item) => item.preco < 50);
const nomeProduto = produtosBaratos.map((item) => item.produto);

console.log(nomeProduto);

// Usando o método REDUCE
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 5.0 },
  { nome: "Carla", nota: 9.2 },
]; 

const total = alunos.reduce((acumulator, notaAtual) => {
    return acumulator + notaAtual.nota;
},0);

console.log(total/3)