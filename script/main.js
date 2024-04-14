// Slider
const buttonSlider = document.querySelectorAll('.w-slider-dot');
const navLink = document.querySelectorAll('.nav-link');
const slide = document.querySelectorAll('.w-slide');
buttonSlider.forEach((button, index) => {
    button.addEventListener('click', function (e) {
        // Toggle active class for all buttons
        buttonSlider.forEach((button) =>
            button.classList.toggle('w-active', button === e.target)
        );

        // Handle slider translations based on index (assuming correct logic)
        switch (index) {
            case 0:
                slide.forEach((s) => (s.style.transform = 'translateX(0px)'));
                break;
            case 1:
                slide.forEach(
                    (s) => (s.style.transform = 'translateX(-1242px)')
                );
                break;
            case 2:
                slide.forEach(
                    (s) => (s.style.transform = 'translateX(-2484px)')
                );
                break;
            default:
                // No transform for other cases (or handle as needed)
                break;
        }
    });
});

navLink.forEach((button) => {
    button.addEventListener('click', function (e) {
        navLink.forEach((navItem) =>
            navItem.classList.toggle('w--current', navItem === e.target)
        );
    });
});
