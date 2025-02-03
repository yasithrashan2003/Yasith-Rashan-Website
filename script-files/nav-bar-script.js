function closeNavbar() {
    document.getElementById('check').checked = false;
}

function scrollToSection(event) {
    event.preventDefault(); // Prevent default link behavior
    const targetId = event.target.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, null, " "); // Remove # from URL
    }
}
