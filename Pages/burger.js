const burgerMenu = document.querySelector(".burger-menu")
const navigation = document.querySelector(".navigation")
burgerMenu.addEventListener("click", ()=>{
    burgerMenu.classList.toggle("active-burger")
    burgerMenu.classList.toggle("rotate")
    navigation.classList.toggle("active-burger")
})