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


// Create an empty array to store all issues
let issues = [];


// ========================================
// 4. CREATE AND DISPLAY ISSUE CARDS
// ========================================                                 

// Function to create HTML for one issue card
function createIssueCard(issue) {
    // Create a new div element
    const card = document.createElement('div');
    card.className = 'issue-card';

    // Build the HTML content for the card
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

// Function to display all issues on the page
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