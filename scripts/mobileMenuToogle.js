document.addEventListener('DOMContentLoaded', function() {
// Mobile menu toggle
    const menuButton = document.querySelector('.md\\:hidden');
    const closeButton = document.querySelector('.fixed.inset-0 button');
    const mobileMenu = document.querySelector('.fixed.inset-0.bg-primary');
    if (menuButton && closeButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('translate-x-full');
        });
        closeButton.addEventListener('click', function() {
            mobileMenu.classList.add('translate-x-full');
        });
    }
});