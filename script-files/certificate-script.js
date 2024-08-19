document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('scroll-animate');
                }, index * 500); // Adjust delay (in milliseconds) between each element's animation

                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Select all certificate containers
    const certificateContainers = document.querySelectorAll('.certificate-container');
    certificateContainers.forEach(container => {
        observer.observe(container);
    });
});
