const fs = require('fs');

fs.readdir('./src/tests/', (err, files) => {
    if (err) throw err;
    actualizarClaseCancion();
});

function cargarCancion() {
    var cancionClass = fs.readFileSync('./src/tests/cancion.js', 'UTF-8').replace('module.exports.Cancion = Cancion;', '');
    setTimeout(() => {
        var leccionClass = fs.readFileSync('./src/tests/leccion.js', 'UTF-8').replace('module.exports.Leccion = Leccion;', '');
        fs.writeFile('./src/js/app.js', cancionClass, (err) => {
            if (err) throw err;
            console.log(' - CARGANDO CLASE CANCIÓN')
            cargarLeccion(leccionClass);
        });
    }, 500);
}

function cargarLeccion(leccionClass) {
    setTimeout(() => {
        var separador = `

        `;

        fs.appendFile('./src/js/app.js', separador, (err) => {
            if (err) throw err;
            fs.appendFile('./src/js/app.js', leccionClass, (err) => {
                if (err) throw err;
                console.log(' - CARGANDO CLASE LECCIÓN')
                var sistemaClass = fs.readFileSync('./src/tests/sistema.js', 'UTF-8');
                cargarSistema(sistemaClass);
            });
        });

    }, 500);
}

function cargarSistema(sistemaClass) {
    setTimeout(() => {
        var separador = `

        `;

        fs.appendFile('./src/js/app.js', separador, (err) => {
            if (err) throw err;
            sistemaClass = sistemaClass.replace("const cancion = require('./cancion.js');", '');
            sistemaClass = sistemaClass.replace("const leccion = require('./leccion.js');", '');
            sistemaClass = sistemaClass.replace("module.exports = {", '');
            sistemaClass = sistemaClass.replace("Sistema: Sistema,", '');
            sistemaClass = sistemaClass.replace("cancion: cancion,", '');
            sistemaClass = sistemaClass.replace("leccion: leccion", '');
            sistemaClass = sistemaClass.replace(/cancion.Cancion/g, 'Cancion');
            sistemaClass = sistemaClass.replace(/leccion.Leccion/g, 'Leccion');
            sistemaClass = sistemaClass.slice(0, -1);
            fs.appendFile('./src/js/app.js', sistemaClass, (err) => {
                if (err) throw err;
                console.log(' - CARGANDO CLASE SISTEMA');
                console.log('** CREANDO ARCHIVOS DE LA PÁGINA VER LECCIONES **');
                var elSistema = fs.readFileSync('./src/js/app.js', 'UTF-8');
                verLecciones(elSistema);
            });
        });

    }, 500);
}

function verLecciones(elSistema) {
    setTimeout(() => {
        fs.writeFile('./src/js/verLeccionDist.js', elSistema, (err) => {
            if (err) throw err;
            console.log(' - CARGANDO CONFIGURACIÓN')
            var verLecc = fs.readFileSync('./src/pages/verLecciones/verLeccionesApp.js', 'UTF-8').replace('import Sistema from "../../js/sistema.js";', '');
            verLeccionesDos(verLecc);
        });
    }, 500);
}

function verLeccionesDos(verLecc) {
    setTimeout(() => {
        fs.appendFile('./src/js/verLeccionDist.js', verLecc, (err) => {
            if (err) throw err;
            console.log(' - CARGANDO FUNCIONALIDAD')
            console.log('** CREANDO ARCHIVOS DE LA PÁGINA REALIZAR LECCIONES **');
            var elSist = fs.readFileSync('./src/js/app.js', 'UTF-8');
            realizarLeccion(elSist);
        });
    }, 500);
}

function realizarLeccion(elSist) {
    setTimeout(() => {
        fs.writeFile('./src/js/realizarLeccionDist.js', elSist, (err) => {
            if (err) throw err;
            console.log(' - CARGANDO CONFIGURACIÓN')
            var realLeccion = fs.readFileSync('./src/pages/realizarLeccion/realizarLeccionApp.js', 'UTF-8').replace('import Sistema from "../../js/sistema.js";', '');
            realizarLeccionDos(realLeccion);
        });
    }, 500);
}

