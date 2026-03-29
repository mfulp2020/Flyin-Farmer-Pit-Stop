// Scroll Reveal Engine
document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer Options
    const options = {
        root: null, // viewport
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px"
    };

    // Observer Callback
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, options);

    // Target Elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
