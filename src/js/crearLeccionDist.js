class Cancion {

  constructor(autoIdCancion, nombre, tablatura, autor , ruta_sonido) {

    this.id = autoIdCancion;
    this.nombre = nombre;
    this.autor = autor;
    this.tablatura = tablatura;
    this.ruta_sonido = ruta_sonido;
   
    
  }
}


        class Leccion {

  constructor(autoIdLeccion, nombre, descripcion, cancion, ruta_imagen , desLeccion) {

    var d = new Date();
    
    this.id = autoIdLeccion;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.desLeccion = desLeccion;
    this.fecha = d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();
    this.cancion = cancion;
    this.ruta_imagen = ruta_imagen;
   

  }
}



        

var autoIdLeccion = 1;
var autoIdCancion = 1; 

class Sistema {

  constructor() {

    this.listaLecciones = [];
    this.listaCanciones = [];


  }

  cargarCanciones() {
    for (var i = 0; i < 10; i++) {
      var nuevaCancion = new Cancion(autoIdCancion, "Canción de Prueba " + (i+1), tablaturaPrueba, "Autor de Canción " + (i+1), "../../../server-side/sound/cancion1.mp3");
      this.listaCanciones.push(nuevaCancion);
      autoIdCancion++;
    }
  }

  cargarLecciones() {
    for (var i=0; i<10; i++){
      var nombre = "Lección de Prueba " + (i + 1);
      var descripcion = `
        En este curso de guitarra online para principiantes gratuito podrás aprender online a tocar la guitarra desde cero. Este curso de guitarra es especialmente relevante para ir a tu ritmo, donde podrás practicar desde casa totalmente gratis.
      `;
      var cancion = this.traerCancion(1);
      var ruta = "../../../server-side/img/leccion";
      var desLeccion = `
        Estudiamos los fundamentos básicos del ritmo, aprendiendo a interiorizarlo y desarrollando la habilidad de ser capaz de sacar cualquier ritmo con escucharlo. Este curso lo dividimos en dos partes, en la primera aprenderemos toda la teoría, pero de manera práctica, desarrollando la técnica básica del ritmo. Después aprenderás 50 ritmos de manera progresiva, con ejemplos prácticos al estilo de canciones y progresiones muy conocidas de lo mejor de la música. Puedes descargar los PDF de cada lección además de todas las pistas de práctica.
      `;
      ((i%2)==0) ? ruta += "1.jpg" : ruta += "2.jpg";
      var nuevaLeccion = new Leccion(autoIdLeccion, nombre, descripcion, cancion, ruta, desLeccion);
      this.listaLecciones.push(nuevaLeccion);
      autoIdLeccion++;
    }
  }

  crearLeccion(nombre, descripCorta, cancion, ruta_imagen, descripLarga) {

    var retorno = true;

    if (nombre == "" || descripCorta == "" || cancion == null || ruta_imagen == "" || descripLarga == "") {
      retorno = false;
    }
    else if (nombre.length < 5 || nombre.length > 20 || ruta_imagen.length > 100 ||
      descripCorta.length < 10 || descripCorta.length > 250 ||
      descripLarga.length < 10 || descripLarga.length > 2000) {

      retorno = false;
    }
    else {
      var unaLeccion = new Leccion(autoIdLeccion, nombre, descripCorta, cancion, ruta_imagen, descripLarga);
      this.listaLecciones.push(unaLeccion);
      autoIdLeccion++;
    }

    return retorno;

  }

  crearCancion(nombre, tablatura, autor, ruta_sonido) {

    if (nombre == "" || tablatura == "" || autor == "" || ruta_sonido == "") {
      return null;
    }
    if (nombre.length < 5 || nombre.length > 20 ||
      tablatura.length < 1000 || tablatura.length > 5000 ||
      autor.length < 5 || autor.length > 20 || ruta_sonido > 100) {
      return null;
    }
    var unaCancion = new Cancion(autoIdCancion, nombre, tablatura, autor, ruta_sonido);
    this.listaCanciones.push(unaCancion);
    autoIdCancion++;
    return unaCancion;
  }

