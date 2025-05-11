document.addEventListener('DOMContentLoaded', function() {
    // Crear el elemento de audio con tu archivo de música existente
    const audio = new Audio('/music/Música de Fondo Instrumental Inspiradora - Música para Videos.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    // Guardar el estado de la música en localStorage
    function guardarEstadoMusica() {
        localStorage.setItem('musicaReproduciendo', 'true');
    }

    // Iniciar la música cuando el usuario interactúe con la página
    document.addEventListener('click', () => {
        audio.play();
        guardarEstadoMusica();
    }, { once: true });

    // Hide loading screen after 2 seconds
    setTimeout(() => {
        document.querySelector('.loading').classList.add('fade-out');
    }, 2000);

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 3000; // 3 seconds per slide

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');

        // If we've shown all slides, transition to the letter page
        if (currentSlide === 0) {
            setTimeout(() => {
                document.querySelector('.slideshow-container').classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = 'carta.html';
                }, 1500);
            }, slideInterval);
        }
    }

    // Start the slideshow after loading screen
    setTimeout(() => {
        setInterval(nextSlide, slideInterval);
    }, 2000);
});