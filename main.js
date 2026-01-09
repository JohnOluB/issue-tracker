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


let issues = [];

function createIssueCard(issue) {
    const card = document.createElement('div');
    card.className = 'issue-card';

    card.innerHTML = `
        <h3 class="issue-title">${issue.title}</h3>
        <p class="issue-description">${issue.description}</p>
        <div class="issue-meta">
            <span class="badge badge-status ${issue.status}">${issue.status}</span>
            <span class="badge badge-priority ${issue.priority}">${issue.priority}</span>
        </div>
    `;

    return card;
}

function displayIssues() {
    const issuesList = document.querySelector("#issues-list");

    issuesList.innerHTML = '';

    if (issues.length === 0 && !newIssueSection.classList.contains('active')) {
        issuesList.innerHTML = '<p>No issues yet. Create your first issue!</p>';
        return;
    }

    for (let i = 0; i < issues.length; i++) {
        const card = createIssueCard(issues[i]);
        issuesList.appendChild(card);
    }
}