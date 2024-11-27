document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.5 // Элемент должен быть на 50% в видимой области
    });

    items.forEach(item => {
        observer.observe(item);
    });
});

// Ваш существующий код

// Shrinking header on scroll
document.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    header.classList.toggle("shrink", window.scrollY > 50);
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("open");
        mobileMenu.classList.toggle("active");
    });
});
