function validar(form) {

    let nombre = form.nombre.value.trim()

    if (nombre == "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    let edad = form.edad.value.trim()

    if (edad === "" || isNaN(edad) || edad < 14) {
        alert("Por favor, ingrese una edad válida")
        return false;
    }

    let sexo=form.value
    if(sexo==""){
        alert("Por favor, selecciona un sexo")
        return false;

    }

    let deporte=form.deporte.value
    if(deporte==="seleccione"){
        alert("Por favor, seleccione un deporte favorito")
        return false;
    }

//Si todo es valido
    alert("Datos correctos")
    return true;

}
