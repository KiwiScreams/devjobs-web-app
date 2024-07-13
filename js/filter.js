document.getElementById("search-btn").addEventListener("click", () => {
    const searchInput = document.getElementById("search-input").value.trim().toUpperCase();
    const locationInput = document.getElementById("location-input").value.trim().toUpperCase();
    const fullTime = document.getElementById('full-time').checked;
    const elements = document.querySelectorAll(".position");
    const company = document.querySelectorAll(".company");
    const location = document.querySelectorAll(".location");
    const cards = document.querySelectorAll(".item");
    let fullTimeText = document.querySelectorAll(".full-time");

    cards.forEach((card, index) => {
        let showCard = true;
        if (searchInput && !elements[index].innerText.toUpperCase().includes(searchInput) && !company[index].innerText.toUpperCase().includes(searchInput)) {
            showCard = false;
        }
        if (locationInput && !location[index].innerText.toUpperCase().includes(locationInput)) {
            showCard = false;
        }
        if (fullTime) {
            if (!fullTimeText[index].innerText.toUpperCase().includes("FULL TIME")) {
              showCard = false;
            }
          } else {
            if (card.classList.contains("full-time")) {
              showCard = false;
            }
          }
        if (showCard) {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
});