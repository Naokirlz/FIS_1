const sistema = require('./sistema.js');

var sis;
beforeEach(()=>{
    sis = new sistema.Sistema();
});

/* =============================== PRUEBAS UNITARIAS DE CREAR CANCION ====================================================== 

  Una canción tiene:

 ** Nombre que NO puede ser vacío y tiene entre 5 y 20 caracteres
 ** Autor que NO puede ser vacío y tiene entre 5 y 20 caracteres
 ** Tablatura que NO puede ser vacío y tiene entre 1000 y 5000 caracteres
 ** Ruta a un archivo de sonido que NO puede ser vacío y como máximo 100 caracteres


========================================================================================================================= */

test('crear una canción correctamente', () => {
   
    var tablatura = "";
   
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, 'autor1' , 'ruta_sonido')).toBeTruthy();
});


/*================================================ NOMBRE =================================================================== */

test('no se puede crear una canción con nombre menos de 5 caracteres', () => {
  
    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('abcd', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

test('no se puede crear una canción con nombre vacío', () => {
   
    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

test('no se puede crear una canción con nombre mayor de 20 caracteres', () => {
  
    var tablatura = "";
    var nombre = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }

    for(var j = 1; i<=21 ; j++){

        nombre+="a";

    }
        
    expect(sis.crearCancion(nombre, tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

/*================================================== TABLATURA ============================================================== */

test('no se puede crear una canción tablatura menor a 1000 caracteres', () => {
  
    var tablatura = "";
    
    for(var i = 1; i<=999 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('abcd', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

test('no se puede crear una canción tablatura mayor a 5000 caracteres', () => {
   
    var tablatura = "";
    
    for(var i = 1; i<=5001 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('abcde', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

test('no se puede crear una canción tablatura vacía', () => {
   
    var tablatura = "";
            
    expect(sis.crearCancion('abcde', tablatura, 'autor1' , 'ruta_sonido')).toBeFalsy();
});

/*================================================== AUTOR   ============================================================== */

test('no se puede crear una canción con autor menos de 5 caracteres', () => {
   
    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, 'auto' , 'ruta_sonido')).toBeFalsy();
});

test('no se puede crear una canción con autor vacío', () => {
  
    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, '' , 'ruta_sonido')).toBeFalsy();
});

test('no se puede crear una canción con autor mayor a 20 caracteres', () => {
   
    var tablatura = "";
    var autor = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }

    for(var j = 1; i<=21 ; i++){

        autor+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, '' , 'ruta_sonido')).toBeFalsy();
});

/*================================================== RUTA_SONIDO============================================================ */


test('no se puede crear una canción con ruta_sonido vacío', () => {
  
    var tablatura = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, 'autor' , '')).toBeFalsy();
});

test('no se puede crear una canción con ruta_sonido mayor a 100 caracteres', () => {
   
    var tablatura = "";
    var ruta_sonido = "";
    
    for(var i = 1; i<=1000 ; i++){

        tablatura+="a";

    }

    for(var j = 1; i<=101 ; i++){

        ruta_sonido+="a";

    }
        
    expect(sis.crearCancion('nombre', tablatura, 'autor1' , ruta_sonido)).toBeFalsy();
});



/* =============================== PRUEBAS UNITARIAS DE CREAR LECCIÓN ====================================================== 

  Una lección tiene:

 ** Nombre que NO puede ser vacío y tiene entre 5 y 20 caracteres
 ** Descripción Corta que NO puede ser vacío y tiene entre 10 y 250 caracteres
 ** Descripción Larga que NO puede ser vacío y tiene entre 10 y 2000 caracteres
 ** Una Canción que NO null
 ** Ruta a un archivo de imagen que NO puede ser vacío y como máximo 100 caracteres


========================================================================================================================= */



test('crear una lección correctamente', () => {
       
    var canc = new sistema.cancion.Cancion();

    expect(sis.crearLeccion('nombre', 'descripciónCorta', canc, "ruta_imagen", "descripcionLarga")).toBeTruthy();
});


/*================================================== CANCION ============================================================ */

test('no se puede crear una lección sin cancion', () => {
       
    var canc = null;
    
    expect(sis.crearLeccion('nombre', 'descripciónCorta', canc, "ruta_imagen", "descripcionLarga")).toBeFalsy();
});

/*================================================== NOMBRE ============================================================ */

test('no se puede crear una lección con nombre vacío', () => {
       
    var canc = new sistema.cancion.Cancion();
    
    expect(sis.crearLeccion('', 'descripciónCorta', canc, "ruta_imagen", "descripcionLarga")).toBeFalsy();
});

test('no se puede crear una leccion con nombre menos de 5 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    
    expect(sis.crearLeccion('abcd', 'descripciónCorta', canc, "ruta_imagen", "descripcionLarga")).toBeFalsy();
});

test('no se puede crear una leccion con nombre más de 20 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    var nombre = "";
    
    for(var i = 1; i<=21 ; i++){

        nombre+="a";

    }
    
    expect(sis.crearLeccion(nombre, 'descripciónCorta', canc, "ruta_imagen", "descripcionLarga")).toBeFalsy();
});

/*================================================== DESCRIPCION CORTA ============================================================ */

test('no se puede crear una lección con descripción corta vacía', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    
    expect(sis.crearLeccion("nombre", '', canc, "ruta_imagen", "descripcionLarga")).toBeFalsy();
});




test('no se puede crear una leccion con descripcion corta menos de 10 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    var descripcion = "";
    
    for(var i = 1; i<=9 ; i++){

        descripcion+="a";

    }
    
    expect(sis.crearLeccion("nombre", '123456789', canc, "ruta_imagen", "descripcionLarga")).toBeFalsy();
});

test('no se puede crear una leccion con descripcion corta más de 250 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    var descripcionCorta = "";
    
    for(var i = 1; i<=251 ; i++){

        descripcionCorta+="a";

    }
    
    expect(sis.crearLeccion("nombre", descripcionCorta , canc, "ruta_imagen", "descripcionLarga")).toBeFalsy();
});


/*================================================== DESCRIPCION LARGA ============================================================ */

test('no se puede crear una lección con descripción LARGA vacía', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    
    expect(sis.crearLeccion("nombre", 'descripción corta', canc, "ruta_imagen", "")).toBeFalsy();
});




test('no se puede crear una leccion con descripcion larga menos de 10 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    var descripcionLarga = "";
    
    for(var i = 1; i<=9 ; i++){

        descripcionLarga+="a";

    }
    
    expect(sis.crearLeccion("nombre", 'descripción corta', canc, "ruta_imagen", descripcionLarga)).toBeFalsy();
});

test('no se puede crear una leccion con descripcion larga más de 2000 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    var descripcionLarga = "";
    
    for(var i = 1; i<=2001 ; i++){

        descripcionLarga+="a";

    }
    
    expect(sis.crearLeccion("nombre", 'descripción corta', canc, "ruta_imagen", descripcionLarga)).toBeFalsy();
});

