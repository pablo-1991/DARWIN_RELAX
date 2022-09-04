
const MASAJES = [];
const cargarMasajes = document.querySelector(".masajes");
const clicks = document.getElementById("turnos");
const enviar = document.querySelector(".enviar");
const modal = document.querySelector("modalContainer");
const cerrar = document.getElementById("cerrar");


async function servidorDatos() {
    await fetch("https://6314b345fc9dc45cb4f210b9.mockapi.io/masajes")
        .then((response) => response.json())
        .catch((error) => console.error("Ocurrió un error al intentar cargar los items", error))
        .then((data) => {
            let MASAJES = data
            console.log(data)
            MASAJES.forEach(masaje => {
                subirCards(masaje)
            })
        })
        
}

class Masaje {
    constructor(id, nombre, precio, imagen, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

const mas1 = new Masaje("1", "MASAJE DESCONTRACTURANTE", "1500", "./imagenes/descontracturante.jpg", "Se trata de un masaje manual en el cual conseguimos a través de deferentes técnicas aliviar contracturas y normalizar el tono muscular")
const mas2 = new Masaje("2", "MASAJE DEPORTIVO", "1800", "./imagenes/deportivo.jpg", "Es un masaje estimulante previo a la competición o el entreno, para activar la circulación y calentar los músculos. Mejora la elasticidad y previene lesiones")
const mas3 = new Masaje("3", "MASAJE TAILANDES", "2000", "./imagenes/tailandes.jpg", "Se trata de un masaje de estiramientos y profundidad: es decir, la terapista estirará tus extremidades, cuello, espalda y torso, según vea la necesidad")
const mas4 = new Masaje("4", "MASAJE CON ACUPUNTURA", "2500", "./imagenes/acupuntura.jpg", "Consiste en la inserción de agujas muy finas en la piel en puntos estratégicos del cuerpo. Esta técnica milenaria China se utiliza con frecuencia para tratar el dolor")
const mas5 = new Masaje("5", "MASAJE CON VENTOSAS", "2800", "./imagenes/ventosas.jpg", "Consiste en aplicar ventosas sobre el cuerpo, a las que se les extrae el aire, y que se manipulan con el fin de eliminar toxinas de la sangre y la linfa, o tratar diversas afecciones")
const mas6 = new Masaje("6", "MASAJE SEDATIVO", "1600", "./imagenes/sedativo.jpg", "Se utiliza para armonizar el sistema nervioso consiguiendo un determinado grado de relajación muscular, contribuyendo a que el individuo recupere y mantenga el equilibrio psicofísico")
const mas7 = new Masaje("7", "MASAJE CON CRIOTERAPIA", "3000", "./imagenes/crioterapia.jpg", "Las Vendas frías son un tratamiento descongestivo, natural y relajante que aprovecha el metabolismo de nuestro cuerpo para lograr la hidratación, reafirmación y humectación de la piel")
const mas8 = new Masaje("8", "DRENAJE LINFATICO", "2600", "./imagenes/linfatico.jpg", "Es un tipo de masaje, suave y ligero, que se aplica sobre el sistema circulatorio y cuyo objetivo es movilizar los líquidos del organismo para favorecer la eliminación de las sustancias de deshecho que se acumulan entre las células")

//MASAJES.push(mas1, mas2, mas3, mas4, mas5, mas6, mas7, mas8);

//console.table(MASAJES);
servidorDatos();