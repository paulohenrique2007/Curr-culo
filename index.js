// Função para criar e adicionar o conteúdo da página
function createPage() {
    // Cria o cabeçalho
    const header = document.createElement('header');
    header.style.backgroundColor = '#333';
    header.style.color = 'white';
    header.style.padding = '10px 0';
    header.style.textAlign = 'center';
    header.innerHTML = '<h1>Minha Página Dinâmica</h1>';
    document.body.appendChild(header);

    // Cria a seção principal
    const container = document.createElement('div');
    container.style.width = '80%';
    container.style.margin = 'auto';
    container.style.padding = '20px';
    container.style.backgroundColor = 'white';
    container.style.borderRadius = '5px';
    container.style.marginTop = '20px';
    container.innerHTML = `
        <h2>Conteúdo Interativo</h2>
        <p id="message">Clique no botão abaixo para alterar este texto.</p>
        <button id="changeButton">Clique aqui</button>
    `;
    document.body.appendChild(container);

    // Cria o rodapé
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#333';
    footer.style.color = 'white';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px 0';
    footer.style.position = 'fixed';
    footer.style.width = '100%';
    footer.style.bottom = '0';
    footer.innerHTML = '<p>&copy; 2024 Minha Página Dinâmica</p>';
    document.body.appendChild(footer);

    // Adiciona o comportamento ao botão
    const button = document.getElementById('changeButton');
    button.addEventListener('click', function() {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'O texto foi alterado!';
    });
}

// Chama a função para criar a página quando o script for carregado
createPage();
