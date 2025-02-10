// Para o Google Maps - Endereço
const modal = document.querySelector(".modal");
const mask = document.querySelector(".mask-modal");

// Função para exibir o mapa - modal
function showModal() {
    modal.style.visibility = "visible";
    modal.style.opacity = "1"; // Faz o modal aparecer
    mask.style.visibility = "visible";
    mask.style.opacity = "1"; // Faz a máscara de fundo aparecer
}

// Função para esconder o mapa - modal
function hideModal() {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0"; // Faz o modal desaparecer
    mask.style.visibility = "hidden";
    mask.style.opacity = "0"; // Faz a máscara de fundo desaparecer
}

// Evento para fechar o modal ao clicar na máscara
 mask.addEventListener("click", hideModal);


// Para o formulario de contato
const form = document.querySelector('.fale-conosco');
const background = document.querySelector('.mascara-form');

// Função para mostrar o formulário
function showForm() {
    form.style.visibility = 'visible';
    form.style.opacity = '1'; // Faz o formulário aparecer
    background.style.visibility = 'visible';
    background.style.opacity = '1'; // Faz a máscara aparecer
}

// Função para esconder o formulário
function hideForm() {
    form.style.visibility = 'hidden';
    form.style.opacity = '0'; // Faz o formulário desaparecer
    background.style.visibility = 'hidden';
    background.style.opacity = '0'; // Faz a máscara desaparecer
}

// Fechar o formulário ao clicar fora
background.addEventListener('click', hideForm);

// Para o audio funcionar

document.addEventListener("mousedown", function() {
    let video = document.querySelector("video"); // Seleciona o primeiro vídeo

    if (video) {
        video.muted = !video.muted; // Alterna entre mudo e com som
        video.play(); // Garante que o vídeo continue rodando
    }
});

  