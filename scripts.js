document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const slidesArray = Array.from(slides.children);
    const indicatorButtons = Array.from(indicatorsContainer.children);
    const slideCount = slidesArray.length;
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slideCount - 1;
        } else if (index >= slideCount) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicators();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function goToIndicator(event) {
        const index = parseInt(event.target.dataset.index);
        goToSlide(index);
    }

    function updateIndicators() {
        indicatorButtons.forEach(indicator => indicator.classList.remove('active'));
        indicatorButtons[currentIndex].classList.add('active');
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    indicatorsContainer.addEventListener('click', goToIndicator);

    // Inicializar indicadores
    updateIndicators();
});