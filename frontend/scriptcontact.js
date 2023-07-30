const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Add an event listener to the form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form fields
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Perform any client-side validation if needed

  // Create a user object to send to the server
  const user = {
    name: username,
    email: email,
    phone: phone,
    message:message,
  };

  // Call a function to handle sending the user data to the server for registration
  registerUser(user);
});

// Function to handle user registration on the server
function registerUser(user) {
  // Here, you can use JavaScript fetch or any AJAX method to send the user data to the server
  // For simplicity, let's assume we are using fetch to make a POST request to the server
  fetch("http://localhost:3000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(data => {
    // Handle the response from the server (success or error)
    if (data.status == 200) {
      alert("Registration successful!");
      console.log("welcome to festival")
      // Optionally, redirect to another page after successful registration
      // window.location.href = "/Contact us.html";
    } else {
      alert("Registration failed. Please try again later.");
    }
  })
  .catch(error => {
    console.error("Error registering user:", error);
    alert("An error occurred. Please try again later.");
  });
}