  traerCancion(id) {

    var retorno = null;
    var iter = 0;

    while (retorno == null && iter < this.listaCanciones.length) {

      if (id == this.listaCanciones[iter].id) {
        retorno = this.listaCanciones[iter];
      }
      iter++;
    }
    return retorno;
  }


}
const tablaturaPrueba = `
<pre style="font-family: inherit; line-height: 1em; color: rgb(0, 0, 0); font-size: 13px;">Dormido está el león - Timón y Pumba



(Sólo voz)
Di ri di ri di diri diri di di om owim mowé
Di ri di ri di diri diri di di om owim mowé

Diiii ri di ri di om owim mowé

<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>                    <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">C</a>
Owim mowé, owim mowé, owim mowé, owim mowé,
<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>                    <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">D</a>
owim mowé, owim mowé, owim mowé, owim mowé (bis)

<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>                 <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">C</a>
En la jungla, la negra jungla,
<div style="height: 0.5em;"></div>    <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>             <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">D</a>
dormido está el león

<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>                <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">C</a>
En la jungla, calmada jungla,
<div style="height: 0.5em;"></div>   <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>              <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">D</a>
Dormido está el león

<div style="height: 0.5em;"></div><a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>       <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">C</a>        <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">G</a>            <a style="color: rgb(0, 68, 204); display: inline-block; padding-top: 0.3em; padding-right: 0.5em; padding-left: 0.5em; margin-top: 0.25em; margin-right: -0.5em; margin-left: -0.5em; line-height: 1.3em; cursor: pointer; border-radius: 0.4em;">D</a></pre>
`;




  
  
  
$(function () {
    // Summernote
    $('.textarea').summernote()
});

document.getElementById("fil-imagen").addEventListener("change", tomarImagen);

function tomarImagen() {
    if (document.getElementById("fil-imagen").value) {
        document.getElementById("lbl-fil-imagen").innerHTML = document.getElementById("fil-imagen").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        document.getElementById("lbl-fil-imagen").innerHTML = "No ha seleccionado ninguna imágen";
    }
}

document.getElementById("imp-sonido").addEventListener("change", tomarSonido);

function tomarSonido() {
    if (document.getElementById("imp-sonido").value) {
        document.getElementById("lbl-sonido").innerHTML = document.getElementById("imp-sonido").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        document.getElementById("lbl-sonido").innerHTML = "No ha seleccionado ningun sonido";
    }
}

document.getElementById("btn-togleVisible").addEventListener("click", (e) => {
    e.preventDefault();
    var divIzq = document.getElementById("lado-izquierdo");
    var divDer = document.getElementById("lado-derecho");
    var tiene = divIzq.classList.contains('visible');
    var boton = document.getElementById("btn-togleVisible");

    if (tiene) {
        divIzq.classList.remove('visible');
        divDer.classList.add("visible");
        boton.innerText = "Crear Lección";
        boton.classList.add("derecha");
        document.getElementById("crear-lecc").classList.add("invisible");
        document.getElementById("btn-guardar").classList.add("disabled");
        document.getElementById('btn-guardar').disabled = true;
    } else {
        divDer.classList.remove('visible');
        divIzq.classList.add("visible");
        boton.innerText = "Crear Nueva Canción";
        boton.classList.remove("derecha");
        document.getElementById("crear-lecc").classList.remove("invisible");
        document.getElementById("btn-guardar").classList.remove("disabled");
        document.getElementById('btn-guardar').disabled = false;
    }
})

window.addEventListener("load", cargarSelect);
document.getElementById("btn-guardar").addEventListener("click", (e) => {
    e.preventDefault();
    cargarLeccionYCancion();
});

document.getElementById("btn-guardar-cancion").addEventListener("click", (e) => {
    e.preventDefault();
    cargarCancion();
})

let sist = new Sistema();
sist.cargarCanciones();

var cancionSeleccionada = -1;

function cargarSelect() {
    var options = "<option value='-1'>Seleccione una canción</option>";

    for (var i = 0; i < sist.listaCanciones.length; i++) {
        if (cancionSeleccionada == sist.listaCanciones[i].id) {
            options += `
                <option value="${sist.listaCanciones[i].id}" selected>${sist.listaCanciones[i].nombre}</option>
            `;
        } else {
            options += `
                <option value="${sist.listaCanciones[i].id}">${sist.listaCanciones[i].nombre}</option>
            `;
        }
    }

    document.getElementById("sel-canciones").innerHTML = options;
}

