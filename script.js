const passwordInput1 = document.getElementById("password1");
const passwordInput2 = document.getElementById("password2");
const passwordError1 = document.getElementById("password1-error");

passwordInput1.addEventListener("input", validatePassword);
passwordInput2.addEventListener("input", validatePassword);

function validatePassword() {
    const password1 = passwordInput1.value;
    const password2 = passwordInput2.value;

    // check if the passwords are equal
    if (password1 !== password2) {
        // if they are not equal, display an error message
        passwordInput1.setCustomValidity("Passwords do not match.");
        passwordInput2.setCustomValidity("Passwords do not match.");
        passwordError1.textContent = "Passwords do not match";
    } else {
        // if they are equal, clear the error message
        passwordInput1.setCustomValidity("");
        passwordInput2.setCustomValidity("");
        passwordError1.textContent = "";
    }
}