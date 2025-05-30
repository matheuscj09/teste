const botao = document.getElementById('modo-btn');

botao.addEventListener('click', () => {
    const html = document.documentElement;
    const temaAtual = html.getAttribute('data-bs-theme');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-bs-theme', novoTema);
});
