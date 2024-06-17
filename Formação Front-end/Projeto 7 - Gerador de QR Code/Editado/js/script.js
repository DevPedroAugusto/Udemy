const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

// Função

function gareneratorQrCode() {
    const qrCodeInputValue = qrCodeInput.value

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando codigo..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeBtn.innerText = "Codigo gerado!"
        setTimeout(() => {
            qrCodeBtn.innerText = "Gerar outro QR Code"
        }, 2000);
    })
}

// Eventos
qrCodeBtn.addEventListener("click", () => {
    gareneratorQrCode()
})

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        gareneratorQrCode()
    }
})

qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})