const burgerMenu = document.querySelector(".burger-menu")
const navigation = document.querySelector(".navigation")
const logoTitle = document.getElementById("logo_h1")
const logoSubtitle = document.getElementById("logo_p")

burgerMenu.addEventListener("click", ()=>{
    burgerMenu.classList.toggle("active-burger")
    burgerMenu.classList.toggle("rotate")
    navigation.classList.toggle("active-burger")
    logoTitle.classList.toggle("mobile-h1")
    logoSubtitle.classList.toggle("mobile-p")
})