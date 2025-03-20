// Reload Halaman Web
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo a");
    logo.addEventListener("click", function(event) {
        event.preventDefault();
        location.reload();
    });
});

// Dark Mode
const switchToggle = document.getElementById('theme-switch');
const body = document.body;

switchToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});