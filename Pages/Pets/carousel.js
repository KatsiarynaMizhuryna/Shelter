const doubleLeftArrow = document.querySelector(".inactive_two")
const leftArrow = document.querySelector(".inactive_one")
const doubleRightArrow = document.querySelector(".right_two")
const rightArrow = document.querySelector(".right_one")
const pageCounter = document.querySelector(".active")
const petCards = document.querySelectorAll('.card')

rightArrow.addEventListener("click", () => {
    pageCounter.innerText = parseInt(++pageCounter.innerText)
    leftArrow.disabled = false;
    if (parseInt(pageCounter.innerText) === 6) {
        rightArrow.disabled = true
    }
})

leftArrow.addEventListener("click", () => {
    pageCounter.innerText = parseInt(--pageCounter.innerText)
    rightArrow.disabled = false
    if (parseInt(pageCounter.innerText) === 1) {
        leftArrow.disabled = true
    }
 })


