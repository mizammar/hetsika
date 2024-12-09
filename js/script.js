// Simple animation to reveal elements on scroll
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animated');

    const scrollAnimation = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100) {
                el.classList.add('fadeIn');
            }
        });
    };

    window.addEventListener('scroll', scrollAnimation);
    scrollAnimation(); // Initial check in case the user has already scrolled down
});
