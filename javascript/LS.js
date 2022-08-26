
const guardarArrayLS = (clave, valor) => { localStorage.setItem(clave, valor) }
guardarArrayLS("Lista de Masajes", JSON.stringify(MASAJES));

nombre.addEventListener("focusout", () => {
    localStorage.setItem("nombre", nombre.value)
}
)

apellido.addEventListener("focusout", () => {
    localStorage.setItem("apellido", apellido.value)
}
)

telefono.addEventListener("focusout", () => {
    localStorage.setItem("telefono", telefono.value)
}
)

email.addEventListener("focusout", () => {
    localStorage.setItem("email", email.value)
}
)

function recuperarDatos() {
    nombre.value = localStorage.getItem("nombre");
    apellido.value = localStorage.getItem("apellido");
    telefono.value = localStorage.getItem("telefono");
    email.value = localStorage.getItem("email");
}

recuperarDatos();
