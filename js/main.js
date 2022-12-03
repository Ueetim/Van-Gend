// load new page content on nav links click using fetch

const collectionsLink = document.getElementById('collections-link');
const newLink = document.getElementById('new-link');
const trendingLink = document.getElementById('trending-link');
const popularLink = document.getElementById('popular-link');

let linkArray = [collectionsLink, newLink, trendingLink, popularLink];

linkArray.forEach((link) => {
    link.addEventListener('click', () => {
        switch (link) {
            case collectionsLink:
                fetchPage(link, 'collections.html');
                break;
            case newLink:
                fetchPage(link, 'new.html');
                break;
            case trendingLink:
                fetchPage(link, 'trending.html');
                break;
            case popularLink:
                fetchPage(link, 'popular.html');
                break;
        }
    })
})

function fetchPage(link, page) {
    let baseURL = `${window.location.protocol}//${window.location.hostname}`;

    if (window.location.port) {
        baseURL += `:${window.location.port}`;
    }

    fetch(`${baseURL}/${page}`)
        .then((response) => {
            return response.text()
        })
        .then((html) => {
            let doc = new DOMParser().parseFromString(html, 'text/html');

            anime({
                targets: '.hero-txt h1, .hero-txt p, .hero-txt button',
                translateX: 700,
                opacity: 0,
                easing: 'easeInExpo',
                duration: 700,
                complete: (anim) => {
                    document.querySelector('.hero-txt').remove();
                },

            })

            setTimeout(function () {
                document.querySelector('#hero').insertBefore(doc.querySelector('.hero-txt'), document.querySelector('.hero-img'));

                anime({
                    targets: '.hero-txt h1, .hero-txt p, .hero-txt button',
                    translateX: [-600, 0],
                    delay: (el, i) => 100 * i,
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                })
            }, 700);
        })
}