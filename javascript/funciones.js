

function cantidadClicks() {
    clicks.addEventListener("click", () => { console.log("CANTIDAD DE CLICKS") })
}

enviar.addEventListener("click", () => {
    modalContainer.classList.add("mostrarModal")
});

cerrar.addEventListener("click", () => {
    modalContainer.classList.remove("mostrarModal")
});


function recibir() {
    let monto = document.getElementById("texto").value;
    if (parseInt(monto) > this.precio) {
        alert("Su vuelto es de $" + (parseInt(monto) - this.precio));
        console.log(this.precio)
    }
    else if (parseInt(monto) == this.precio) {
        alert("Muchas Gracias por confiar en nosotros!")
    }
    else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }
}


cantidadClicks();





