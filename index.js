const inputFirstName = document.getElementById("firstName");
const inputLastName = document.getElementById("lastName");
const inputEmail = document.getElementById("email");
const radioEnquiry = document.getElementById("generalEnquiry");
const radioRequest = document.getElementById("supportRequest");
const textareaMessage = document.getElementById("message");
const checkboxConsent = document.getElementById("consent");
const divConsent = document.getElementById("divConsent");
const divRadioRequest = document.getElementById("divRadioRequest");
const form = document.querySelector("form");

const alertMessageSend = document.createElement("div");
alertMessageSend.style.backgroundColor = "hsl(187, 24%, 22%)";
alertMessageSend.style.position = "absolute";
alertMessageSend.style.top = "10px";
alertMessageSend.style.left = "10px";
alertMessageSend.style.padding = "8px";
alertMessageSend.style.borderRadius = "10px";
const title = document.createElement("h1");
title.ariaLive = "polite"
title.innerText = "Message Sent!";
title.style.color = "hsl(0, 0%, 100%)";
const p = document.createElement("p");
p.ariaLive = "polite"
p.innerText = "Thanks for completing the form. We'll be in touch soon!";
p.style.color = "hsl(0, 0%, 100%)";
alertMessageSend.appendChild(title);
alertMessageSend.appendChild(p);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleSubmit = (e) => {
  e.preventDefault();
  let firstName = inputFirstName.value;
  let lastName = inputLastName.value;
  let email = inputEmail.value;
  let message = textareaMessage.value;

  if (firstName === "") {
    const errorInput = document.createElement("p");
    errorInput.id = "firstNameError"
    errorInput.ariaLive = "polite"
    errorInput.innerText = "The field is required";
    errorInput.style.color = "red";
    inputFirstName.style.borderColor = "red";
    inputFirstName.insertAdjacentElement("afterend", errorInput);
  } else if (lastName === "") {
    const errorInput = document.createElement("p");
    errorInput.id = "lastNameError"
    errorInput.ariaLive = "polite"
    errorInput.innerText = "The field is required";
    errorInput.style.color = "red";
    inputLastName.style.borderColor = "red";
    inputLastName.insertAdjacentElement("afterend", errorInput);
  } else if (email === "" || !emailRegex.test(email)) {
    const errorInput = document.createElement("p");
    errorInput.id = "emailError"
    errorInput.ariaLive = "polite"
    errorInput.innerText = "Please enter a valid email address";
    errorInput.style.color = "red";
    inputEmail.style.borderColor = "red";
    inputEmail.insertAdjacentElement("afterend", errorInput);
  } else if (message === "") {
    const errorInput = document.createElement("p");
    errorInput.id = "messageError"
    errorInput.ariaLive = "polite"
    errorInput.innerText = "The field is required";
    errorInput.style.color = "red";
    textareaMessage.style.borderColor = "red";
    textareaMessage.insertAdjacentElement("afterend", errorInput);
  } else if (checkboxConsent.checked === false) {
    const isNotChecked = document.createElement("p");
    isNotChecked.innerText =
      "To submit this form, please consent to being contacted";
    isNotChecked.style.color = "red";
    divConsent.insertAdjacentElement("afterend", isNotChecked);
  } else if (radioEnquiry.checked === false && radioRequest.checked === false) {
    const isNotChecked = document.createElement("p");
    isNotChecked.innerText = "Please select a query type";
    isNotChecked.style.color = "red";
    divRadioRequest.insertAdjacentElement("afterend", isNotChecked);
  } else {
    form.append(alertMessageSend);
  }
};

form.onsubmit = handleSubmit;
