document.addEventListener('DOMContentLoaded', function() {
// Theme switch
    const themeSwitch = document.querySelectorAll('.theme-switch');
    themeSwitch.forEach(switch_ => {
        switch_.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
// Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
// Radio buttons
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', function() {
            const name = this.getAttribute('name');
            const containers = document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
                const container = radio.closest('.relative');
                const indicator = container.querySelector('.absolute');
                if (radio.checked) {
                    indicator.classList.remove('opacity-0');
                } else {
                    indicator.classList.add('opacity-0');
                }
            });
        });
    });
// Typing effect
    const typingElement = document.querySelector('.typing-effect');
    const fullText = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < fullText.length) {
            typingElement.textContent += fullText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 1000);
// Range slider
    const rangeSlider = document.querySelector('input[type="range"]');
    const sliderThumb = rangeSlider.nextElementSibling;
    rangeSlider.addEventListener('input', function() {
        const value = this.value;
        const position = (value / 100) * (this.offsetWidth - 20);
        sliderThumb.style.left = `${position + 10}px`;
    });
});