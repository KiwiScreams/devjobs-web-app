const switchToggle = document.getElementById('switch-btn');
const switchTheme = () => {

    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute("data-them");
    const newTheme = (dataTheme === 'light') ? 'dark' : 'light';
    rootElem.setAttribute('data-them', newTheme);
    localStorage.setItem("Theme", newTheme);
    if (newTheme === 'light') {
        switchToggle.style.float = 'left';
    }
    else {
        switchToggle.style.float = 'right';
    }
};
document.querySelector("#switch").addEventListener("click", switchTheme);
const them = localStorage.getItem("Theme");
const rootElem = document.documentElement;
rootElem.setAttribute('data-them', them ? them : 'light');
const initialTheme = rootElem.getAttribute("data-them");
if (initialTheme === 'light') {
    switchToggle.style.float = 'left';
} else {
    switchToggle.style.float = 'right';
}