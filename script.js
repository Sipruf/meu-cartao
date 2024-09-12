//botao para copiar o email
document.querySelector('.button1').addEventListener('click', function() {
    const email = 'siprufnegocios@gmail.com';
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Mostrar mensagem
    const button = document.querySelector('.button1');
    button.classList.add('show');
    
    // Esconder mensagem após 2 segundos
    setTimeout(() => {
        button.classList.remove('show');
    }, 2000);
});


//card extra

//define os botoes e o card extra
const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');
const card = document.getElementById('info');

//mostra o card
showBtn.addEventListener('click', () => {
    card.style.display = 'flex';
});

//esconde o card
hideBtn.addEventListener('click', () => {
    card.style.display = 'none';
});



//botao-like

const likeBtn = document.getElementById('like')
const color = document.getElementById('heart')

    likeBtn.addEventListener('click', () => {
        heart.style.display = 'flex';
    }); 

    color.addEventListener('click', () => {
        color.style.display = 'none';
    }); 


// Botão para copiar o link do site
document.getElementById('link').addEventListener('click', function() {
    const siteLink = window.location.href; // Obtém o URL atual do site
    const tempInput = document.createElement('input'); // Cria um input temporário
    tempInput.value = siteLink; // Atribui o valor do link ao input
    document.body.appendChild(tempInput); // Adiciona o input ao corpo do documento
    tempInput.select(); // Seleciona o conteúdo do input
    document.execCommand('copy'); // Copia o valor selecionado
    document.body.removeChild(tempInput); // Remove o input temporário

    // Exibir mensagem de aviso
    const aviso = document.querySelector('.aviso');
    aviso.style.display = 'block'; // Exibe a mensagem
    setTimeout(function() {
        aviso.style.display = 'none'; // Oculta a mensagem após 2 segundos
    }, 2000);
});
