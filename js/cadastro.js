function togglePassword(fieldId, toggleIcon) {
    const field = document.getElementById(fieldId)
    const isPassword = field.type === 'password'
    field.type = isPassword ? 'text' : 'password'
    toggleIcon.querySelector('img').src = isPassword
        ? '../assets/icons/show.svg'
        : '../assets/icons/invisible.svg'
}

function validateForm() {
    const fields = {
        nome: { element: document.getElementById("nome"), message: "Nome é obrigatório." },
        sobrenome: { element: document.getElementById("sobrenome"), message: "Sobrenome é obrigatório." },
        dataNascimento: { element: document.getElementById("data-nascimento"), message: "Data de nascimento é obrigatória." },
        email: { element: document.getElementById("email"), message: "E-mail é obrigatório.", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        senha: { element: document.getElementById("senha"), message: "Senha deve ter no mínimo 8 caracteres e um caractere especial.", minLen: 8, specialChar: true },
        confirmarSenha: { element: document.getElementById("confirmar-senha"), matchField: 'senha', message: "As senhas não coincidem." }
    }
    const sexo = document.querySelector('input[name="sexo"]:checked')
    let formValid = true

    function showError({ element }, message) {
        document.getElementById(`${element.id}-error`).innerText = message
        element.classList.add("input-error")
        formValid = false
    }

    function clearError({ element }) {
        document.getElementById(`${element.id}-error`).innerText = ""
        element.classList.remove("input-error")
    }

    Object.values(fields).forEach(field => {
        const { element, message, pattern, minLen, specialChar, matchField } = field
        const value = element.value.trim()

        if (!value) showError(field, message)
        else if (pattern && !pattern.test(value)) showError(field, "Formato de e-mail inválido.")
        else if (minLen && value.length < minLen) showError(field, message)
        else if (specialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) showError(field, message)
        else if (matchField && value !== fields[matchField].element.value) showError(field, message)
        else clearError(field)
    })

    document.getElementById("sexo-error").innerText = sexo ? "" : "Selecione o sexo."
    if (!sexo) formValid = false

    if (formValid) alert("Formulário válido!")
}

function toggleButtonState() {
    const isEmpreendedor = document.getElementById("empreendedor-sim").checked
    const isNotEmpreendedor = document.getElementById("empreendedor-nao").checked

    const buttonPrincipal = document.getElementById("acao-botao")

    buttonPrincipal.textContent = isEmpreendedor ? "Continuar Cadastro" : "Cadastrar"

    if (!isEmpreendedor && !isNotEmpreendedor) {
        buttonPrincipal.disabled = true
    } else {
        buttonPrincipal.disabled = false
        buttonPrincipal.style.backgroundColor = isEmpreendedor ? "#2B468B" : "#BF4F1B"
        buttonPrincipal.style.color = "white"
    }

    buttonPrincipal.type = isEmpreendedor ? "button" : "submit";
}

function applyStyles() {
    const styleContent = `
        input.input-error, select.input-error, textarea.input-error {
            background-color: #ffdddd !important;
            border-color: red !important;
        }
        small.error-message {
            color: red;
            font-size: 0.9em;
            display: block;
            margin-top: -5px;
        }
    `;
    const styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styleContent
    document.head.appendChild(styleSheet)
}

function displayImage(event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            const imgElement = document.getElementById('imagemExibida')
            imgElement.src = e.target.result
            imgElement.style.display = 'block'
        }
        reader.readAsDataURL(file)
    }
}

function init() {
    applyStyles()
    toggleButtonState()

    document.getElementById("dados-pessoais-form").addEventListener("submit", (event) => {
        event.preventDefault()
        validateForm()
    })

    document.querySelectorAll('input[name="empreendedor"]').forEach(input =>
        input.addEventListener("change", toggleButtonState)
    )

    document.getElementById('imagemInput').addEventListener('change', displayImage)
}

init()
