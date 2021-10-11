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