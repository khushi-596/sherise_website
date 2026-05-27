/* ==========================================
   JAVASCRIPT MODULE - TESTIMONIALS SLIDER
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.testimonials-slider');
    if (!sliderContainer) return;

    const track = sliderContainer.querySelector('.slider-track');
    const slides = Array.from(sliderContainer.querySelectorAll('.slide-item'));
    const prevBtn = sliderContainer.querySelector('.slider-btn.btn-prev');
    const nextBtn = sliderContainer.querySelector('.slider-btn.btn-next');
    const dotsContainer = sliderContainer.querySelector('.slider-dots');

    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoSlideInterval = null;
    const SLIDE_INTERVAL_TIME = 5000; // 5 seconds

    // 1. CREATE INDICATOR DOTS
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.slider-dot'));

    // 2. POSITION TRACK SLIDES
    const updateSlidePositions = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots state
        dots.forEach((dot, idx) => {
            dot.className = 'slider-dot' + (idx === currentIndex ? ' active' : '');
        });
    };

    const goToSlide = (index) => {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        updateSlidePositions();
    };

    const nextSlide = () => {
        goToSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        goToSlide(currentIndex - 1);
    };

    // 3. EVENT BINDINGS FOR BUTTONS
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });
    }

    // 4. AUTOPLAY TIMERS (5s) & HOVER LISTENERS
    const startAutoSlide = () => {
        if (autoSlideInterval) return;
        autoSlideInterval = setInterval(nextSlide, SLIDE_INTERVAL_TIME);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    };

    const resetAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    // 5. TOUCH / MOBILE SWIPE LISTENERS
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }, { passive: true });

    const handleSwipeGesture = () => {
        const threshold = 50;
        if (touchStartX - touchEndX > threshold) {
            // Swiped Left -> Next
            nextSlide();
            resetAutoSlide();
        } else if (touchEndX - touchStartX > threshold) {
            // Swiped Right -> Prev
            prevSlide();
            resetAutoSlide();
        }
    };

    // Initialize carousel loop
    updateSlidePositions();
    startAutoSlide();
});
