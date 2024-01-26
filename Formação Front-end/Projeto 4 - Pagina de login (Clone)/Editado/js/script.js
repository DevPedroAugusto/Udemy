const loginInput = document.querySelector("#login-input")
const passwordInput = document.querySelector("#password-input")

const loginErrorLabel = document.getElementsByClassName("error-text")[0]
const passwordErrorLabel = document.getElementsByClassName("error-text")[1]

const enterBtn = document.getElementById("enter-btn")
const showPasswordBtn = document.getElementById("show-or-hide-password")
const showPasswordIcon = document.getElementById("show-password-icon")

const loginError = document.querySelector("#login-error")
const passwordError = document.querySelector("#password-error")

let passwordIsVisible = false

// funções

function validationLogin() {
    if (loginInput.value == "") {
        loginInput.style.borderColor = "#eb3942"
        loginError.classList.remove("hide")
        loginErrorLabel.textContent = "Informe um email ou número de telefone válido."
    } else if (!loginInput.value.includes("@")) {
        loginErrorLabel.textContent = "Informe um email válido."
    } else {
        loginError.classList.add("hide")
        loginInput.style.borderColor = "#5f6060"
    }
}

function validationpassword() {
    if (passwordInput.value == "") {
        passwordInput.style.borderColor = "#eb3942"
        passwordError.classList.remove("hide")
        passwordErrorLabel.textContent = "A senha deve ter entre 4 e 60 caracteres."
        showPasswordBtn.style.display = "none"
    } else if (passwordInput.value.length < 4) {
        passwordInput.style.borderColor = "#eb3942"
        passwordError.classList.remove("hide")
        passwordErrorLabel.textContent = "A senha deve ter entre 4 e 60 caracteres."
        showPasswordBtn.style.display = ""
    } else {
        passwordError.classList.add("hide")
        passwordInput.style.borderColor = "#5f6060"
        showPasswordBtn.style.display = ""
    }
}

// eventos

loginInput.addEventListener("blur", () => {
    validationLogin()
})

loginInput.addEventListener("input", () => {
    validationLogin()
})

passwordInput.addEventListener("blur", () => {
    validationpassword()
})

passwordInput.addEventListener("input", () => {
    validationpassword()
})

showPasswordBtn.addEventListener("click", () => {
    if (!passwordIsVisible) {
        passwordInput.setAttribute("type", "text")
        passwordIsVisible = true
        showPasswordIcon.classList.remove("fa-eye")
        showPasswordIcon.classList.add("fa-eye-slash")
    } else {
        passwordInput.setAttribute("type", "password")
        passwordIsVisible = false
        showPasswordIcon.classList.remove("fa-eye-slash")
        showPasswordIcon.classList.add("fa-eye")
    }
})


enterBtn.addEventListener("click", () => {
    validationLogin()
    validationpassword()
})