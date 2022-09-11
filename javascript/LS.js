const guardarArrayLS = (clave, valor) => { localStorage.setItem(clave, valor) }
guardarArrayLS("Lista de Masajes", JSON.stringify(MASAJES));

nombre.addEventListener("change", () => {
    localStorage.setItem("nombre", nombre.value)
})

apellido.addEventListener("change", () => {
    localStorage.setItem("apellido", apellido.value)
})

telefono.addEventListener("change", () => {
    localStorage.setItem("telefono", telefono.value)
})

email.addEventListener("change", () => {
    localStorage.setItem("email", email.value)
})

function recuperarDatos() {
    nombre.value = localStorage.getItem("nombre");
    apellido.value = localStorage.getItem("apellido");
    telefono.value = localStorage.getItem("telefono");
    email.value = localStorage.getItem("email");
}

recuperarDatos();
