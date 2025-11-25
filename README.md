# Base de Conhecimento de Tecnologias

Este é um projeto simples de front-end que exibe uma coleção de tecnologias (linguagens de programação, frameworks, ferramentas, etc.) em formato de cards. A página permite que o usuário busque dinamicamente em toda a base de conhecimento, filtrando os resultados em tempo real.

## 🚀 Como Usar

1.  **Clone ou baixe** este repositório.
2.  Abra o arquivo `index.html` em qualquer navegador web moderno (como Chrome, Firefox, Edge).
3.  A página carregará todos os cards com as tecnologias listadas no arquivo `data.json`.
4.  Utilize a **barra de busca** no topo da página para filtrar os resultados. Você pode buscar por:
    *   Nome da tecnologia (ex: "JavaScript")
    *   Palavras na descrição (ex: "servidor")
    *   Tags associadas (ex: "frontend", "devops")

A lista de cards será atualizada automaticamente conforme você digita.

## 🛠️ Tecnologias Empregadas

O projeto foi construído utilizando tecnologias web fundamentais, sem a necessidade de frameworks complexos.

*   **HTML5**: Para a estruturação semântica do conteúdo da página, como o cabeçalho, a área de busca e o contêiner dos cards.

*   **CSS3**: Responsável por toda a estilização visual, incluindo o layout dos cards, a aparência da barra de busca e a responsividade básica.

*   **JavaScript (ES6+)**: Utilizado para toda a lógica dinâmica da aplicação:
    *   **API Fetch**: Para carregar de forma assíncrona os dados do arquivo local `data.json`.
    *   **Manipulação do DOM**: Para criar e renderizar dinamicamente os cards na tela com base nos dados recebidos.
    *   **Eventos**: Para capturar a digitação do usuário na barra de busca (`input` event) e acionar a função de filtro.
    *   **Funções de Ordem Superior (`filter`)**: Para implementar a lógica de busca de forma declarativa e eficiente.

## 📂 Estrutura dos Arquivos

```
./
├── 📄 index.html      # Arquivo principal da página
├── 🎨 style.css       # Folha de estilos
├── ⚙️ script.js       # Código com a lógica da aplicação
├── 📦 data.json       # Banco de dados com as informações das tecnologias
└── 📖 README.md       # Este arquivo
```
