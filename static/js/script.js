// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close mobile menu after clicking (optional, if using a mobile menu)
        const navMenu = document.querySelector('.mobile-nav');
        if (navMenu && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Mobile navigation menu toggle (if applicable)
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.mobile-nav');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}
