document.addEventListener('DOMContentLoaded', () => {
    // page load animation
    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add({
        targets: '.nav',
        width: ['0px', '80%'],
    })
    .add({
        targets: '.logo',
        width: ['0px', '120px'],
    }, '-=500')
    .add({
        targets: '.logo p, .nav a',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: (el, i) => 100 * i,
    }, '-=700')
    .add({
        targets: '.hero-txt',
        translateY: [100, 0],
        opacity: [0, 1],
    }, '-=700')
    .add({
        targets: '.hero-img',
        translateY: [-100, 0],
        opacity: [0, 1],
    }, '-=1000')
    .add({
        targets: '.gallery-btn',
        height: ['0px', '40px'],
        opacity: [0, 1],
    }, '-=800')
    .add({
        targets: '.slider-con',
        height: ['0px', '80px'],
        opacity: [0, 1],
    }, '-=700')
    .add({
        targets: 'aside button span',
        translateX: ['500px', '0'],
        opacity: [0, 1],
        duration: 800,
        delay: (el, i) => 100 * i,
    }, '-=700')
    .add({
        targets: '.social-links a',
        translateY: ['-500px', '0'],
        opacity: [0, 1],
        delay: (el, i) => 200 * i,
    }, '-=1000')
    .add({
        targets: '.carousel-btns button',
        translateY: [500, 0],
        opacity: [0, 1],
        delay: (el, i) => 200 * i,
    }, '-=1000')
}) 