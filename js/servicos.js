function filtros() {
    const mostrarFiltroBtn = document.getElementById("mostrar-filtro-btn");
    const secaoFiltrosBackground = document.querySelector(".secao-filtros-background");
    const headerCategorias = document.querySelectorAll(".header-categoria");
    const overlay = document.querySelector(".overlay");
    const closeIcon = document.querySelector(".close-icon");

    mostrarFiltroBtn.addEventListener("click", function () {
        secaoFiltrosBackground.classList.toggle("mostrar");
        overlay.classList.toggle("mostrar");
        document.body.classList.toggle("no-scroll");
    });

    overlay.addEventListener("click", function () {
        esconderFiltros();
    });

    closeIcon.addEventListener("click", function () {
        esconderFiltros();
    });

    function esconderFiltros() {
        secaoFiltrosBackground.classList.remove("mostrar");
        overlay.classList.remove("mostrar");
        document.body.classList.remove("no-scroll");
    }

    headerCategorias.forEach(header => {
        header.addEventListener("click", function () {
            const conteudo = this.nextElementSibling;
            const isExpanded = this.getAttribute("aria-expanded") === "true";

            conteudo.style.display = isExpanded ? "none" : "block";

            this.setAttribute("aria-expanded", isExpanded ? "false" : "true");
        });
    });

    function checkScreenWidth() {
        if (window.innerWidth >= 767) {
            esconderFiltros();
        }
    }

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);
}
document.addEventListener("DOMContentLoaded", filtros)
