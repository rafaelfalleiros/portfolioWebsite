// script.js

// Function to smooth scroll to an anchor
function scrollToAnchor(anchor) {
    const element = document.querySelector(anchor);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Event listener for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const anchor = this.getAttribute('href');
        scrollToAnchor(anchor);
    });
});
