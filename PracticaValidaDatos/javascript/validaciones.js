function validarCampos() {
    var bandera = false;
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {
            bandera = true;
            if (elemento.id == 'cedula') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCedula").innerHTML = "Campo Cedula obligatorio."
            }
            if (elemento.id == 'nombres') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeNombre").innerHTML = "Campo Nombres obligatorio."
            }
            if (elemento.id == 'apellidos') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeApellido").innerHTML = "Campo Apellidos obligatorio."
            }
            if (elemento.id == 'direccion') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeDireccion").innerHTML = "Campo Direccion obligatorio."
            }
            if (elemento.id == 'telefono') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeTelefono").innerHTML = "Campo Telefono obligatorio."
            }
            if (elemento.id == 'fecha') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeFecha").innerHTML = "Campo Fecha obligatorio."
            }
            if (elemento.id == 'correo') {
                elemento.style.border = "1px red solid"
                document.getElementById("mensajeCorreo").innerHTML = "Campo Correo obligatorio."
            }
        }
    }
    if (bandera) {
        alert('Llenar todos los campos.')
        return false;
    } else {
        return true;
    }
}
function solonumeros(e) {
    key = e.key.code || e.which;
    teclado = String.fromCharCode(key);
    numero = "0123456789";
    especiales = "8-37-38-46";
    teclado_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial = true;
        }
    }
    if (numero.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }
}
function sololetras(e) {
    key = e.key.code || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnopqrstuvwxyz";
    especiales = "8-37-38-46";
    teclado_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial = true; break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }
}
function validarcedula() {
    var i;
    var cedulaM;
    var acumulado;
    cedulaM = document.getElementById("cedula").value;
    var instancia;
    acumulado = 0;
    for (i = 1; i <= 9; i++) {
        if (i % 2 != 0) {
            instancia = cedulaM.substring(i - 1, i) * 2;
            if (instancia > 9) instancia -= 9;
        }
        else instancia = cedulaM.substring(i - 1, i);
        acumulado += parseInt(instancia);
    }
    while (acumulado > 0)
        acumulado -= 10;
    if (cedulaM.substring(9, 10) != (acumulado * -1)) {
        alert("Cedula Incorrecta.");
    } else {
        alert("Cedula Correcta.");
    }
}