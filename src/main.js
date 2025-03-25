
const counterUp = window.counterUp.default;

const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counterUp(entry.target, {
                duration: 2000,
                delay: 16,
            });
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, { threshold: 1 });

counters.forEach(counter => observer.observe(counter));

