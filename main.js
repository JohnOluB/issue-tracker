const themeBtn = document.querySelector("#theme-button");
const mainContainer = document.querySelector(".main-container");


function changeTheme() {
    mainContainer.classList.toggle('dark-theme');
    if (mainContainer.classList.contains('dark-theme')) {
        themeBtn.textContent = "Light mode";
    } else {
        themeBtn.textContent = "Dark mode";
    }
}
themeBtn.addEventListener('click', changeTheme);