function criarListaQuartos(quartos) {
    const ul = document.getElementById('quartos-lista');

    quartos.forEach((quarto) => {
        const li = document.createElement('li');
        li.textContent = `ID: ${quarto.id}, Localização: ${quarto.localizacao}, Situação: ${quarto.situacao}`;
        ul.appendChild(li);
    });
}

const database = [
    { id: 1, localizacao: 'Quarto 101', situacao: 'Em uso' },
    { id: 2, localizacao: 'Quarto 102', situacao: 'Livre' },
    { id: 3, localizacao: 'Quarto 103', situacao: 'Em uso' },
];

