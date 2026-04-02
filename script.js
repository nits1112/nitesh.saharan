// Fade-in animation when scrolling
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements with the 'fade-in' class
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach(element => {
        observer.observe(element);
    });
});
