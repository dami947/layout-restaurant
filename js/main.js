const nav = document.querySelector(".navbar-collapse")
document.addEventListener('click', function () {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show')
    }
})

AOS.init({

    startEvent: 'DOMContentLoaded',
    offset: 200,
    once: false,
    easing: 'linear,'

});