/*================================================== RUTA_FOTO ============================================================ */

test('no se puede crear una lección con ruta_imagen vacía', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    
    expect(sis.crearLeccion("nombre", 'descripción corta', canc, "", "descripcionLarga")).toBeFalsy();
});


test('no se puede crear una leccion con ruta_imagen con largo más de 100 caracteres', () => {
   
    
    var canc = new sistema.cancion.Cancion();
    var ruta_imagen = "";
    
    for(var i = 1; i<=101 ; i++){

        ruta_imagen+="a";

    }
   
    
    expect(sis.crearLeccion("nombre", 'descripción corta', canc, ruta_imagen , "descripcionLarga")).toBeFalsy();
});



/* =============================== PRUEBAS UNITARIAS TRAER CANCIÓN ====================================================== 

 Las canciones se guardan en una lista de canciones en la clase sistema
 Las canciones tienen un atributo que las identifica que es el id
 En estas pruebas vamos a probar buscar una canciónes en la lista de canciones.

========================================================================================================================= */



test('al intentar traer una canción que no existe retorna null', () => {
    
    var idCancion = 100;
    
    expect(sis.traerCancion(idCancion)).toBeNull();

});


test('al intentar traer una canción que existe la retorna', () => {
    
    //PRIMERO CREO LA CANCION

    var tablatura = "";
    for(var i = 1; i<=1000 ; i++){
        tablatura+="a";
    }

    cancionCreada = sis.crearCancion('nombre', tablatura, 'autor1' , 'ruta_sonido');
       
    var laCancion = sis.traerCancion(cancionCreada.id);
    var id = laCancion.id;
    expect(laCancion).not.toBeNull();
    expect(id).toBe(cancionCreada.id);
    
});


test('el sistema me crea correctamente 10 canciones de prueba', () => {
    
    sis.cargarCanciones()
       
    expect(sis.listaCanciones.length).toBe(10);

});

test('el sistema me crea correctamente 10 lecciones de prueba', () => {
    
    sis.cargarLecciones()
       
    expect(sis.listaLecciones.length).toBe(10);

});