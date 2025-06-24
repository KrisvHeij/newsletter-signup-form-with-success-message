const containerEl = document.querySelector(".container");
const validationErrorText = document.getElementById("validation-error");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const successMsg = document.getElementById("success-msg");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
