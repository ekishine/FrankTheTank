// Function to display a welcome message using alert
function showWelcomeMessage() {
  alert("Welcome, Master Jedi! Your quest beckons.");
}

// Event listener for when the DOM content has loaded
document.addEventListener('DOMContentLoaded', (event) => {
  // This will run when the page is fully loaded, including images
  showWelcomeMessage(); // Show the popup alert message

  // If you have a div with an id of 'welcome-message' in your HTML,
  // this code will insert text into that div.
  var welcomeDiv = document.getElementById('welcome-message');
  if(welcomeDiv){
    welcomeDiv.innerHTML = '<h1>Welcome, Master Jedi! Your quest beckons...</h1>';
  }
});