function cargarCancion() {
    limpiarEstilos();

    var nombre = document.getElementById("txt-nombre-cancion").value.trim();
    var tablatura = document.getElementById("txt-tablatura").value.trim();
    var autor = document.getElementById("txt-autor").value.trim();
    var sonido = document.getElementById("imp-sonido").value.trim();
    var cuerpoAlerta = "";
    if (nombre && autor && sonido && tablatura) {
        if (nombre.length < 5 || nombre.length > 20) {
            document.getElementById("val-txt-nombre-cancion").classList.remove("not");
            document.getElementById("txt-nombre-cancion").classList.add("is-invalid");
            cuerpoAlerta += "El nombre debe poseer entre 5 y 20 caracteres";
        }
        if (autor.length < 5 || autor.length > 20) {
            document.getElementById("val-txt-autor").classList.remove("not");
            document.getElementById("txt-autor").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "El autor debe poseer entre 5 y 20 caracteres"
        }
        if (!sonido.includes(".mp3")) {
            document.getElementById("val-imp-sonido").classList.remove("not");
            document.getElementById("imp-sonido").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe seleccionar una archivo .mp3"
        }
        if (sonido.length > 100) {
            document.getElementById("val-imp-sonido").classList.remove("not");
            document.getElementById("imp-sonido").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "La ruta del sonido no puede tener más de 100 caracteres.";
        }
        if (tablatura.length < 1000 || tablatura.length > 5000) {
            console.log(tablatura.length)
            document.getElementsByClassName("note-editor note-frame card")[0].classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "La tablatura debe poseer entre 1000 y 5000 caracteres";
            document.getElementById("spn-caracteres").innerHTML = " * " + tablatura.length + " caracteres!!";
        }
        if (cuerpoAlerta !== "") {
            volverVisible(cuerpoAlerta, "danger");
            document.getElementById("btn-guardar").classList.add("disabled");
            document.getElementById('btn-guardar').disabled = true;
        } else {
            var laCancion = sist.crearCancion(nombre, tablatura, autor, sonido);
            if (laCancion) {
                limpiarCampos();
                limpiarEstilos();
                volverVisible("Canción creada con éxito!", "success");
                cancionSeleccionada = laCancion.id;
                cargarSelect();
                document.getElementById("btn-togleVisible").click();
                document.getElementById("btn-guardar").classList.remove("disabled");
                document.getElementById('btn-guardar').disabled = false;
            } else {
                volverVisible("No se pudo crear la canción", "error");
                document.getElementById("btn-guardar").classList.add("disabled");
                document.getElementById('btn-guardar').disabled = true;
            }
        }
    } else {
        if (!nombre) {
            document.getElementById("val-txt-nombre-cancion").classList.remove("not");
            document.getElementById("txt-nombre-cancion").classList.add("is-invalid");
            cuerpoAlerta += "Debe ingresar un nombre de canción";
        }
        if (!autor) {
            document.getElementById("val-txt-autor").classList.remove("not");
            document.getElementById("txt-autor").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar un autor de canción"
        }
        if (!sonido) {
            document.getElementById("val-imp-sonido").classList.remove("not");
            document.getElementById("imp-sonido").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe seleccionar una archivo de sonido"
        }
        if (!tablatura) {
            document.getElementsByClassName("note-editor note-frame card")[0].classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una tablatura de entre 1000 y 5000 caracteres"
        }
        document.getElementById("btn-guardar").classList.add("disabled");
        document.getElementById('btn-guardar').disabled = true;
        volverVisible(cuerpoAlerta, "error");
    }

}

function cargarLeccionYCancion() {
    var cancion = document.getElementById("sel-canciones").value.trim();
    var seleccionarCancion = document.getElementById("btn-togleVisible").classList.contains("derecha");
    //me fijo si elige una cancion existente
    if (!seleccionarCancion) {
        if (cancion == -1) {
            document.getElementById("val-sel-canciones").classList.remove("not");
            document.getElementById("sel-canciones").classList.add("is-invalid");
            volverVisible("Seleccione una canción", "error");
        } else {
            crearClase(cancion);
        }
    } else {
        volverVisible("Debe seleccionar una canción", "danger");
        document.getElementById("btn-togleVisible").click();
    }
}