function realizarLeccionDos(realLeccion) {
    setTimeout(() => {
        fs.appendFile('./src/js/realizarLeccionDist.js', realLeccion, (err) => {
            if (err) throw err;
            console.log(' - CARGANDO FUNCIONALIDAD')
            console.log('** CREANDO ARCHIVOS DE LA PÁGINA CREAR LECCIONES **');
            var elSist = fs.readFileSync('./src/js/app.js', 'UTF-8');
            crearLeccion(elSist);
        });
    }, 500);
}

function crearLeccion(elSist) {
    setTimeout(() => {
        fs.writeFile('./src/js/crearLeccionDist.js', elSist, (err) => {
            if (err) throw err;
            console.log(' - CARGANDO CONFIGURACIÓN')
            var crearLec = fs.readFileSync('./src/pages/crearLecciones/crearLecciones.js', 'UTF-8');
            crearLeccionDos(crearLec);
        });
    }, 500);
}

function crearLeccionDos(crearLec) {
    setTimeout(() => {
        fs.appendFile('./src/js/crearLeccionDist.js', crearLec, (err) => {
            if (err) throw err;
            console.log(' - CARGANDO VISTA')
            var crearLecDos = fs.readFileSync('./src/pages/crearLecciones/crearLeccionesApp.js', 'UTF-8').replace('import Sistema from "../../js/sistema.js";', '');
            crearLeccionTres(crearLecDos);
        });
    }, 500);
}

function crearLeccionTres(crearLec) {
    setTimeout(() => {
        fs.appendFile('./src/js/crearLeccionDist.js', crearLec, (err) => {
            if (err) throw err;
            console.log(' - CARGANDO FUNCIONALIDAD');
            var crearLecDos = fs.readFileSync('./src/pages/crearLecciones/crearLeccionesApp.js', 'UTF-8');
            console.log('/*************************************************************/');
            console.log('/FINALIZADO EL PROCESO DE CREACIÓN DE ARCHIVOS JS, PROCEDA CON/');
            console.log('/  EL SIGUIENTE COMANDO PARA ABRIR LAS PÁGINAS CORRECTAMENTE  /');
            console.log('/                        npm run build                        /');
            console.log('/*************************************************************/');
        });
    }, 500);
}

function actualizarClaseCancion() {
    var cancionClass = "export default " + fs.readFileSync('./src/tests/cancion.js', 'UTF-8').replace('module.exports.Cancion = Cancion;', '');
    setTimeout(() => {
        var leccionClass = fs.readFileSync('./src/tests/leccion.js', 'UTF-8').replace('module.exports.Leccion = Leccion;', '');
        fs.writeFile('./src/js/cancion.js', cancionClass, (err) => {
            if (err) throw err;
            console.log(' - ACTUALIZANDO CLASE CANCIÓN');
            actualizarClaseLeccion(leccionClass);
        });
    }, 500);
}

function actualizarClaseLeccion(leccionClass) {
    var sistClass = `
        const cancion = require('./cancion.js');
        const leccion = require('./leccion.js');

        `;
    sistClass += "export default " + fs.readFileSync('./src/tests/sistema.js', 'UTF-8');

    setTimeout(() => {
        fs.writeFile('./src/js/leccion.js', leccionClass, (err) => {
            if (err) throw err;
            console.log(' - ACTUALIZANDO CLASE LECCIÓN');
            actualizarClaseSistema(sistClass);
        });
    }, 500);
}

function actualizarClaseSistema(sistClass) {
    setTimeout(() => {

        sistClass += `
module.exports = {
    Sistema: Sistema,
    cancion: cancion,
    leccion: leccion
}
        `;
        sistClass = sistClass.replace(/new Cancion/g, 'cancion.Cancion');
        sistClass = sistClass.replace(/new Leccion/g, 'leccion.Leccion');
        fs.writeFile('./src/js/sistema.js', sistClass, (err) => {
            if (err) throw err;
            console.log(' - ACTUALIZANDO CLASE SISTEMA');
            console.log('** CREANDO ARCHIVOS DE FUNCIONALIDAD DEL SISTEMA **');
            cargarCancion();
        });
    }, 500);
}