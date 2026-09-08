
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    const accordions = document.querySelectorAll('.accordion-btn');

    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    const leadForm = document.getElementById('leadForm');
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка успешно отправлена. Менеджер свяжется с вами в указанное время.');
        leadForm.reset();
    });

    const grid3 = document.querySelector('.grid-3');
    const cards = grid3 ? grid3.querySelectorAll('.card') : [];
    const sliderDotsContainer = document.getElementById('sliderDots');

    if (grid3 && cards.length > 0 && sliderDotsContainer) {
        cards.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = 'slider-dot' + (idx === 0 ? ' active' : '');
            sliderDotsContainer.appendChild(dot);
        });

        const dots = sliderDotsContainer.querySelectorAll('.slider-dot');
        grid3.addEventListener('scroll', () => {
            const scrollPos = grid3.scrollLeft;
            const cardWidth = cards[0].offsetWidth + 15; // учет gap
            const activeIdx = Math.round(scrollPos / cardWidth);
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === activeIdx);
            });
        });
    }
});