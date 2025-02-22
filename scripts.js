document.addEventListener("DOMContentLoaded", function () {
    // Animacja elementów galerii
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
        threshold: 0.5 // Element musi być widoczny w 50%
    });

    items.forEach(item => {
        observer.observe(item);
    });

    // Zmniejszanie nagłówka podczas przewijania
    document.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (header) {
            header.classList.toggle("shrink", window.scrollY > 50);
        }
    });

    // Przełączanie menu mobilnego
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("open");
            mobileMenu.classList.toggle("active");
        });
    }


    // Dane dotyczące rozkładu wzrostu mężczyzn
    const menData = {
        labels: ['175-180 cm', '181-185 cm', '186-190 cm', '191-195 cm', '196-200 cm'],
        datasets: [{
            label: "No. 1 Height Distribution ATP",
            data: [7, 10, 7, 4, 1],
            backgroundColor: [
                'rgba(0, 51, 102, 0.5)',
                'rgba(0, 76, 153, 0.5)',
                'rgba(0, 102, 204, 0.5)',
                'rgba(25, 25, 112, 0.5)',
                'rgba(0, 0, 139, 0.5)'
            ],
            borderColor: [
                'rgba(0, 51, 102, 1)',
                'rgba(0, 76, 153, 1)',
                'rgba(0, 102, 204, 1)',
                'rgba(25, 25, 112, 1)',
                'rgba(0, 0, 139, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Dane dotyczące rozkładu wzrostu kobiet
    const womenData = {
        labels: ['165-170 cm', '171-175 cm', '176-180 cm', '181-185 cm', '186-190 cm'],
        datasets: [{
            label: "No. 1 Height Distribution WTA",
            data: [9, 5, 7, 5, 3],
            backgroundColor: [
                'rgba(34, 139, 34, 0.5)',  
                'rgba(0, 100, 0, 0.5)',    
                'rgba(46, 139, 87, 0.5)',  
                'rgba(0, 128, 0, 0.5)',    
                'rgba(85, 107, 47, 0.5)'   
            ],
            borderColor: [
                'rgba(34, 139, 34, 1)',   
                'rgba(0, 100, 0, 1)',     
                'rgba(46, 139, 87, 1)',   
                'rgba(0, 128, 0, 1)',      
                'rgba(85, 107, 47, 1)'    
            ],

            borderWidth: 1
        }]
    };

    // Konfiguracja wykresu dla mężczyzn
    const menConfig = {
        type: 'bar',
        data: menData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Players'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Height Range (cm)'
                    }
                }
            }
        }
    };

    // Konfiguracja wykresu dla kobiet
    const womenConfig = {
        type: 'bar',
        data: womenData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Players'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Height Range (cm)'
                    }
                }
            }
        }
    };

    // Renderowanie wykresów
    window.onload = function () {
        const canvaM = document.getElementById('menHeightChart');

        if (canvaM) {
            const menCtx = canvaM.getContext('2d');
            new Chart(menCtx, menConfig);
        }

        const canvaW = document.getElementById('womenHeightChart');

        if (canvaW) {
            const womenCtx = canvaW.getContext('2d');
            new Chart(womenCtx, womenConfig);
        }
    };

});