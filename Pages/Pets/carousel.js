const doubleLeftArrow = document.querySelector(".inactive_two")
const leftArrow = document.querySelector(".inactive_one")
const doubleRightArrow = document.querySelector(".right_two")
const rightArrow = document.querySelector(".right_one")
const pageCounter = document.querySelector(".active")
const petCards = document.querySelectorAll('.card')


function renderCards() {
    let numberOfCards = 8
    let numberOfPages = 6
    let rndIdsGrouped = []

    function setCardsAttr(pageNumber) {
        for (let i = (pageNumber - 1) * numberOfCards; i < pageNumber * numberOfCards; i++) {
            petCards[i - (pageNumber - 1) * numberOfCards].setAttribute('id', petsInfo[rndIdsGrouped[i]].name);
            petCards[i - (pageNumber - 1) * numberOfCards].firstElementChild.setAttribute('src', petsInfo[rndIdsGrouped[i]].img)
            petCards[i - (pageNumber - 1) * numberOfCards].firstElementChild.setAttribute('alt', petsInfo[rndIdsGrouped[i]].name)
            petCards[i - (pageNumber - 1) * numberOfCards].querySelector('.pets_name').textContent = petsInfo[rndIdsGrouped[i]].name
        }

        // ****************************** debug
        let pets = '';
        for (let pet of petCards) {
            pets += pet.id + ',';
        }
        console.log(pets)
        console.log(rndIdsGrouped); // debug
        // ******************************* debug
    }

    function refreshCards() {
        randomIds = new Set();
        while (rndIdsGrouped.length < numberOfCards * numberOfPages) {
            petIndex = Math.floor(Math.random() * petsInfo.length);
            randomIds.add(petIndex); // TODO: store index number instead of card for main page
            if (randomIds.size % numberOfCards === 0) {
                rndIdsGrouped.push(...randomIds);
                randomIds = new Set();
            }
        }
    }

    refreshCards();
    console.log(rndIdsGrouped)

    rightArrow.addEventListener("click", () => {
        pageCounter.innerText = parseInt(++pageCounter.innerText)
        leftArrow.disabled = false;
        doubleLeftArrow.disabled = false
        if (parseInt(pageCounter.innerText) === 6) {
            rightArrow.disabled = true
            doubleRightArrow.disabled = true
        }
        setCardsAttr(parseInt(pageCounter.innerText));
    })

    leftArrow.addEventListener("click", () => {
        pageCounter.innerText = parseInt(--pageCounter.innerText)
        rightArrow.disabled = false
        doubleRightArrow.disabled = false
        if (parseInt(pageCounter.innerText) === 1) {
            leftArrow.disabled = true
            doubleLeftArrow.disabled = true
        }
        setCardsAttr(parseInt(pageCounter.innerText));
    })

    setCardsAttr(parseInt(pageCounter.innerText));
}

renderCards();

/*rightArrow.addEventListener("click", () => {
    pageCounter.innerText = parseInt(++pageCounter.innerText)
    leftArrow.disabled = false;
    doubleLeftArrow.disabled = false
    if (parseInt(pageCounter.innerText) === 6) {
        rightArrow.disabled = true
        doubleRightArrow.disabled = true
    }
    renderCards();
})

leftArrow.addEventListener("click", () => {
    pageCounter.innerText = parseInt(--pageCounter.innerText)
    rightArrow.disabled = false
    doubleRightArrow.disabled = false
    if (parseInt(pageCounter.innerText) === 1) {
        leftArrow.disabled = true
        doubleLeftArrow.disabled = true
    }
    renderCards();
})*/


doubleRightArrow.addEventListener("click", () => {
    console.log(parseInt(pageCounter.innerText))
    pageCounter.innerText = parseInt(6)
    rightArrow.disabled = true
    doubleRightArrow.disabled = true
    leftArrow.disabled = false;
    doubleLeftArrow.disabled = false

})

doubleLeftArrow.addEventListener("click", () => {
    pageCounter.innerText = parseInt(1)
    leftArrow.disabled = true
    doubleLeftArrow.disabled = true
    rightArrow.disabled = false;
    doubleRightArrow.disabled = false
})

function responsiveCount(width, numberOfPages, cardsOnPage) {
    if (width >= 1280) { numberOfPages = 6; cardsOnPage = 8 }
    if (1280 > width >= 768) { numberOfPages = 8; cardsOnPage = 6 }
    if (width < 768) { numberOfPages = 16; cardsOnPage = 3 }
    return [numberOfPages, cardsOnPage];
}

/*const newPetsInfo = []
 while (newPetsInfo.length != 48)
{
for (let i = 0; i < petsInfo.length; i++) {
    newPetsInfo.push(petsInfo[i])
}
}
console.log(newPetsInfo)*/