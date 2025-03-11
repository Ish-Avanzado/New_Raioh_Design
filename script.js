const burgir = document.querySelector(".toggle_menu");
const hNav = document.querySelector(".header_nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    hNav.classList.toggle("open");
});

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


// const abtImg = document.querySelectorAll(".about_img img")
// abtImg.forEach((imahe) => {
//     imahe.addEventListener("mouseover", () => {
//         imahe.classList.add("open");
//     });
//     imahe.addEventListener("mouseover", () => {
//         imahe.classList.remove("open");
//     });
// });