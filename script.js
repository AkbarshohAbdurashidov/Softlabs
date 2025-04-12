window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Footer
document.querySelectorAll('.img-container').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('span').textContent = '+';
    });
});

// Scroll when click nav bar 

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Active classni o'zgartirish
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// text Slide

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30, centeredSlides: true, pagination: {
        el: ".swiper-pagination", clickable: true,
    }, autoplay: {
        delay: 2500, disableOnInteraction: false,
    }
});

// Back To Top
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
});