const petCards = document.querySelectorAll('.card');
const arrowRight = document.querySelector('.arrow_right_button')
const arrowLeft = document.querySelector('.arrow_left_button')

function renderCards() {
    let randomCards = new Set();
    let numberOfCards = 3

    function setCardsAttr() {
        let randomCardsArr = Array.from(randomCards);
        for (let i = 0; i < petCards.length; i++) {
            petCards[i].setAttribute('id', randomCardsArr[i].name);
            petCards[i].firstElementChild.setAttribute('src', randomCardsArr[i].img)
            petCards[i].firstElementChild.setAttribute('alt', randomCardsArr[i].name)
            petCards[i].querySelector('.pets_name').textContent = randomCardsArr[i].name
        }
        // ****************************** debug
        let pets = '';
        for (let pet of petCards) {
            pets += pet.id + ',';
        }
        console.log(pets)
        // ******************************* debug
    }

    function refreshCards() {
        while (randomCards.size < 2 * numberOfCards) {
            petIndex = Math.floor(Math.random() * petsInfo.length);
            randomCards.add(petsInfo[petIndex]);
        }

        setCardsAttr();

        for (let pet of randomCards) {
            if (randomCards.size > numberOfCards) {
                randomCards.delete(pet);
            }
        }
    }
    arrowRight.addEventListener("click", refreshCards)
    arrowLeft.addEventListener("click", refreshCards)

    refreshCards();
}
renderCards();

