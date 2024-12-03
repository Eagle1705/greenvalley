// Array degli sponsor con immagini e link
const sponsors = [
    {
        img: 'snai.png',
        url: 'https://www.snai.it'
    },
    {
        img: 'max.png',
        url: 'https://www.maxsport.it/it'
    },
    {
        img: 'maida.png',
        url: 'https://www.tabacchimaida.it'
    },
    {
        img: 'burgermen.png',
        url: 'https://www.burgerman.it'
    },
    {
        img: 'teamcozzo.png',
        url: 'https://www.instagram.com/team_cozzo/?hl=en'
    },
    {
        img: 'villaelena.png',
        url: 'https://www.villaelena.org'
    },
];

let currentSponsor = 0; // Inizia con il primo sponsor

// Funzione per cambiare l'immagine dello sponsor e il suo link
function rotateSponsors() {
    const sponsorLink = document.getElementById('sponsor-link');
    const sponsorImg = document.getElementById('sponsor-img');

    // Aggiorna l'immagine e il link dell'attuale sponsor
    sponsorLink.href = sponsors[currentSponsor].url;
    sponsorImg.src = sponsors[currentSponsor].img;
    sponsorImg.alt = `Sponsor ${currentSponsor + 1}`;

    // Passa al prossimo sponsor, ciclando l'array
    currentSponsor = (currentSponsor + 1) % sponsors.length;
}

// Cambia lo sponsor ogni 3 secondi


// Mostra il primo sponsor al caricamento della pagina

// Array delle immagini e dei relativi link
const slides = [
    {
        img: 'allenamento1.jpeg',
        
    },
    {
        img: 'allenamento.jpg',
    
    },
    {
        img: 'allenamento2.jpg',

    }
];

let currentSlide = 0; // Iniziamo dalla prima immagine

// Funzione per mostrare una slide
function showSlide(index) {
    const slideData = slides[index];
    const newsImageContainer = document.querySelector('.news-image'); // Il container dell'immagine

    // Aggiorna il contenuto HTML con il link e l'immagine
    newsImageContainer.innerHTML = `
        <a href="${slideData.url}" target="_blank"> <!-- Aggiunge il link -->
            <img src="${slideData.img}" alt="Slide ${index}" class="news-img">
        </a>
    `;
}

// Funzione per passare alla slide successiva
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Funzione per tornare alla slide precedente
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}


// Mostra la prima slide al caricamento
showSlide(currentSlide);

// Menu mobile a scomparsa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

