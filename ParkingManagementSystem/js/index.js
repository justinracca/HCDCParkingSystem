const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const tabName = this.getAttribute("data-tab");
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));
    this.classList.add("active");
    document.getElementById(tabName).classList.add("active");
  });
});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if(email && password) {
    alert("Login Successful!");
    window.location.href = "./dashboard.html";
  } else {
    alert("Please fill all fields");
  }
});

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if(!fullName || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }
  if(password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  alert("Account Created Successfully! Please log in.");
  document.querySelector('[data-tab="login"]').click();
  signupForm.reset();
});