// ------------------------------ PRÁCTICAS ---------------------------------------------

/*let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let nombreCompleto = nombre + " " + apellido;
alert("¡Hola " + nombreCompleto + "!")
let confirmar = confirm("Usted desea continuar?")

let edad = prompt("Ingrese su edad")
if (edad < 18) { alert("No puede ingresar!") }
else { alert("bienvenido!") }

let precio = prompt("ingrese una oferta")
if (precio < 10000) { alert("precio bajo") }
else if (precio == 10000) { alert("un poco mas!") }
else if (precio > 10000) {
    alert("trato hecho")
}

let Nombre = prompt("tu nombre?")
if ((Nombre != "") && ((Nombre == "PABLO") || (Nombre == "Pablo") || (Nombre == "pablo"))) { alert("hola Pablo!") }
else { alert("error") } */

/*function solicitarNombre() {
    let ingreseNombre = prompt("ingrese su nombre");
    let ingreseApellido = prompt("ingrese apellido:")
    alert("hola " + ingreseNombre + " " + ingreseApellido)
}

solicitarNombre();*/

/*let resultado = multiplicacion(10, 4)
function multiplicacion(num1, num2) {
    return num1 * num2
}

function mostrar() { alert("El resultado es: " + resultado) }

mostrar()*/

/*function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default: 
            return 0;
    }
}

alert(calculadora(2, 3, "/"))*/

/*let yo = {
    nombre: "Pablo",
    edad: 31,
    dni: 35508618,
    peso: "64Kg",
}
console.log (yo)
alert (yo.peso)*/

// --------------------------------DESAFÍO COMPLEMENTARIO-------------------------------

/*let numero = prompt("Ingrese un número:")
for (let i = 1; i < 10; i++) {
    let resultado = numero * i;
    alert(numero + " X " + i + " = " + resultado);
}

let ingresar = prompt("Ingrese una palabra:").toLocaleLowerCase()
while (ingresar != "salir") {
    alert("Ingresaste: " + ingresar);
    ingresar = prompt("Ingrese otra palabra:")
}*/

// ------------------------------DESAFIO ENTREGABLE N°1---------------------------------


/*function solicitarNombre() {
    alert("Bienvenido a Darwin Relax!");
    let nombre = prompt("Por favor, ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    while (nombre === "" || apellido === "") {
        alert("ERROR! Por favor ingrese nuevamente su nombre y/o apellido");
        nombre = prompt("Por favor, ingrese su nombre:");
        apellido = prompt("Ingrese su apellido:");
    }
}

function pedido() {
    let masaje;
    do { masaje = prompt("Qué tipo de masaje necesitas? Ingresa el número correspondiente al masaje: \n 1)Masaje Descontracturante \n 2)Masaje Deportivo \n 3)Masaje Tailandes \n 4)Masaje con Acupuntura \n 5)Masaje con Ventosas"); }
    while (masaje != 1 && masaje != 2 && masaje != 3 && masaje != 4 && masaje != 5);

    switch (masaje) {
        case "1":
            return "masaje descontracturante";
        case "2":
            return "masaje deportivo";
        case "3":
            return "masaje tailandes";
        case "4":
            return "masaje acupuntura";
        case "5":
            return "masaje ventosas";
    }
}

function verificarPrecio(masaje) {
    if (masaje === "masaje descontracturante") {
        return 1500;
    }
    else if (masaje === "masaje deportivo") {
        return 1800;
    }
    else if (masaje === "masaje tailandes") {
        return 2000;
    }
    else if (masaje === "masaje acupuntura") {
        return 2500;
    }
    else if (masaje === "masaje ventosas") {
        return 2800;
    }
}

function cobro(masaje, precio) {
    alert("Usted esta reservando turno para el siguiente masaje: " + masaje.toUpperCase() + "\nPrecio: $ " + precio)
    let abonar = parseInt(prompt("Con cuanto abona? (Por favor abonar con cambio al momento de terminar la sesión)"));
    if (abonar > precio) {
        alert("Su vuelto es de $" + (abonar - precio));
    } else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }
}

solicitarNombre()
let masajeElegido = pedido();
let precioFinal = verificarPrecio(masajeElegido);
cobro(masajeElegido, precioFinal);*/

// --------------------------------DESAFÍO COMPLEMENTARIO N°2-------------------------------

/*class Masaje {
    constructor(ID, Nombre, Precio) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Precio = Precio;
    }
}

const masajes = [];

masajes.push(new Masaje("01", "Masaje descontracturante", "1500"))
masajes.push(new Masaje("02", "Masaje deportivo", "1800"))
masajes.push(new Masaje("03", "Masaje tailandes", "2000"))
masajes.push(new Masaje("04", "Masaje con acupuntura", "2500"))
masajes.push(new Masaje("05", "Masaje con ventosas", "2800"))

console.table(masajes)

console.log(masajes.length)

console.log(masajes.includes("Masaje chino"))*/


