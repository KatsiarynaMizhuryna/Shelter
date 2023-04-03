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
const blackout = document.querySelector(".burger-menu_blackout")
const logo = document.querySelector(".logo")
const logo2 = logo.cloneNode(true)
const logoTitle = logo2.querySelector("h1")
const logoSubtitle = logo2.querySelector("p")

burgerMenu.addEventListener("click", ()=>{
    navigation.appendChild(logo2)
    logo2.classList.toggle("visible")
    document.body.classList.toggle("lock")
    burgerMenu.classList.toggle("active-burger")
    navigation.classList.toggle("active-burger")
    logoTitle.classList.toggle("mobile-h1")
    logoSubtitle.classList.toggle("mobile-p")
    blackout.classList.toggle("blackout-active")
    if (!burgerMenu.classList.contains("active-burger")) {
        navigation.removeChild(logo2)
    }
})

blackout.addEventListener("click", () => {
    if (blackout.classList.contains("blackout-active")) {
        document.body.classList.remove("lock")
        burgerMenu.classList.remove("active-burger")
        navigation.classList.remove("active-burger")
        blackout.classList.remove("blackout-active")
        navigation.removeChild(logo2)
    }
    })


menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", ( )=> {
if (burgerMenu.classList.contains("active-burger")) {
    document.body.classList.remove("lock")
    burgerMenu.classList.remove("active-burger")
    navigation.classList.remove("active-burger")
    logoTitle.classList.remove("mobile-h1")
    logoSubtitle.classList.remove("mobile-p")
    blackout.classList.remove("blackout-active")
    logo2.classList.remove("visible")
    navigation.removeChild(logo2)
}
    })
});
