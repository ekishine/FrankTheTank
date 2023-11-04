document.addEventListener('DOMContentLoaded', (event) => {
    // Get the 'welcome-message' div and set its inner HTML to include an h1 tag with the message
    var welcomeDiv = document.getElementById('welcome-message');
    if (welcomeDiv) {
        welcomeDiv.innerHTML = '<h1>Welcome, Master Jedi! Your quest beckons...</h1>';
        // Apply the CircleType effect to the new h1 element
        new CircleType(document.querySelector('#welcome-message h1')).radius(384);
    }
});

