/* ==========================================
   JAVASCRIPT CORE - MAIN APP CONTROLLER
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. PAGE LOAD OVERLAY ANIMATION
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                pageLoader.style.opacity = '0';
                pageLoader.style.visibility = 'hidden';
            }, 300);
        });
    }

    // 2. STICKY NAVBAR SCROLL ACTION
    const navbar = document.getElementById('navbar');
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check

    // 3. HAMBURGER MENU OVERLAY TRIGGER
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            // Toggle body scroll locking
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close when clicking nav-links
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 4. ENSURE LIGHT MODE (clear any stale dark mode)
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('theme');

    // 5. CUSTOM AOS (ANIMATE ON SCROLL) RUNNER
    const aosElements = document.querySelectorAll('[data-aos]');
    if ('IntersectionObserver' in window && aosElements.length > 0) {
        const aosObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    // Unobserve element after animation triggers once
                    aosObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        aosElements.forEach(elem => aosObserver.observe(elem));
    } else {
        // Fallback for older browsers
        aosElements.forEach(elem => elem.classList.add('aos-animate'));
    }

    // 6. BACK TO TOP BUTTON TRANSITIONS
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
