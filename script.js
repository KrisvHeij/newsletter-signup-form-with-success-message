const containerEl = document.querySelector(".container");
const validationErrorText = document.getElementById("validation-error");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const emailConfirm = document.getElementById("email-confirm");
const dismissBtn = document.getElementById("dismiss-btn");
const successMsg = document.getElementById("success-msg");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail() {
  const email = emailInput.value;
  const validEmail = regex.test(email);

  if(email === "" || !validEmail) {
    validationErrorText.classList.remove("hidden");
    validationErrorText.classList.add("show");
    emailInput.classList.add("validation-error-email");
  } else {
    showCloseMessage();
    emailInput.value = "";
    emailConfirm.textContent = email;
  }
}

function showCloseMessage() {
  containerEl.classList.toggle("hidden");
  successMsg.classList.toggle("hidden");
  successMsg.classList.toggle("show");
}

function removeErrorStates() {
  validationErrorText.classList.add("hidden");
  validationErrorText.classList.remove("show");
  emailInput.classList.remove("validation-error-email");
}

// Event Listeners

emailInput.addEventListener("focus", removeErrorStates);
submitBtn.addEventListener("click", validateEmail);
dismissBtn.addEventListener("click", showCloseMessage);