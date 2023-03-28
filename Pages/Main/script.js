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

const logo = document.querySelector(".logo")
const logo2 = logo.cloneNode(true)
console.log(logo2)

 /* ----------------------burger for main page--------------------------- */
const burgerMenu = document.querySelector(".burger-menu")
const navigation = document.querySelector(".navigation")
const blackout = document.querySelector(".burger-menu_blackout")

burgerMenu.addEventListener("click", ()=>{
    navigation.appendChild(logo2)
    logo2.classList.add("vis")
    document.body.classList.toggle("lock")
    burgerMenu.classList.toggle("active-burger")
    navigation.classList.toggle("active-burger")
    blackout.classList.toggle("blackout-active")
})

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", (e)=> {
        if (burgerMenu.classList.contains("active-burger")) {
    document.body.classList.remove("lock")
    burgerMenu.classList.remove("active-burger")
    navigation.classList.remove("active-burger")
    blackout.classList.remove("blackout-active")
        }
    })
});