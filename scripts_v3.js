// Event listener for when the DOM content has loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Target the 'welcome-message' div and set its inner HTML
    var welcomeDiv = document.getElementById('welcome-message');
    if (welcomeDiv) {
        // Assuming the welcomeDiv already contains <h1>Welcome, Master Jedi! Your quest beckons...</h1>
        // We need to target the h1 for the CircleType effect
        var welcomeH1 = welcomeDiv.querySelector('h1');
        if (welcomeH1) {
            new CircleType(welcomeH1).radius(384); // Apply the effect to the h1 element
        }
    }
});

