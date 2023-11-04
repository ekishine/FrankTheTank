document.addEventListener('DOMContentLoaded', (event) => {
    var welcomeDiv = document.getElementById('welcome-message');
    if (welcomeDiv) {
        // Assuming the welcomeDiv already contains <h1> with the text from your HTML
        var h1 = welcomeDiv.querySelector('h1');
        if(h1){
            new CircleType(h1).radius(384); // Apply the CircleType effect to the h1 element
        }
    }
});

