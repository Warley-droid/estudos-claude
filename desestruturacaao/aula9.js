const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899
};

// Fazendo a desestruturação do objeto
const {
    titulo,
    autor,
    ano: anoPublicacao,
    editora = "Desconhecida"
} = livro;

// Exibindo os valores no console
console.log(titulo);
console.log(autor);
console.log(anoPublicacao);
console.log(editora);