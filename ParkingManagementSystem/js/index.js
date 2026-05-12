// Select all tab buttons (Login / Sign Up tabs)
const tabBtns = document.querySelectorAll(".tab-btn");

// Select all tab content sections (login form, signup form)
const tabContents = document.querySelectorAll(".tab-content");

// Loop through each tab button and add click functionality
tabBtns.forEach(btn => {
  btn.addEventListener("click", function() {

    // Get which tab is clicked using data-tab attribute
    const tabName = this.getAttribute("data-tab");

    // Remove "active" class from all tab buttons
    tabBtns.forEach(b => b.classList.remove("active"));

    // Remove "active" class from all tab contents
    tabContents.forEach(content => content.classList.remove("active"));

    // Add "active" class to the clicked button
    this.classList.add("active");

    // Show the correct tab content based on clicked tab
    document.getElementById(tabName).classList.add("active");
  });
});


// LOGIN FORM LOGIC
const loginForm = document.getElementById("loginForm");

// When login form is submitted
loginForm.addEventListener("submit", function(e) {

  // Prevent page refresh
  e.preventDefault();

  // Get user input values
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Check if both fields are filled
  if(email && password) {
    alert("Login Successful!");

    // Redirect to dashboard page after login
    window.location.href = "./dashboard.html";
  } else {
    alert("Please fill all fields");
  }
});


// SIGN UP FORM LOGIC
const signupForm = document.getElementById("signupForm");

// When signup form is submitted
signupForm.addEventListener("submit", function(e) {

  // Prevent page refresh
  e.preventDefault();

  // Get user input values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check if any field is empty
  if(!fullName || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  // Check if password and confirm password match
  if(password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Success message after account creation
  alert("Account Created Successfully! Please log in.");

  // Automatically switch back to login tab
  document.querySelector('[data-tab="login"]').click();

  // Reset signup form fields
  signupForm.reset();
});
