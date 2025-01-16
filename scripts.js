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

// Data for the first chart
const data1 = {
    labels: [
        '175-180 cm',
        '181-185 cm',
        '186-190 cm',
        '191-195 cm',
        '196-200 cm'
    ],
    datasets: [{
        label: 'World No. 1 Players Height Distribution (Chart 1. Male)',
        data: [7, 10, 7, 4, 1],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Data for the second chart
const data2 = {
    labels: [
        '165-170 cm',
        '171-175 cm',
        '176-180 cm',
        '181-185 cm',
        '186-190 cm'
    ],
    datasets: [{
        label: 'World No. 1 Players Height Distribution (Chart 2. Female)',
        data: [9, 5, 7, 5, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration for the first chart
const config1 = {
    type: 'bar',
    data: data1,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Configuration for the second chart
const config2 = {
    type: 'bar',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Rendering the charts
window.onload = function() {
    const ctx1 = document.getElementById('heightChart1').getContext('2d');
    new Chart(ctx1, config1);

    const ctx2 = document.getElementById('heightChart2').getContext('2d');
    new Chart(ctx2, config2);
};
