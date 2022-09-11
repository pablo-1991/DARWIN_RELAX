function recibir(id, precio) {
    const texto = "texto" + id;
    const monto = (document.getElementById(texto)).value;
    ((monto) > precio) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + ((monto) - precio),
        })
    if (parseInt(monto) == precio) {
        Swal.fire({
            icon: "success",
            title: "Muchas gracias por confiar en nosotros!",
        })
    }
    (parseInt(monto) < precio) &&
        Swal.fire({
            icon: "error",
            title: "No le alcanza para éste masaje",
        })
}

function datosCompletos() {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const cerrar = document.getElementById("cerrar");
    const enviar = document.querySelector(".enviar");

    if (nombre.value === "" || apellido.value === "" || telefono.value === "" || email.value === "") {
        Swal.fire
            ({
                icon: "error",
                title: "Por favor complete todos los datos",
            })
    }
    else {
        enviar.addEventListener("click", () => {
            modalContainer.classList.add("mostrarModal")
        })
        cerrar.addEventListener("click", () => {
            modalContainer.classList.remove("mostrarModal")
        })
    }
}









