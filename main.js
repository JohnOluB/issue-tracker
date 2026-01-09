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


const createIssueBtn = document.querySelector("#createIssue-button");
const newIssueSection = document.querySelector(".new-issue");
const cancelBtn = document.querySelector("#cancel-button");
const issueForm = document.querySelector("#issue-form");

function openModal() {
    newIssueSection.classList.add('active');
}

function closeModal() {
    newIssueSection.classList.remove('active');
    issueForm.reset();
}


createIssueBtn.addEventListener('click', openModal);

cancelBtn.addEventListener('click', closeModal);