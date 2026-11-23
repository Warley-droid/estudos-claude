// Função para adicionar uma tarefa
export function adicionar(tarefas, texto) {

    const novaTarefa = {
        texto: texto,
        feita: false
    };

    return [...tarefas, novaTarefa];
}

// Função para remover uma tarefa
export function remover(tarefas, indice) {

    return tarefas.filter((tarefa, posicao) => {
        return posicao !== indice;
    });
}

// Função para alternar o estado da tarefa
export function alternar(tarefas, indice) {

    return tarefas.map((tarefa, posicao) => {

        if (posicao === indice) {
            return {
                ...tarefa,
                feita: !tarefa.feita
            };
        }

        return tarefa;
    });
}