document.addEventListener("DOMContentLoaded", function () {
    const skillCategories = document.querySelectorAll('.skill-category');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the category is visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    skillCategories.forEach(category => {
        observer.observe(category);
    });
});
