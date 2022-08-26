
function subirCards() {
    MASAJES.forEach(masaje => {
        cargarMasajes.innerHTML += `<div class="card">
<img src=${masaje.imagen} alt="masaje">
<h2>${masaje.nombre}</h2>
<p>${masaje.descripcion}.</p>
<div class= "desplegar">
<h3>PRECIO: $${masaje.precio}</h3>
<p>¿Con cuánto abona? Por favor abonar con cambio al momento de finalizar el masaje</p>
<form method="post" id="form">
<input id="texto" type="text">
<input type="button" name="enviar"  value="Enviar" onclick="recibir();"></input>
</form>
</div>
</div>`}
    )
}


subirCards();



