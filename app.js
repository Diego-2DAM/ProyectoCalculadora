"use strict";

// Funcion para realizar la operación seleccionada por el usuario
function calcular(primerNumero, segundoNumero, operacionSeleccionada) {

    switch (operacionSeleccionada) {

        case "suma":
            return primerNumero + segundoNumero;

        case "resta":
            return primerNumero - segundoNumero;

        case "multiplicacion":
            return primerNumero * segundoNumero;

        case "division":
            return primerNumero / segundoNumero;

        case "potencia":
            return primerNumero ** segundoNumero;

        case "resto":
            return primerNumero % segundoNumero;

        default:
            return null;
    }
}

// Cogemos los elementos del formulario
let formularioCalculadora = document.getElementById("calculadora");
let campoPrimerNumero = document.getElementById("numero1");
let campoSegundoNumero = document.getElementById("numero2");
let selectorOperacion = document.getElementById("operacion");
let mensajeResultado = document.getElementById("resultado");
let mensajeError = document.getElementById("error");
let botonLimpiarCalculadora = document.getElementById("limpiar");

// Recogemos los datos cuando pulsamos calcular
function mostrarResultado(evento) {

    evento.preventDefault();

    // Borramos los errores y resultados anteriores
    mensajeError.textContent = "";
    mensajeResultado.textContent = "";

    // Comprobamos que ninguno de los campos este vacio
    if (campoPrimerNumero.value.trim() == "" || campoSegundoNumero.value.trim() == "") {

        mensajeError.textContent = "Debes introducir los dos numeros";
        return;
    }

    // Cogemos los numeros introducidos y la operacion seleccionada
    let primerNumeroIntroducido = Number(campoPrimerNumero.value);
    let segundoNumeroIntroducido = Number(campoSegundoNumero.value);
    let operacionSeleccionada = selectorOperacion.value;

    // Comprobamos que los dos numeros sean finitos
    if (!Number.isFinite(primerNumeroIntroducido) || !Number.isFinite(segundoNumeroIntroducido)) {

        mensajeError.textContent = "Debes introducir numeros validos";
        return;
    }

    // Comprobamos que no se haga una division o resto entre cero
    if ((operacionSeleccionada == "division" || operacionSeleccionada == "resto") && segundoNumeroIntroducido == 0) {

        mensajeError.textContent = "No se puede dividir entre cero";
        return;
    }

    // Realizamos la operacion seleccionada
    let resultadoOperacion = calcular(primerNumeroIntroducido, segundoNumeroIntroducido, operacionSeleccionada);

    // Comprobamos que la operacion seleccionada sea valida
    if (resultadoOperacion == null) {

        mensajeError.textContent = "La operacion seleccionada no es valida";
        return;
    }

    // Comprobamos que el resultado de la operacion sea finito
    if (!Number.isFinite(resultadoOperacion)) {

        mensajeError.textContent = "El resultado no es un numero finito";
        return;
    }

    // Mostramos la operacion junto al resultado obtenido
    mensajeResultado.textContent = operacionSeleccionada + ": " + resultadoOperacion;
}

// Añadimos el evento al formulario
formularioCalculadora.addEventListener("submit", mostrarResultado);

// Funcion para limpiar la calculadora
function limpiarCalculadora() {

    // Vaciamos los dos campos numericos
    campoPrimerNumero.value = "";
    campoSegundoNumero.value = "";

    // Volvemos a seleccionar la suma
    selectorOperacion.value = "suma";

    // Borramos los resultados y errores anteriores
    mensajeResultado.textContent = "";
    mensajeError.textContent = "";

    // Devolvemos el foco al primer campo
    campoPrimerNumero.focus();
}

// Añadimos el evento al boton limpiar
botonLimpiarCalculadora.addEventListener("click", limpiarCalculadora);