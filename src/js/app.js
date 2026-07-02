/**
 * ============================================================
 * ForgeEngineer OS
 * Application Entry Point
 * Version 0.1.0
 * ============================================================
 */

const ForgeEngineer = {

    version: "0.1.0",

dashboard: {

    projects: 12,

    tasks: 5,

    reports: 48,

    forgeCore: "🟢 Online",

    tasksToday: [

        "Complete Inspection Report",

        "Review Weld Photos",

        "Update ForgeCore",

        "Push GitHub Changes"

    ]

},
createCard(title, value, footer) {

    return `
        <div class="fe-card">

            <div class="fe-card-title">
                ${title}
            </div>

            <div class="fe-card-value">
                ${value}
            </div>

            <div class="fe-card-footer">
                ${footer}
            </div>

        </div>
    `;

},
initialize() {

    console.log("ForgeEngineer OS Starting...");

    this.loadDashboard();

    this.initializeNavigation();

},
loadDashboard() {

    const dashboard = document.getElementById("dashboard-grid");

    dashboard.innerHTML = "";

    dashboard.innerHTML += this.createCard(
        "📁 Active Projects",
        this.dashboard.projects,
        "Last updated today"
    );

    dashboard.innerHTML += this.createCard(
        "✅ Tasks",
        this.dashboard.tasks,
        "Tasks remaining"
    );

    dashboard.innerHTML += this.createCard(
        "📄 Reports",
        this.dashboard.reports,
        "Reports completed"
    );

    dashboard.innerHTML += this.createCard(
        "🖥 ForgeCore",
        this.dashboard.forgeCore,
        "System online"
    );

},
initializeNavigation() {

    const navigationItems = document.querySelectorAll("#sidebar li");

    navigationItems.forEach(item => {

        item.addEventListener("click", () => {

            const moduleName = item.textContent;

            alert(`Opening ${moduleName}`);

        });

    });

}
};

document.addEventListener("DOMContentLoaded", () => {

    ForgeEngineer.initialize();

});