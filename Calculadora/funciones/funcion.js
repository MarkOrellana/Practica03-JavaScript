function raiz() {
    document.calcu.entrada_salida.value = Math.sqrt(document.calcu.entrada_salida.value);
}
function porcent() {
    document.calcu.entrada_salida.value = eval(document.calcu.entrada_salida.value) /100;
}
function derivada() {
    document.calcu.entrada_salida.value = 1 / (document.calcu.entrada_salida.value);
}
function cos() {
    document.calcu.entrada_salida.value = Math.cos(document.calcu.entrada_salida.value);
}
function sen() {
    document.calcu.entrada_salida.value = Math.sin(document.calcu.entrada_salida.value);
}
function tan() {
    document.calcu.entrada_salida.value = Math.tan(document.calcu.entrada_salida.value);
}
function eliminar(){
    document.calcu.entrada_salida.value =  document.calcu.entrada_salida.value.substring(0, document.calcu.entrada_salida.value.length - 1)
}

function potencia() {
    var exponente = prompt('Introduzca Exponente: ')
    document.calcu.entrada_salida.value = Math.pow(document.calcu.entrada_salida.value, exponente);
}