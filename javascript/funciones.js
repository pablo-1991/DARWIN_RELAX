

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
    if (parseInt(monto) > 1500 ) {
        alert("Su vuelto es de $" + (parseInt(monto) - 1500));
    }
    else if (parseInt(monto) == 1500) {
        alert("Muchas Gracias por confiar en nosotros!")
    }
    else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }

}

function recibir2() {
    let monto = document.getElementById("texto2").value;
    if (parseInt(monto) > 1800 ) {
        alert("Su vuelto es de $" + (parseInt(monto) - 1800));
    }
    else if (parseInt(monto) == 1800) {
        alert("Muchas Gracias por confiar en nosotros!")
    }
    else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }

}
function recibir3() {
    let monto = document.getElementById("texto3").value;
    if (parseInt(monto) > 2000 ) {
        alert("Su vuelto es de $" + (parseInt(monto) - 2000));
    }
    else if (parseInt(monto) == 2000) {
        alert("Muchas Gracias por confiar en nosotros!")
    }
    else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }

}

function recibir4() {
    let monto = document.getElementById("texto4").value;
    if (parseInt(monto) > 2500 ) {
        alert("Su vuelto es de $" + (parseInt(monto) - 2500));
    }
    else if (parseInt(monto) == 2500) {
        alert("Muchas Gracias por confiar en nosotros!")
    }
    else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }

}

function recibir5() {
    let monto = document.getElementById("texto5").value;
    if (parseInt(monto) > 2800 ) {
        alert("Su vuelto es de $" + (parseInt(monto) - 2800));
    }
    else if (parseInt(monto) == 2800) {
        alert("Muchas Gracias por confiar en nosotros!")
    }
    else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }

}

function recibir6() {
    let monto = document.getElementById("texto6").value;
    if (parseInt(monto) > 1600 ) {
        alert("Su vuelto es de $" + (parseInt(monto) - 1600));
    }
    else if (parseInt(monto) == 1600) {
        alert("Muchas Gracias por confiar en nosotros!")
    }
    else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }

}

function recibir7() {
    let monto = document.getElementById("texto7").value;
    if (parseInt(monto) > 3000 ) {
        alert("Su vuelto es de $" + (parseInt(monto) - 3000));
    }
    else if (parseInt(monto) == 3000) {
        alert("Muchas Gracias por confiar en nosotros!")
    }
    else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }

}

function recibir8() {
    let monto = document.getElementById("texto8").value;
    if (parseInt(monto) > 2600 ) {
        alert("Su vuelto es de $" + (parseInt(monto) - 2600));
    }
    else if (parseInt(monto) == 2600) {
        alert("Muchas Gracias por confiar en nosotros!")
    }
    else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }

}
cantidadClicks();





