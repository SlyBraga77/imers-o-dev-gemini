let cardContainer = document.querySelector(".card-container");
let searchInput = document.querySelector("#search-input"); // Adicionado para pegar o input de busca
let dados = [];

async function iniciarBusca() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar os novos
    for (let dado of dados) {
        let articule = document.createElement("article");
        articule.classList.add("card");
        articule.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.data_criacao}</p>
            <p>${dado.descricao}</p> 
            <a href="${dado.link}" target="_blank">Saiba mais</a>
           `
        cardContainer.appendChild(articule);
    }
}

// Adiciona um "ouvinte" para o evento de digitação no campo de busca
searchInput.addEventListener("input", () => {
    const termoBusca = searchInput.value.toLowerCase();
    
    // Filtra os dados com base no termo de busca
    const dadosFiltrados = dados.filter(dado => {
        const nome = dado.nome.toLowerCase();
        const descricao = dado.descricao.toLowerCase();
        return nome.includes(termoBusca) || descricao.includes(termoBusca);
    });
    renderizarCards(dadosFiltrados);
});

iniciarBusca(); // Chama a função para carregar os dados iniciais