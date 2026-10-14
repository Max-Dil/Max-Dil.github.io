window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
            });
        });
    }

    const accordions = document.querySelectorAll('.accordion-btn');
    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (!panel) return;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    const API_URL = 'http://177.3.216.236:5000/api/lead';

    const leadForm = document.getElementById('leadForm');
    const tsField = document.getElementById('formTs');

    function stampForm() {
        if (tsField) tsField.value = Date.now();
    }
    stampForm();

    if (leadForm) {
        leadForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const v = (id) => {
                const el = document.getElementById(id);
                return el ? el.value.trim() : '';
            };

            const payload = {
                name:    v('name'),
                phone:   v('phone'),
                time:    v('time'),
                message: v('message'),
                website: v('website'),
                ts:      Number(v('formTs')) || Date.now(),
            };

            const submitBtn = leadForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Отправка...';
            }

            try {
                const resp = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });

                const data = await resp.json().catch(() => ({}));
                console.log('Lead response:', resp.status, data);

                if (resp.ok && data.ok) {
                    alert('Спасибо! Заявка отправлена, мы свяжемся с вами.');
                    leadForm.reset();
                    stampForm();
                } else {
                    alert('Не удалось отправить. Детали: ' + (data.error || resp.status));
                }
            } catch (err) {
                console.error('Network error:', err);
                alert('Ошибка сети. Попробуйте позже.');
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }
            }
        });
    }

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
            const cardWidth = cards[0].offsetWidth + 15;
            const activeIdx = Math.round(scrollPos / cardWidth);
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === activeIdx);
            });
        });
    }
});