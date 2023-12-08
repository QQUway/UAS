// Assume you have your users data array
const users = [
    { username: "user1", password: "password1", city: "New York" },
    { username: "user2", password: "password2", city: "London" },
    { username: "Rifqi", password: "100304", city: "Izmir" },
    // Add more users if needed
  ];
  
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
    
    if (user) {
      // Successful login
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      document.getElementById("loginMessage").innerText = "Login successful!";
      setTimeout(() => {
        window.location.href = "home.html"; // Redirect to home.html
      }, 1000); // Redirect to home.html after 1 second
    } else {
      document.getElementById("loginMessage").innerText = "Invalid username or password";
    }
  });
  
  // Auto input user's city if logged in
  window.onload = function() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      document.getElementById("username").value = loggedInUser.username;
      document.getElementById("password").value = loggedInUser.password;
    }
  };
  