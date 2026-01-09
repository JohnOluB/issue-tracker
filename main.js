const themeBtn = document.querySelector("#theme-button");
const mainContainer = document.querySelector(".main-container");


function changeTheme() {
    document.body.classList.toggle('dark-theme');
    mainContainer.classList.toggle('dark-theme');
    if (mainContainer.classList.contains('dark-theme')) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
}
themeBtn.addEventListener('click', changeTheme);