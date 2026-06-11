document.addEventListener("DOMContentLoaded", function () {

    // --- 1. CONTROLE DO MENU HAMBÚRGUER (MOBILE) ---
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", function () {
        // Alterna a classe 'active' para abrir/fechar o menu no CSS
        navMenu.classList.toggle("active");

        // Pequena animação visual no botão hambúrguer
        menuBtn.classList.toggle("open");
    });

    // Fecha o menu automaticamente ao clicar em qualquer link (melhor experiência)
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });


    // --- 2. INTERATIVIDADE NOS CARDS DE PILARES ---
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const pilar = this.getAttribute("data-pilar");

            // Cria uma resposta dinâmica baseada no card clicado
            let mensagem = "";
            if (pilar === "ambiental") {
                mensagem = "Você sabia? O plantio direto reduz o uso de água e protege micro-organismos benéficos do solo!";
            } else if (pilar === "tecnologico") {
                mensagem = "Tecnologia no campo: Drones conseguem identificar pragas em minutos, evitando o desperdício de defensivos.";
            } else if (pilar === "social") {
                mensagem = "Fator Humano: O Agrinho capacita milhares de escolas gerando consciência ecológica nas novas gerações.";
            }

            // Exibe um alerta interativo amigável
            alert(mensagem);
        });
    });
});