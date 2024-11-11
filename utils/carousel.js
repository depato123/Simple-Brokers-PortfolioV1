// Carousel main
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

function showSlide(i) {
    const slides = document.querySelectorAll('.carousel-item');
    if (i >= slides.length) {
        index = 0;
    }
    if (i < 0) {
        index = slides.length - 1;
    }
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    showSlide(index);
});

prevBtn.addEventListener('click', () => {
    index--;
    showSlide(index);
});

// Auto-play functionality
setInterval(() => {
    index++;
    showSlide(index);
}, 7000); // Change slide every 7 seconds