// --------------------------------1° ENTREGA PROYECTO FINAL--------------------------------


function crearLista() {
    let listado = document.getElementById("listado");
    let listaMasajes = ["MASAJE DESCONTRACTURANTE", "MASAJE DEPORTIVO", "MASAJE TAILANDES", "MASAJE CON ACUPUNTURA", "MASAJE CON VENTOSAS", "MASAJE SEDATIVO", "MASAJE CON CRIOTERAPIA (VENDAS FRIAS)", "DRENAJE LINFATICO"];
    for (const masaje of listaMasajes) {
        const li = document.createElement("li");
        li.innerText = masaje
        listado.append(li);
    }
}

function solicitarNombre() {
    alert("Bienvenido a Darwin Relax!");
    let nombre = prompt("Por favor, ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    while (nombre === "" || apellido === "") {
        alert("ERROR! Por favor ingrese nuevamente su nombre y/o apellido");
        nombre = prompt("Por favor, ingrese su nombre:");
        apellido = prompt("Ingrese su apellido:");
    }
}

function pedido() {
    let masaje;
    do { masaje = prompt("Qué tipo de masaje necesitas? Ingresa el número correspondiente al masaje: \n 1)Masaje Descontracturante \n 2)Masaje Deportivo \n 3)Masaje Tailandes \n 4)Masaje con Acupuntura \n 5)Masaje con Ventosas \n 6)Masaje Sedativo \n 7)Masaje con Crioterapia (vendas frías) \n 8)Drenaje Linfático") }
    while (masaje != 1 && masaje != 2 && masaje != 3 && masaje != 4 && masaje != 5 && masaje != 6 && masaje != 7 && masaje != 8);

    switch (masaje) {
        case "1":
            return "masaje descontracturante";
        case "2":
            return "masaje deportivo";
        case "3":
            return "masaje tailandes";
        case "4":
            return "masaje con acupuntura";
        case "5":
            return "masaje con ventosas";
        case "6":
            return "masaje sedativo";
        case "7":
            return "masaje con crioterapia";
        case "8":
            return "drenaje linfatico";
    }
}

function verificarPrecio(masaje) {
    if (masaje === "masaje descontracturante") {
        return 1500;
    }
    else if (masaje === "masaje deportivo") {
        return 1800;
    }
    else if (masaje === "masaje tailandes") {
        return 2000;
    }
    else if (masaje === "masaje con acupuntura") {
        return 2500;
    }
    else if (masaje === "masaje con ventosas") {
        return 2800;
    }
    else if (masaje === "masaje sedativo") {
        return 1600;
    }
    else if (masaje === "masaje con crioterapia") {
        return 3000;
    }
    else if (masaje === "drenaje linfatico") {
        return 2600;
    }
}

function cobro(masaje, precio) {
    alert("Usted esta reservando turno para el siguiente masaje: " + masaje.toUpperCase() + "\nPrecio: $ " + precio)
    let abonar = parseInt(prompt("Con cuanto abona? (Por favor abonar con cambio al momento de terminar la sesión)"));
    if (abonar > precio) {
        alert("Su vuelto es de $" + (abonar - precio));
    } else {
        alert("No le alcanza el dinero para realizar éste masaje.");
    }
}

class Masaje {
    constructor(ID, Nombre, Precio) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Precio = Precio;
    }
}

const masajes = [];

masajes.push(new Masaje("01", "Masaje descontracturante", "1500"))
masajes.push(new Masaje("02", "Masaje deportivo", "1800"))
masajes.push(new Masaje("03", "Masaje tailandes", "2000"))
masajes.push(new Masaje("04", "Masaje con acupuntura", "2500"))
masajes.push(new Masaje("05", "Masaje con ventosas", "2800"))
masajes.push(new Masaje("06", "Masaje sedativo", "1600"))
masajes.push(new Masaje("07", "Masaje con crioterapia", "3000"))
masajes.push(new Masaje("08", "Drenaje linfatico", "2600"))


const masajesPrecioActualizado = masajes.map((actualizacion) => {
    return {
        ID: actualizacion.ID,
        Nombre: actualizacion.Nombre,
        Precio: actualizacion.Precio * 1.50,
    }
})


crearLista();
solicitarNombre()
let masajeElegido = pedido();
let precioFinal = verificarPrecio(masajeElegido);
cobro(masajeElegido, precioFinal);
console.table(masajes);
console.log(masajes.length);
console.log(masajes.includes("Masaje chino"));
console.table(masajesPrecioActualizado);



