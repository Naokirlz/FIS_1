class Cancion {

  constructor(autoIdCancion, nombre, tablatura, autor , ruta_sonido) {

    this.id = autoIdCancion;
    this.nombre = nombre;
    this.autor = autor;
    this.tablatura = tablatura;
    this.ruta_sonido = ruta_sonido;
   
    
  }
}
module.exports.Cancion = Cancion;