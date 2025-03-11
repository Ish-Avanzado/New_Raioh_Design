
// togglemenu
const burgir = document.querySelector(".toggle_menu");
const hNav = document.querySelector(".header_nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    hNav.classList.toggle("open");
});


// arrowup
const ulo = document.querySelector(".header");
const taas = document.querySelector(".backToTop");
window.addEventListener("scroll", () => {
    window.console.log(scrollY);
    if (window.scrollY >= 533) {
        ulo.classList.add("bg");
        taas.classList.add("up");
    } else {
        ulo.classList.remove("bg");
        taas.classList.remove("up");
    }
});


// dropdown
const tanong = document.querySelectorAll(".faq_item h4");
tanong.forEach((question) => {
    question.addEventListener("click", () => {
        question.querySelector("i").classList.toggle("open");
        question.nextElementSibling.classList.toggle("open");
    });
});



const navLink = document.querySelectorAll(".tabs_nav_link");
const navContent = document.querySelectorAll(".tabs_item");
navLink.forEach((nav) => {
    nav.addEventListener("click", () => {
        removeActiveNav();
        nav.classList.add("active");
        const activeContent = document.querySelector(`#${nav.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    });
});

function removeActiveNav() {
    navLink.forEach((nav) => {
        nav.classList.remove("active");
    });
}
function removeActiveContent() {
    navContent.forEach((content) => {
        content.classList.remove("active");
    });
}


// const abtImg = document.querySelectorAll(".about_img img")
// abtImg.forEach((imahe) => {
//     imahe.addEventListener("mouseover", () => {
//         imahe.classList.add("open");
//     });
//     imahe.addEventListener("mouseover", () => {
//         imahe.classList.remove("open");
//     });
// });