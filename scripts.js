// scripts.js

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
