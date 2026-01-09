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


const defaultIssues = [{
        id: 1,
        title: "Fix Navigation Bar",
        description: "The navigation bar is not responsive on mobile devices.",
        priority: "high",
        status: "open"
    },
    {
        id: 2,
        title: "Update Color Scheme",
        description: "Change the primary colors to match the new brand guidelines.",
        priority: "medium",
        status: "open"
    },
    {
        id: 3,
        title: "Add Search Functionality",
        description: "Allow users to search for issues by title.",
        priority: "low",
        status: "closed"
    }
];

// Initialize issues: Check localStorage first, otherwise use defaultIssues
let issues = JSON.parse(localStorage.getItem('issues'));
if (!issues || issues.length === 0) {
    issues = defaultIssues;
}

displayIssues();

function createIssueCard(issue) {
    const card = document.createElement('div');
    card.className = 'issue-card';

    card.innerHTML = `
        <h3 class="issue-title">${issue.title}</h3>
        <p class="issue-description">${issue.description}</p>
        <div class="issue-details">
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


issueForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const titleInput = document.querySelector("#issue-title");
    const descriptionInput = document.querySelector("#issue-description");
    const priorityInput = document.querySelector("#issue-priority");

    const newIssue = {
        id: Date.now(),
        title: titleInput.value,
        description: descriptionInput.value,
        priority: priorityInput.value,
        status: 'open'
    };

    issues.unshift(newIssue);

    localStorage.setItem('issues', JSON.stringify(issues));

    displayIssues();

    closeModal();
});

const searchBox = document.querySelector("#search-box");
const statusBox = document.querySelector("#status-box");
const priorityBox = document.querySelector("#priority-box");


function filterIssues() {

    const searchText = searchBox.value.toLowerCase();
    const selectedStatus = statusBox.value;
    const selectedPriority = priorityBox.value;


    let filteredIssues = issues;

    if (searchText !== '') {
        filteredIssues = filteredIssues.filter(function(issue) {
            const titleMatch = issue.title.toLowerCase().includes(searchText);
            const descMatch = issue.description.toLowerCase().includes(searchText);
            return titleMatch || descMatch;
        });
    }

    if (selectedStatus !== '') {
        filteredIssues = filteredIssues.filter(function(issue) {
            return issue.status === selectedStatus;
        });
    }

    if (selectedPriority !== '') {
        filteredIssues = filteredIssues.filter(function(issue) {
            return issue.priority === selectedPriority;
        });
    }

    displayFilteredIssues(filteredIssues);
}

function displayFilteredIssues(filteredIssues) {
    const issuesList = document.querySelector("#issues-list");
    issuesList.innerHTML = '';

    if (filteredIssues.length === 0) {
        issuesList.innerHTML = '<p>No matching issues found.</p>';
        return;
    }

    for (let i = 0; i < filteredIssues.length; i++) {
        const card = createIssueCard(filteredIssues[i]);
        issuesList.appendChild(card);
    }
}

searchBox.addEventListener('input', filterIssues);
statusBox.addEventListener('change', filterIssues);
priorityBox.addEventListener('change', filterIssues);

displayIssues();