/* ==========================================
   JAVASCRIPT MODULE - DYNAMIC TYPING EFFECT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const typingSpan = document.querySelector('.typing-text');
    if (!typingSpan) return;

    // Retrieve terms to cycle through
    const terms = ["Empowering Women", "Building Futures", "Creating Change", "Inspiring Leaders"];
    let termIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    // Typing delay configurations
    const TYPING_SPEED = 100;
    const ERASING_SPEED = 50;
    const DELAY_BETWEEN_WORDS = 2000; // 2 seconds

    // Add blink cursor span automatically to prevent markup pollution
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    typingSpan.parentNode.insertBefore(cursor, typingSpan.nextSibling);

    const typeAnimation = () => {
        const currentWord = terms[termIndex];
        
        if (isDeleting) {
            // Remove character
            typingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Add character
            typingSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeDelay = isDeleting ? ERASING_SPEED : TYPING_SPEED;

        // If word is complete, pause and start deleting
        if (!isDeleting && charIndex === currentWord.length) {
            typeDelay = DELAY_BETWEEN_WORDS;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next word index
            termIndex = (termIndex + 1) % terms.length;
            typeDelay = 500; // Small break before typing next word
        }

        setTimeout(typeAnimation, typeDelay);
    };

    // Kick off animation loop
    setTimeout(typeAnimation, 1000);
});
