let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide += direction;

    if (currentSlide === totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const translateValue = -currentSlide * 33.33 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        changeSlide(1)
    } else if (event.key === 'ArrowLeft') {
        changeSlide(-1)
    }
});
