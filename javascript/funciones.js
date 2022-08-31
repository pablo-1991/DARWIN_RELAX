function cantidadClicks() {
    clicks.addEventListener("click", () => { console.log("CANTIDAD DE CLICKS") })
}

enviar.addEventListener("click", () => {
    modalContainer.classList.add("mostrarModal")
});

cerrar.addEventListener("click", () => {
    modalContainer.classList.remove("mostrarModal")
});


function recibir1() {
    let monto = document.getElementById("texto1").value;
    (parseInt(monto) > 1500) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + (parseInt(monto) - 1500),
        })

    if (parseInt(monto) == 1500) {
        Swal.fire({
            icon: "success",
            title: "Muchas gracias por confiar en nosotros!",
        })
    }

    (parseInt(monto) < 1500) &&
        Swal.fire({
            icon: "error",
            title: "No le alcanza para éste masaje",
        })
}

function recibir2() {
    let monto = document.getElementById("texto2").value;
    (parseInt(monto) > 1800) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + (parseInt(monto) - 1800),
        })

    if (parseInt(monto) == 1800) {
        Swal.fire({
            icon: "success",
            title: "Muchas gracias por confiar en nosotros!",
        })
    }

    (parseInt(monto) < 1800) &&
        Swal.fire({
            icon: "error",
            title: "No le alcanza para éste masaje",
        })
}

function recibir3() {
    let monto = document.getElementById("texto3").value;
    (parseInt(monto) > 2000) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + (parseInt(monto) - 2000),
        })

    if (parseInt(monto) == 2000) {
        Swal.fire({
            icon: "success",
            title: "Muchas gracias por confiar en nosotros!",
        })
    }

    (parseInt(monto) < 2000) &&
        Swal.fire({
            icon: "error",
            title: "No le alcanza para éste masaje",
        })
}

function recibir4() {
    let monto = document.getElementById("texto4").value;
    (parseInt(monto) > 2500) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + (parseInt(monto) - 2500),
        })

    if (parseInt(monto) == 2500) {
        Swal.fire({
            icon: "success",
            title: "Muchas gracias por confiar en nosotros!",
        })
    }

    (parseInt(monto) < 2500) &&
        Swal.fire({
            icon: "error",
            title: "No le alcanza para éste masaje",
        })
}

function recibir5() {
    let monto = document.getElementById("texto5").value;
    (parseInt(monto) > 2800) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + (parseInt(monto) - 2800),
        })

    if (parseInt(monto) == 2800) {
        Swal.fire({
            icon: "success",
            title: "Muchas gracias por confiar en nosotros!",
        })
    }

    (parseInt(monto) < 2800) &&
        Swal.fire({
            icon: "error",
            title: "No le alcanza para éste masaje",
        })
}

function recibir6() {
    let monto = document.getElementById("texto6").value;
    (parseInt(monto) > 1600) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + (parseInt(monto) - 1600),
        })

    if (parseInt(monto) == 1600) {
        Swal.fire({
            icon: "success",
            title: "Muchas gracias por confiar en nosotros!",
        })
    }

    (parseInt(monto) < 1600) &&
        Swal.fire({
            icon: "error",
            title: "No le alcanza para éste masaje",
        })
}

function recibir7() {
    let monto = document.getElementById("texto7").value;
    (parseInt(monto) > 3000) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + (parseInt(monto) - 3000),
        })

    if (parseInt(monto) == 3000) {
        Swal.fire({
            icon: "success",
            title: "Muchas gracias por confiar en nosotros!",
        })
    }

    (parseInt(monto) < 3000) &&
        Swal.fire({
            icon: "error",
            title: "No le alcanza para éste masaje",
        })
}

function recibir8() {
    let monto = document.getElementById("texto8").value;
    (parseInt(monto) > 2600) &&
        Swal.fire({
            icon: "info",
            title: "Su vuelto es de $" + (parseInt(monto) - 2600),
        })

    if (parseInt(monto) == 2600) {
        Swal.fire({
            icon: "success",
            title: "Muchas gracias por confiar en nosotros!",
        })
    }

    (parseInt(monto) < 2600) &&
        Swal.fire({
            icon: "error",
            title: "No le alcanza para éste masaje",
        })
}

cantidadClicks();





