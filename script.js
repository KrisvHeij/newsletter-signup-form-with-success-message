const containerEl = document.querySelector(".container");
const validationErrorText = document.getElementById("validation-error");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const successMsg = document.getElementById("success-msg");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail() {
  const email = emailInput.value;
  const validEmail = regex.test(email);

  if(email === "" || !validEmail) {
    console.log("please provide a valid email");
  }
  
}


submitBtn.addEventListener("click", checkEmail);