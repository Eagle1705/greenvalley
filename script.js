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
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

