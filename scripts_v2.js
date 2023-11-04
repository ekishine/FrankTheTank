// Event listener for when the DOM content has loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Target the 'welcome-message' div and set its inner HTML
    var welcomeDiv = document.getElementById('welcome-message');
    if (welcomeDiv) {
        welcomeDiv.innerHTML = '<h1>Welcome, Master Jedi! Your quest beckons...</h1>';
        // Apply the CircleType.js effect to the 'welcome-message' h1 element
        new CircleType(welcomeDiv).radius(384); // Adjust the radius to fit your design
    }
});

