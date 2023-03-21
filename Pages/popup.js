const popupButtons = document.querySelectorAll(".Our_pets_button");
const body = document.querySelector("body");
const popup = document.querySelector(".popup");

let unlock = true;
if (popupButtons.length > 0) {
  for (let index = 0; index < popupButtons.length; index++) {
    popupButtons[index].addEventListener("click", (event) => {
      popup.classList.add("popup-open");
      createPopup2(event);
      // event.preventDefault();
    });
  }
}

function createPopup(e) {
  const petCard = e.target.closest("[id]");
  for (let i = 0; i < petsInfo.length; i++) {
    if (petsInfo[i].name == petCard.id) {
      console.log(petsInfo[i].description);
      popup.innerHTML = `
        <div class = "popup-body">
        <div class = "popup-content">
        <div class="popup-image">
            <img src="${petsInfo[i].img}" alt="">
        </div>
        <div class="popup-text">
            <h3>${petsInfo[i].name}</h3>
            <h4>${petsInfo[i].type} - ${petsInfo[i].breed}</h4>
            <h5>${petsInfo[i].description}</h5>
            <ul>
                <li><strong>Age:</strong> ${petsInfo[i].age} </li>
                <li><strong>Inoculations:</strong> ${petsInfo[i].inoculations} </li>
                <li><strong>Diseases:</strong> ${petsInfo[i].diseases} </li>
                <li><strong>Parasites:</strong> ${petsInfo[i].parasites} </li>
            </ul>
        </div>
        </div>
        <div class="popup-close-button"><button><img class = "vector" src="/Assets/Icons/Vector.png" alt=""></button></div>
        </div>
        `;
    }
    let closeButton = document.querySelector(".popup-close-button");
    closeButton.addEventListener("click", closePopup);
  }
  window.addEventListener("click", (event) => {
    if (event.target === body) {
      closePopup();
    }
  });

  //close popup
  function closePopup(event) {
    popup.classList.remove("popup-open");
    event.preventDefault();
  }
}


function createPopup2(e) {
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
        <div class="popup-close-button"><button><img class = "vector" src="/Assets/Icons/Vector.png" alt=""></button></div>
        </div>`
    ;
    const closeButton = document.querySelector(".popup-close-button");
    closeButton.addEventListener("click", () => {
        popup.classList.remove("popup-open");
    });
}