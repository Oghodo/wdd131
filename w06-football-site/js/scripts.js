// === Current Year in Footer ===
document.getElementById("currentYear").textContent = new Date().getFullYear();

// === Navigation Toggle for Mobile ===
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
});

// === Drill Data ===
const drills = [
    { id: 1, name: "Dribbling Drill", description: "Improve your ball control and speed.", completed: false },
    { id: 2, name: "Passing Drill", description: "Work on short and long passing accuracy.", completed: false },
    { id: 3, name: "Shooting Drill", description: "Practice shooting accuracy and power.", completed: false },
];

// === Load Favorites from localStorage ===
let favoriteDrills = JSON.parse(localStorage.getItem("favorites")) || [];

// === Render Drill Cards Function ===
function renderDrills() {
    const drillContainer = document.getElementById("drill-cards");
    drillContainer.innerHTML = ""; // Clear before rendering

    drills.forEach(drill => {
        const isFavorite = favoriteDrills.includes(drill.id);
        const drillCard = `
            <div class="drill-card ${drill.completed ? "completed" : ""}">
                <h3>${drill.name}</h3>
                <p>${drill.description}</p>
                <button onclick="toggleComplete(${drill.id})">
                    ${drill.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
                <button onclick="toggleFavorite(${drill.id})">
                    ${isFavorite ? "Remove Favorite" : "Add Favorite"}
                </button>
            </div>
        `;
        drillContainer.innerHTML += drillCard;
    });
}

// === Toggle Completed Status Function ===
function toggleComplete(id) {
    const drill = drills.find(d => d.id === id);
    if (drill) {
        drill.completed = !drill.completed; // Conditional branching
        renderDrills();
    }
}

// === Toggle Favorite Status Function ===
function toggleFavorite(id) {
    if (favoriteDrills.includes(id)) {
        favoriteDrills = favoriteDrills.filter(favId => favId !== id);
    } else {
        favoriteDrills.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favoriteDrills));
    renderDrills();
}

// === Initialize Drill Cards on Page Load ===
document.addEventListener("DOMContentLoaded", renderDrills);

// === Feedback Form Submission ===
const feedbackForm = document.getElementById("feedbackForm");
const formMessage = document.getElementById("formMessage");

feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comments = document.getElementById("comments").value.trim();

    if (name && email && comments) {
        formMessage.textContent = `Thanks, ${name}! Your feedback has been submitted.`;
        formMessage.style.color = "green";
        feedbackForm.reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});
