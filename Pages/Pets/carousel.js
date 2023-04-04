const doubleLeftArrow = document.querySelector(".inactive_two")
const leftArrow = document.querySelector(".inactive_one")
const doubleRightArrow = document.querySelector(".right_two")
const rightArrow = document.querySelector(".right_one")
const pageCounter = document.querySelector(".active")
const petCards = Array.from(document.querySelectorAll('.card'))
let width = window.innerWidth;

let numberOfPages= function responsiveCountPage(width) {
    if (width >= 1280) { numberOfPages = 6}
    if (1280 > width && width >= 768) { numberOfPages = 8}
    if (width < 768) { numberOfPages = 16 }
    return numberOfPages
}
let numberOfCards = function responsiveCard(width) {
    if (width >= 1280) { numberOfCards = 8}
    if (1280 > width && width >= 768) { numberOfCards = 6}
    if (width < 768) { numberOfCards = 3 }
    return numberOfCards
}

console.log(numberOfCards(width),numberOfPages(width))


function renderCards() {
    let rndIdsGrouped = []

    function setCardsAttr(pageNumber) {
        for (let i = (pageNumber - 1) * numberOfCards; i < pageNumber * numberOfCards; i++) {
            petCards[i - (pageNumber - 1) * numberOfCards].setAttribute('id', petsInfo[rndIdsGrouped[i]].name);
            petCards[i - (pageNumber - 1) * numberOfCards].firstElementChild.setAttribute('src', petsInfo[rndIdsGrouped[i]].img)
            petCards[i - (pageNumber - 1) * numberOfCards].firstElementChild.setAttribute('alt', petsInfo[rndIdsGrouped[i]].name)
            petCards[i - (pageNumber - 1) * numberOfCards].querySelector('.pets_name').textContent = petsInfo[rndIdsGrouped[i]].name
             }
    }

    function refreshCards() {
        while (rndIdsGrouped.length != 48) {
            let first = shuffleArray();
            let second = shuffleArray();
            let third = shuffleArray();
            let part1 = second.slice(0, 4);
            let part2 = second.slice(4,8);
            if(!part1.includes(first[6]) && !part1.includes(first[7]) && !part2.includes(third[0]) && !part2.includes(third[1])) {
                rndIdsGrouped = rndIdsGrouped.concat(first, second, third);
            }
        }
        return rndIdsGrouped;
    }
    function shuffleArray() {
        let arr = [];
        while (arr.length !=petsInfo.length) {
            let petIndex = Math.floor(Math.random() * (petsInfo.length))
            if (arr.indexOf(petIndex) == -1) {
                arr.push(petIndex);
            }
        }
        return arr;
    }

    refreshCards();

function createPagination (start,end) {
    start = (parseInt(pageCounter.innerText) - 1) * numberOfCards;
    end = start + numberOfCards;
    if (parseInt(pageCounter.innerText) === 1) {
        rndIdsGrouped.slice(0,numberOfCards)
    }
    else if (parseInt(pageCounter.innerText) === numberOfPages) {
        rndIdsGrouped.slice(-numberOfCards)
    }
    else {rndIdsGrouped.slice(start, end)}
}


    rightArrow.addEventListener("click", () => {
        //window.scrollTo({top:0, behavior: 'smooth'})
        pageCounter.innerText = parseInt(++pageCounter.innerText)
        leftArrow.disabled = false;
        doubleLeftArrow.disabled = false
        if (parseInt(pageCounter.innerText) === numberOfPages) {
            rightArrow.disabled = true
            doubleRightArrow.disabled = true
        }
        createPagination ()
        setCardsAttr(parseInt(pageCounter.innerText));
        })

    leftArrow.addEventListener("click", () => {
        //window.scrollTo({top:0, behavior: 'smooth'})
        pageCounter.innerText = parseInt(--pageCounter.innerText)
        rightArrow.disabled = false
        doubleRightArrow.disabled = false
        if (parseInt(pageCounter.innerText) === 1) {
            leftArrow.disabled = true
            doubleLeftArrow.disabled = true
        }
        createPagination ()
        setCardsAttr(parseInt(pageCounter.innerText));
    })


    doubleRightArrow.addEventListener("click", () => {
        //window.scrollTo({top:0, behavior: 'smooth'})
        pageCounter.innerText = parseInt(numberOfPages)
        rightArrow.disabled = true
        doubleRightArrow.disabled = true
        leftArrow.disabled = false;
        doubleLeftArrow.disabled = false
        createPagination ()
        setCardsAttr(parseInt(pageCounter.innerText))
    })

    doubleLeftArrow.addEventListener("click", () => {
        //window.scrollTo({top:0, behavior: 'smooth'})
        pageCounter.innerText = parseInt(1)
        leftArrow.disabled = true
        doubleLeftArrow.disabled = true
        rightArrow.disabled = false;
        doubleRightArrow.disabled = false
        createPagination ()
        setCardsAttr(parseInt(pageCounter.innerText))
    })
    createPagination ()
    setCardsAttr(parseInt(pageCounter.innerText))
}

renderCards();


