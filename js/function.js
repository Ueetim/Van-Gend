document.addEventListener('DOMContentLoaded', () => {
    let navLinks = document.querySelectorAll('.nav a, .social-links a');

    // navlinks hover
    navLinks.forEach((navLink) => {
        navLink.addEventListener('mouseenter', () => {
            let letter = navLink.querySelectorAll('.letter');

            anime.timeline({
                targets: letter,
            })
            .add({
                translateX: [0, -30],
                opacity: [1, 0],
                easing: 'easeInExpo',
                duration: 500,
                delay: (el, i) => 30 * i,
            })
            .add({
                translateX: [40, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1100,
                delay: (el, i) => 30 * i,
            })
        })

        // gallery navigation hover
        let galleryLinks = document.querySelectorAll('.carousel-btns button');

        galleryLinks.forEach((galleryLink) => {
            galleryLink.addEventListener('mouseenter', () => {
                anime.remove(galleryLink);
                anime({
                    targets: galleryLink,
                    scale: 1.1,
                    translateX: -4,
                    translateY: -4,
                    easing: 'easeOutExpo',
                })
            })

            galleryLink.addEventListener('mouseleave', () => {
                anime.remove(galleryLink);
                anime({
                    targets: galleryLink,
                    scale: 1,
                    translateX: 0,
                    translateY: 0,
                    easing: 'easeOutExpo',
                })
            })
        })
    })
})