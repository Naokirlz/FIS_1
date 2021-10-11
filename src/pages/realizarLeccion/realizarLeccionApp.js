import Sistema from "../../js/sistema.js";

window.addEventListener("load", cargarLeccion);

const sis = new Sistema;
sis.cargarCanciones();
sis.cargarLecciones();

function cargarLeccion(){

    var leccion = sis.listaLecciones[0];

    document.getElementById("titulo").innerHTML = `${ leccion.nombre } - <small>${ leccion.fecha }</small>`;
    document.getElementById("nombreCancion").innerHTML = `${ leccion.cancion.nombre } - <small>${ leccion.cancion.autor }</small>`;
    document.getElementById("descripcion").innerText = leccion.descripcion;
    document.getElementById("audio").innerHTML = `<source src="${ leccion.cancion.ruta_sonido }" type="audio/mp3">
                                                    Tu navegador no soporta audio HTML5.`;
    document.getElementById("tablatura").innerHTML = leccion.cancion.tablatura;
    document.getElementById("desLeccion").innerHTML = leccion.desLeccion;
}