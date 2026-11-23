// Função para carregar as tarefas
export function carregar() {
    try {
        const dados = localStorage.getItem('tarefas');

        return dados ? JSON.parse(dados) : [];

    } catch (error) {
        return [];
    }
}

// Função para salvar as tarefas
export function salvar(tarefas) {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}