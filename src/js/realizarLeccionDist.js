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