// Simulazione del caricamento di 2 secondi
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Simulazione di un caricamento di 2 secondi
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Nasconde la schermata di caricamento
        mainContent.style.display = "block"; // Mostra il contenuto principale
    }, 2000); // 2000 millisecondi = 2 secondi
});
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0); // Forza lo scroll all'inizio
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const players = document.querySelectorAll(".player-card");

    // Ritardo iniziale di 2 secondi prima di iniziare l'animazione
    const initialDelay = 2000;

    // Aggiungi un ritardo progressivo per ciascun giocatore
    players.forEach((player, index) => {
        const img = player.querySelector(".player-img");

        // Mostra il giocatore con un ritardo progressivo
        setTimeout(() => {
            player.style.opacity = "1";
            player.style.transform = "translateY(0)";
        }, initialDelay + index * 500);

        // Applica l'effetto sfumatura di default
        img.style.maskImage = "linear-gradient(to bottom, black 75%, rgba(0, 0, 0, 0) 90%)";
        img.style.webkitMaskImage = "linear-gradient(to bottom, black 75%, rgba(0, 0, 0, 0) 90%)";
        img.style.transition = "transform 0.3s ease, mask-image 0.2s ease, -webkit-mask-image 0.2s ease";

        // Rimuovi la sfumatura in hover e aggiungi ingrandimento graduale
        player.addEventListener("mouseover", () => {
            img.style.maskImage = "none";
            img.style.webkitMaskImage = "none";
            img.style.transform = "scale(1.25)"; // Zoom al 25%
        });

        // Ripristina la sfumatura e rimuovi lo zoom quando il cursore esce
        player.addEventListener("mouseout", () => {
            img.style.maskImage = "linear-gradient(to bottom, black 75%, rgba(0, 0, 0, 0) 90%)";
            img.style.webkitMaskImage = "linear-gradient(to bottom, black 75%, rgba(0, 0, 0, 0) 90%)";
            img.style.transform = "scale(1)"; // Torna alla dimensione originale
        });
    });
});

