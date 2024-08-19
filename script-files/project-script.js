document.addEventListener("DOMContentLoaded", function() {
    const projectBoxes = document.querySelectorAll('.project-box');

    const observerOptions = {
        root: null, // Uses the viewport as the container
        rootMargin: "0px",
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    projectBoxes.forEach(box => {
        observer.observe(box);
    });
});
