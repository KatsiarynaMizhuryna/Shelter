/* ----------------------navigation for pets page--------------------------- */
const menuLinks = document.querySelectorAll(".header_link[data-goto]")
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", (e)=> {
const menuLink = e.target;
if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto)
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

    window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
    });
}
e.preventDefault()
    })
});
/* ----------------------burger menu for pets page--------------------------- */
const burgerMenu = document.querySelector(".burger-menu")
const navigation = document.querySelector(".navigation")
const logoTitle = document.querySelector(".logo_h1")
const logoSubtitle = document.querySelector(".logo_p")

burgerMenu.addEventListener("click", ()=>{
    document.body.classList.toggle("lock")
    burgerMenu.classList.toggle("active-burger")
    navigation.classList.toggle("active-burger")
    logoTitle.classList.toggle("mobile-h1")
    logoSubtitle.classList.toggle("mobile-p")
})

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", (e)=> {
if (burgerMenu.classList.contains("active-burger")) {
    document.body.classList.remove("lock")
    burgerMenu.classList.remove("active-burger")
    navigation.classList.remove("active-burger")
    logoTitle.classList.remove("mobile-h1")
    logoSubtitle.classList.remove("mobile-p")
}
    })
});