function crearClase(cancion) {
    limpiarEstilos()
    var nombre = document.getElementById("txt-nombre-leccion").value.trim();
    var descripcion = document.getElementById("txt-descripcion-leccion").value.trim();
    var imagen = document.getElementById("fil-imagen").value.trim();
    var leccion = document.getElementById("txt-leccion").value.trim();

    if (!cancion.id) {
        cancion = sist.traerCancion(cancion);
    }

    var cuerpoAlerta = "";

    if (nombre && descripcion && imagen && leccion && cancion) {

        if (nombre.length < 5 || nombre.length > 20) {
            document.getElementById("val-txt-nombre-leccion").classList.remove("not");
            document.getElementById("txt-nombre-leccion").classList.add("is-invalid");
            cuerpoAlerta += "El nombre debe tener entre 5 y 20 caracteres";
        }
        if (descripcion.length < 10 || descripcion.length > 250) {
            document.getElementById("val-txt-descripcion-leccion").classList.remove("not");
            document.getElementById("txt-descripcion-leccion").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "La descripción corta debe tener entre 10 y 250 caracteres";
        }
        if (!imagen.includes(".png") && !imagen.includes(".jpg") && !imagen.includes(".jpeg")) {
            document.getElementById("fil-imagen").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una imágen válida."
        }
        if (imagen.length > 100) {
            document.getElementById("fil-imagen").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "La ruta de la imágen no puede tener más de 100 caracteres."
        }
        if (leccion.length < 10 || leccion.length > 2000) {
            document.getElementsByClassName("note-editor note-frame card")[1].classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una lección de entre 10 y 2000 caracteres"
        }
        if (cuerpoAlerta !== "") {
            volverVisible(cuerpoAlerta, "danger");
        } else {
            var logrado = sist.crearLeccion(nombre, descripcion, cancion, imagen, leccion);
            if (logrado) {
                limpiarCampos();
                volverVisible("Lección guardada con éxito!!", "success");
            } else {
                volverVisible("No se pudo crear la lección", "error");
            }
        }
    } else {
        if (!nombre) {
            document.getElementById("val-txt-nombre-leccion").classList.remove("not");
            document.getElementById("txt-nombre-leccion").classList.add("is-invalid");
            cuerpoAlerta += "Debe ingresar un nombre de lección";
        }
        if (!descripcion) {
            document.getElementById("val-txt-descripcion-leccion").classList.remove("not");
            document.getElementById("txt-descripcion-leccion").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una descripción"
        }
        if (!imagen) {
            document.getElementById("fil-imagen").classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una imágen"
        }
        if (!leccion) {
            document.getElementsByClassName("note-editor note-frame card")[1].classList.add("is-invalid");
            (cuerpoAlerta != "") ? cuerpoAlerta += "<br>" : '';
            cuerpoAlerta += "Debe ingresar una lección de entre 10 y 2000 caracteres"
        }

        volverVisible(cuerpoAlerta, "error");
    }
}

function limpiarEstilos() {

    document.getElementById("val-sel-canciones").classList.add("not");
    document.getElementById("sel-canciones").classList.remove("is-invalid");
    document.getElementById("val-txt-nombre-cancion").classList.add("not");
    document.getElementById("txt-nombre-cancion").classList.remove("is-invalid");
    document.getElementById("val-txt-autor").classList.add("not");
    document.getElementById("txt-autor").classList.remove("is-invalid");
    document.getElementById("val-imp-sonido").classList.add("not");
    document.getElementById("imp-sonido").classList.remove("is-invalid");
    document.getElementsByClassName("note-editor note-frame card")[0].classList.remove("is-invalid");

    document.getElementById("val-txt-nombre-leccion").classList.add("not");
    document.getElementById("txt-nombre-leccion").classList.remove("is-invalid");
    document.getElementById("val-txt-descripcion-leccion").classList.add("not");
    document.getElementById("txt-descripcion-leccion").classList.remove("is-invalid");
    document.getElementById("fil-imagen").classList.remove("is-invalid");
    document.getElementsByClassName("note-editor note-frame card")[1].classList.remove("is-invalid");
    document.getElementById("alerta").classList.remove('success');
    document.getElementById("alerta").classList.remove('danger');
    document.getElementById("alerta").classList.remove('error');
}

function limpiarCampos() {
    document.getElementById("txt-nombre-leccion").value = "";
    document.getElementById("txt-descripcion-leccion").value = "";
    document.getElementById("fil-imagen").value = "";
    document.getElementById("lbl-sonido").innerHTML = "Seleccione el Archivo .mp3";
    document.getElementById("txt-nombre-cancion").value = "";
    document.getElementById("txt-autor").value = "";
    document.getElementById("imp-sonido").value = "";
    document.getElementById("lbl-fil-imagen").innerHTML = "Seleccione el Archivo .png o .jpg";
    limpiarEstilos();

    var elements = document.getElementsByClassName("note-editable card-block");
    for (var i = 0; i < elements.length; i++) elements[i].innerHTML = "";
    cargarSelect();
}

function volverVisible(cuerpo, clase) {
    setTimeout(function () {
        document.getElementById("cont-alerta").classList.add("vis");
        document.getElementById("alerta").classList.add(clase);
        document.getElementById("alerta").classList.add("vis");
        document.getElementById("alerta").innerHTML = `
            ${cuerpo}
            <span id="close-alert">
                <i class="ml-auto">&times;</i>
            </span>
        `;
        document.getElementById("close-alert").addEventListener("click", () => {
            document.getElementById("alerta").classList.remove("vis");
            document.getElementById("alerta").classList.remove(clase);
            document.getElementById("cont-alerta").classList.remove("vis");
        });
    }, 200);
}

