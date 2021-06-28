// Changing main header from position sticky to fixed when pre-header gets scrolled
const header = document.querySelector('.nav');
const preHeader = document.querySelector('.pre-header');
const mediaQueryL = window.matchMedia('(min-width: 1024px)');
const mediaQueryMaxL = window.matchMedia('(max-width: 1024px)');
const footerBottom = document.querySelector('.footer__bottom');
const allSpans = footerBottom.querySelectorAll('span');

if(mediaQueryL.matches) {
    document.addEventListener('scroll', checkScroll);
    function checkScroll() {
        let scroll = Math.round(window.scrollY);
        if(scroll >= 90) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }  
}
// Hiding pipe symbols in between elements, on smaller screens
if(mediaQueryMaxL.matches) {
    allSpans.forEach(span => span.classList.add('hidden'));
}
