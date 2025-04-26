import { setCookiePresistent } from './module.js';
let registerEmail = document.getElementById("email");
let registerName = document.getElementById("name");
let registerPassword = document.getElementById("password");
let registerConfirmPassword = document.getElementById("confirm-password");
let registerForm = document.getElementsByClassName("register-form")[0]
let errorName = document.getElementById("error-Name")
let errorEmail = document.getElementById("error-email")
let errorPassword = document.getElementById("error-password")
let errorConfirmPassword = document.getElementById("confirm-password")
let errorMessage = document.getElementsByClassName("error-message")

let email;
let pass;

let regName = /^[A-Za-z\s]{3,50}$/;
let regEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z]{3,}\.[A-Za-z]{2,}$/;
let regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/

registerForm.addEventListener("submit", function (e) {
    let isValid = true;
    e.preventDefault();
    if (regName.test(registerName.value)) {
        errorMessage[0].style.display = "none"
    } else {
        errorMessage[0].style.display = "block"
        isValid = false;
    }
    if (regEmail.test(registerEmail.value)) {
        errorMessage[1].style.display = "none"
        email = registerEmail.value;
        setCookiePresistent("email",registerEmail.value)
        // localStorage.setItem("email", registerEmail.value);
    } else {
        errorMessage[1].style.display = "block"
        isValid = false;
    }
    if (regPass.test(registerPassword.value)) {
        errorMessage[2].style.display = "none";
        pass = registerPassword.value
        setCookiePresistent("pass",registerPassword.value)
        // localStorage.setItem("pass", registerPassword.value);
    } else {
        errorMessage[2].style.display = "block"
        isValid = false;
    }
    if (registerConfirmPassword.value === registerPassword.value) {
        errorMessage[3].style.display = "none"
    } else {
        errorMessage[3].style.display = "block"
        isValid = false;
    }
    if (isValid) {
        location.href = "login.html"
    }
})

