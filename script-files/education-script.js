document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the box is visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the box is visible
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});
