import Sistema from "../../js/sistema.js";

window.addEventListener("load", cargarLecciones);

const sis = new Sistema;
sis.cargarCanciones();
sis.cargarLecciones();

function cargarLecciones(){

    let html = '<h1>Todas las Lecciones</h1>';

    for(var i=0; i<sis.listaLecciones.length; i++){
        
        if((i%2) == 0){
            html += `
                <section class="row">
                    <div class="col-6">
                        <div class="card shadow-sm">
                            <img src="${sis.listaLecciones[i].ruta_imagen}" class="card-img-top" alt="Imágen de la lección ${sis.listaLecciones[i].id}">
                            <div class="card-body">
                                <h2>${sis.listaLecciones[i].nombre}</h2>
                                <p class="card-text">${sis.listaLecciones[i].descripcion}</p>
                                <a href="../realizarLeccion/realizarLeccion.html" class="btn btn-lg btn-block btn-outline-success">Tomar Lección</a>
                            </div>
                        </div>
                    </div>
            `;
            if(i == sis.listaLecciones.length - 1){
                html += `</section>`;
            }
        }else{
            html += `
                <div class="col-6">
                    <div class="card shadow-sm">
                        <img src="${sis.listaLecciones[i].ruta_imagen}" class="card-img-top" alt="Imágen de la lección ${sis.listaLecciones[i].id}">
                        <div class="card-body">
                            <h2>${sis.listaLecciones[i].nombre}</h2>
                            <p class="card-text">${sis.listaLecciones[i].descripcion}</p>
                            <a href="../realizarLeccion/realizarLeccion.html" class="btn btn-lg btn-block btn-outline-success">Tomar Lección</a>
                        </div>
                    </div>
                </div>
            </section>
            `;
        }
    }

    document.getElementById("cargaLecciones").innerHTML = html;

}