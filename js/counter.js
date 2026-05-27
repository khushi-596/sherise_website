/* ==========================================
   JAVASCRIPT MODULE - ANIMATED COUNTERS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const counterElements = document.querySelectorAll('.stat-number[data-target]');
    
    if (counterElements.length === 0) return;

    const animateNumber = (element) => {
        const target = +element.getAttribute('data-target');
        const duration = 2000; // Animation length: 2s
        const startTime = performance.now();
        
        const countStep = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing Out Quad function
            const easeProgress = progress * (2 - progress);
            
            const currentValue = Math.floor(easeProgress * target);
            element.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(countStep);
            } else {
                element.textContent = target + '+';
            }
        };
        
        requestAnimationFrame(countStep);
    };

    if ('IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(entry.target);
                    // Unobserve to trigger only once
                    statsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });

        counterElements.forEach(elem => statsObserver.observe(elem));
    } else {
        // Fallback
        counterElements.forEach(elem => {
            const target = elem.getAttribute('data-target');
            elem.textContent = target + '+';
        });
    }
});
