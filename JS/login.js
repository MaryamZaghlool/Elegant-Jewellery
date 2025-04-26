import { getCookie } from './module.js';

let loginForm = document.getElementsByClassName("login-form")[0];
let loginEmail = document.getElementById("email-log");
let loginPassword = document.getElementById("password-log");
let index;
let storedEmail = getCookie("email");
let storedPass = getCookie("pass");
let errorMessage = document.getElementsByClassName("error-message")

loginForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let isValid = true;
    if (storedEmail === loginEmail.value) {
        errorMessage[0].style.display = "none";
    }
    else {
        errorMessage[0].style.display = "block";
        isValid = false
    }
    if (storedPass === loginPassword.value) {
        errorMessage[1].style.display = "none";
    }
    else {
        errorMessage[1].style.display = "block";
        isValid = false
    }
    if (isValid) {
        document.cookie = "productSelected=" + JSON.stringify([]);
        document.cookie = "productsCount= 0"
        document.cookie = "quantity= 1"
        location.href = "home.html"
    }
})