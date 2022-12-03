// responsiveness navbar mobile
const navBtn = document.querySelector("aside button");
const navList = document.querySelector("aside .nav");
const navLink = document.querySelectorAll('aside .nav a')
// console.log(navBtn)

let open = false;

navBtn.addEventListener("click", () => {
  if (!open) {
    navList.style.width = "200px";
    navList.style.visibility = "visible";
    navList.style.transition = ".3s ease-in";
    open = true;

    anime({
      targets: "aside .nav a",
      translateX: [600, 0],
      delay: (el, i) => 50 * i,
      opacity: [0, 1],
      easing: "easeOutExpo",
    });

  } else {
    navList.style.width = "0";
    navList.style.visibility = "hidden";
    navList.style.transition = ".3s ease-in";
    open = false;
  }
});

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        navList.style.width = "0";
        navList.style.visibility = "hidden";
        navList.style.transition = ".3s ease-in";
        open = false;
    })
})

// load new page content on nav links click using fetch

const collectionsLink = document.querySelectorAll(".collections-link");
const newLink = document.querySelectorAll(".new-link");
const trendingLink = document.querySelectorAll(".trending-link");
const popularLink = document.querySelectorAll(".popular-link");

let linkArray = [collectionsLink, newLink, trendingLink, popularLink];

linkArray.forEach((linkItem) => {
  linkItem.forEach((link) => {
    link.addEventListener("click", () => {
        switch (linkItem) {
          case collectionsLink:
            fetchPage(link, "collections.html");
            break;
          case newLink:
            fetchPage(link, "new.html");
            break;
          case trendingLink:
            fetchPage(link, "trending.html");
            break;
          case popularLink:
            fetchPage(link, "popular.html");
            break;
        }
    });
  })
});

function fetchPage(link, page) {
  // let baseURL = `${window.location.protocol}//${window.location.hostname}`;

  let baseURL = window.location.href;
  if (window.location.port) {
    baseURL += `:${window.location.port}`;
  }

  baseURL = baseURL.replace(window.location.pathname, `/${page}`)
  // fetch(`${baseURL}/${page}`)
  fetch(baseURL)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      let doc = new DOMParser().parseFromString(html, "text/html");

      anime({
        targets: ".hero-txt h1, .hero-txt p, .hero-txt button",
        translateX: 700,
        opacity: 0,
        easing: "easeInExpo",
        duration: 700,
        complete: (anim) => {
          document.querySelector(".hero-txt").remove();
        },
      });

      setTimeout(function () {
        document
          .querySelector("#hero")
          .insertBefore(
            doc.querySelector(".hero-txt"),
            document.querySelector(".hero-img")
          );

        anime({
          targets: ".hero-txt h1, .hero-txt p, .hero-txt button",
          translateX: [-600, 0],
          delay: (el, i) => 100 * i,
          opacity: [0, 1],
          easing: "easeOutExpo",
        });
      }, 700);
    });
}

console.log(window.location.pathname)