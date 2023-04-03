const popupButtons = document.querySelectorAll(".Our_pets_button");
const body = document.querySelector("body");
const popup = document.querySelector(".popup");

if (popupButtons.length > 0) {
    for (let index = 0; index < popupButtons.length; index++) {
        popupButtons[index].addEventListener("click", (event) => {
            popup.classList.add("popup-open");
            createPopup(event);
        });
    }
}

function createPopup(e) {
    const petCard = e.target.closest("[id]");
    const petInfo = petsInfo.find(item => item.name === petCard.id);
    popup.innerHTML = `
        <div class = "popup-body">
        <div class = "popup-content">
        <div class="popup-image">
            <img src="${petInfo.img}" alt="">
        </div>
        <div class="popup-text">
            <h3>${petInfo.name}</h3>
            <h4>${petInfo.type} - ${petInfo.breed}</h4>
            <h5>${petInfo.description}</h5>
            <ul>
                <li><strong>Age:</strong> ${petInfo.age} </li>
                <li><strong>Inoculations:</strong> ${petInfo.inoculations} </li>
                <li><strong>Diseases:</strong> ${petInfo.diseases} </li>
                <li><strong>Parasites:</strong> ${petInfo.parasites} </li>
            </ul>
        </div>
        </div>
        <div class="popup-btn"><button class="popup-close-button"><span class = "vector">&times</span></button></div>
        </div>`
    ;
    paddingOffset = window.innerWidth - body.offsetWidth + "px";
        body.style.paddingRight = paddingOffset
        body.classList.add("lock")
        // console.log(paddingOffset)

    const closeButton = document.querySelector(".popup-close-button");
    closeButton.addEventListener("click", () => {
        popup.classList.remove("popup-open");
        body.classList.remove("lock")
    });

    popup.addEventListener("click", (event)=>{
        if (!event.target.closest(".popup-body")) {
            popup.classList.remove("popup-open")
            body.classList.remove("lock")
        }
    })
}