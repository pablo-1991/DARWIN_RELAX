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

// --------------------------------DESAFÍO COMPLEMENTARIO----------------------------------

let numero = prompt("Ingrese un número:")
for (let i = 1; i < 10; i++) {
    let resultado = numero * i;
    alert(numero + " X " + i + " = " + resultado);
}

let ingresar = prompt("Ingrese una palabra:").toLocaleLowerCase()
while (ingresar != "salir") {
    alert("Ingresaste: " + ingresar);
    ingresar = prompt("Ingrese otra palabra:")
}
