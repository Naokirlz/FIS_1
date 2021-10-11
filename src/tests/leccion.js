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

module.exports.Leccion = Leccion;