document.addEventListener('DOMContentLoaded', (event) => {
    // Target the 'welcome-message' div and set its inner HTML
    var welcomeDiv = document.getElementById('welcome-message');
    if (welcomeDiv) {
        // You've already set the inner HTML to include an h1 tag in the welcomeDiv
        welcomeDiv.innerHTML = '<h1>Welcome, Master Jedi! Your quest beckons...</h1>';
        
        // Now target the h1 for the CircleType.js effect
        // Since innerHTML has just been set, it is the first child of welcomeDiv
        var h1 = welcomeDiv.querySelector('h1'); // Get the h1 element

        // Apply the CircleType.js effect to the h1 element
        new CircleType(h1).radius(384); // Adjust the radius to fit your design
    }
});
