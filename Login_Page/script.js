// Define user data
var userData = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  // Add more user data as needed
];

// Function to validate user credentials
function validateUser(username, password) {
  for (var i = 0; i < userData.length; i++) {
    if (userData[i].username === username && userData[i].password === password) {
      return true; // Credentials match
    }
  }
  return false; // No matching credentials found
}

// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Validate user credentials
  if (validateUser(username, password)) {
    document.getElementById("message").innerHTML = "Login successful!";
    // Redirect to another page or perform other actions here
  } else {
    document.getElementById("message").innerHTML = "Invalid username or password!";
  }
});
