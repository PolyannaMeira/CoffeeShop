document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".container, .container-reverse");
    
    containers.forEach(container => {
        const items = container.querySelectorAll(".item");
        
        container.addEventListener("mouseenter", () => {
            items.forEach(item => {
                item.style.animationPlayState = "paused";
            });
        });

        container.addEventListener("mouseleave", () => {
            items.forEach(item => {
                item.style.animationPlayState = "running";
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".item img");

    // Criar a caixa de descrição
    const descriptionBox = document.createElement("div");
    descriptionBox.classList.add("description-box");
    document.body.appendChild(descriptionBox);

    images.forEach(img => {
        img.addEventListener("mouseenter", (event) => {
            const description = img.getAttribute("data-description");
            if (description) {
                descriptionBox.textContent = description;
                descriptionBox.style.display = "block";

                // Posicionar próximo à imagem
                const rect = img.getBoundingClientRect();
                descriptionBox.style.left = `${rect.left + window.scrollX + 10}px`;
                descriptionBox.style.top = `${rect.bottom + window.scrollY + 10}px`;
            }
        });

        img.addEventListener("mouseleave", () => {
            descriptionBox.style.display = "none";
        });
    });
});
