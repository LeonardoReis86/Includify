

document.addEventListener('DOMContentLoaded', () => {
    const aumentarFonte = document.getElementById('aumentar-fonte')
    const diminuirFonte = document.getElementById('diminuir-fonte')
    const normalizarFonte = document.getElementById('normalizar-fonte')
    const contraste = document.getElementById('contraste')

    let fontSize = 1

    aumentarFonte.addEventListener('click', function () {
        if (fontSize <= 1.4) {
            fontSize += 0.1
            document.body.style.fontSize = fontSize + 'em'
        }
    })

    diminuirFonte.addEventListener('click', function () {
        if (fontSize > 0.8) {
            fontSize -= 0.1
            document.body.style.fontSize = fontSize + 'em'
        }
    })

    normalizarFonte.addEventListener('click', function () {
        fontSize = 1
        document.body.style.fontSize = '1em'
    })

    contraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })
})

document.getElementById('vlibras-button').addEventListener('click', function () {
    const vlibrasWidget = document.querySelector('[vw-access-button]');
    if (vlibrasWidget) {
        vlibrasWidget.click();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === '1') {
        document.getElementById('header').focus();
    } else if (event.key === '2') {
        document.getElementById('content').focus();
    } else if (event.key === '3') {
        document.getElementById('footer').focus();
    }
});