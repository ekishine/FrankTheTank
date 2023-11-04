// Event listener for when the DOM content has loaded
document.addEventListener('DOMContentLoaded', function(event) {
    var welcomeMessage = document.getElementById('welcome-message').querySelector('h1'); // Target the h1 within the 'welcome-message' div
    if (welcomeMessage) {
        // Apply the CircleType.js effect to the 'welcome-message' h1 element
        var circleType = new CircleType(welcomeMessage).radius(384); // Adjust the radius to fit your design

        // Optional: Update the radius on window resize for a responsive design
        window.addEventListener('resize', function() {
            var containerWidth = document.getElementById('message-container').offsetWidth;
            // Update the circleType radius based on the container's width
            // This keeps the text curved and responsive
            circleType.radius(containerWidth / 2).dir(1); // Use .dir(1) for clockwise
        });
    }
});
