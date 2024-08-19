
    // Show/hide the go-to-top button based on scroll position
    window.onscroll = function() {
        const goToTopButton = document.getElementById('goToTop');
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            goToTopButton.style.display = 'block';
        } else {
            goToTopButton.style.display = 'none';
        }
    };

    // Smooth scroll to the top when the button is clicked
    document.getElementById('goToTop').onclick = function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

