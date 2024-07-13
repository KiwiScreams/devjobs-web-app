let items = null;
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        items = data;
        addToHtml();
    })
let list = document.getElementById('item-container');
function addToHtml() {
    items.forEach(item => {
        let newItem = document.createElement('a');
        newItem.href = '/detail.html?id=' + item.id;
        newItem.classList.add('item');
        newItem.innerHTML = `
                <div class="item-image" style="background-color: ${item.logoBackground};">
                    <img src="${item.logo}" class="img">
                </div>
                <span>${item.postedAt}</span> · <span class="full-time">${item.contract}</span>
                <h3 class="position">${item.position}</h3>
                <span class="company">${item.company}</span>
                <p class="location">${item.location}</p>`
        list.appendChild(newItem);
    });
}
let currentPage = 0;
let loadBtn = document.getElementById("load-btn");
loadBtn.addEventListener("click", () => {
    currentPage++;
    addToHtml();
});