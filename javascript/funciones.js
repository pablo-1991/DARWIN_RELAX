function cantidadClicks() {
    clicks.addEventListener("click", () => { console.log("CANTIDAD DE CLICKS") })
}

enviar.addEventListener("click", () => {
    modalContainer.classList.add("mostrarModal")
})

cerrar.addEventListener("click", () => {
    modalContainer.classList.remove("mostrarModal")
})

function recibir(id, precio) {
    let texto = "texto" + id;
    let monto = document.getElementById(texto).value;
    (parseInt(monto) > precio) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + (parseInt(monto) - precio),
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


/*function datosCompletos(nombre, apellido, telefono, email) {
    if (nombre.value == "" || apellido == "" || telefono == "" || email == "") {
        return enviar.addEventListener("click", () => {
            Swal.fire
            ({  icon: "error",
                title: "Por favor complete todos los datos",})
        })
    }

    else {cerrar.addEventListener("click", () => {
        return modalContainer.classList.remove("mostrarModal")
        enviar.addEventListener("click", () => {
            modalContainer.classList.add("mostrarModal")
        })
    })}
}*/




recibir();
cantidadClicks();







