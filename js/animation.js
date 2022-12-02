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
        offset: '-=500',
    })
    .add({
        targets: '.logo p, .nav a',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: (el, i) => 100 * i,
        offset: '-=700',
    })
    .add({
        targets: ''
    })
}) 