// window.addEventListener('load', () => {
//     const preloader = document.getElementById('preloader');
//     if (preloader) {
//         preloader.style.opacity = '0';
//         setTimeout(() => {
//             preloader.style.display = 'none';
//         }, 500);
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const mobileMenuBtn = document.getElementById('mobileMenuBtn');
//     const mobileNav = document.getElementById('mobileNav');
//     const mobileLinks = document.querySelectorAll('.mobile-link');

//     if (mobileMenuBtn && mobileNav) {
//         mobileMenuBtn.addEventListener('click', () => {
//             mobileNav.classList.toggle('active');
//         });

//         mobileLinks.forEach(link => {
//             link.addEventListener('click', () => {
//                 mobileNav.classList.remove('active');
//             });
//         });
//     }

//     const article = document.getElementById('privacyArticle');
//     const tocList = document.getElementById('privacyTocList');
//     const tocBlock = document.getElementById('privacyToc');

//     if (article && tocList) {
//         const sections = article.querySelectorAll('.policy-section');

//         sections.forEach(section => {
//             const heading = section.querySelector('h2');
//             if (!heading) return;

//             const li = document.createElement('li');
//             const a = document.createElement('a');
//             a.href = '#' + section.id;
//             a.textContent = heading.textContent;
//             li.appendChild(a);
//             tocList.appendChild(li);
//         });

//         const tocLinks = tocList.querySelectorAll('a');

//         const setActive = (id) => {
//             tocLinks.forEach(link => {
//                 link.classList.toggle('active', link.getAttribute('href') === '#' + id);
//             });
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     setActive(entry.target.id);
//                 }
//             });
//         }, {
//             rootMargin: '-90px 0px -70% 0px',
//             threshold: 0
//         });

//         sections.forEach(section => observer.observe(section));

//         tocLinks.forEach(link => {
//             link.addEventListener('click', (e) => {
//                 const target = document.querySelector(link.getAttribute('href'));
//                 if (target) {
//                     e.preventDefault();
//                     const yOffset = -90;
//                     const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
//                     window.scrollTo({ top: y, behavior: 'smooth' });
//                 }
//                 if (tocBlock) tocBlock.classList.remove('open');
//             });
//         });

//         if (tocBlock) {
//             const title = tocBlock.querySelector('.privacy-toc-title');
//             if (title) {
//                 title.addEventListener('click', () => {
//                     tocBlock.classList.toggle('open');
//                 });
//             }
//         }
//     }
// });