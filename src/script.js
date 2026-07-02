// ======================================
// ForgeEngineer OS
// Genesis 3.0
// Main Application Script
// ======================================

console.log("🔥 ForgeEngineer OS Started");

// ===========================
// Live Clock & Date
// ===========================

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const date = now.toLocaleDateString([], {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;

}

updateClock();

setInterval(updateClock, 1000);

// ===========================
// Sidebar Toggle
// ===========================

const menuButton = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuButton.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

});

// ===========================
// Active Navigation
// ===========================

const navButtons = document.querySelectorAll(".nav");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        navButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

    });

});

console.log("✅ ForgeEngineer Ready");