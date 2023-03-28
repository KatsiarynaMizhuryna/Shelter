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


 /* ----------------------burger for main page--------------------------- */
const burgerMenu = document.querySelector(".burger-menu")
const navigation = document.querySelector(".navigation")

burgerMenu.addEventListener("click", ()=>{
    document.body.classList.toggle("lock")
    burgerMenu.classList.toggle("active-burger")
    navigation.classList.toggle("active-burger")
})

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", (e)=> {
if (burgerMenu.classList.contains("active-burger")) {
    document.body.classList.remove("lock")
    burgerMenu.classList.remove("active-burger")
    navigation.classList.remove("active-burger")
}
    })
});