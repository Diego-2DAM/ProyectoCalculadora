"use strict";

// Funcion para realizar la operación seleccionada por el usuario
function calcular(numero1, numero2, operacion) {

    switch (operacion) {

        case "suma":
            return numero1 + numero2;

        case "resta":
            return numero1 - numero2;

        case "multiplicacion":
            return numero1 * numero2;

        case "division":
            return numero1 / numero2;

        case "potencia":
            return numero1 ** numero2;

        case "resto":
            return numero1 % numero2;
    }
}

// Cogemos los elementos del formulario
let formulario = document.getElementById("calculadora");
let campoNumero1 = document.getElementById("numero1");
let campoNumero2 = document.getElementById("numero2");
let campoOperacion = document.getElementById("operacion");
let resultado = document.getElementById("resultado");

// Recogemos los datos cuando pulsamos calcular
function mostrarResultado(evento) {

    evento.preventDefault();

    // Cogemos los numeros y la operacion seleccionada
    let numero1 = Number(campoNumero1.value);
    let numero2 = Number(campoNumero2.value);
    let operacion = campoOperacion.value;

    // Realizamos la operacion y mostramos el resultado
    let total = calcular(numero1, numero2, operacion);

    resultado.textContent = "Resultado: " + total;
}

// Añadimos el evento al formulario
formulario.addEventListener("submit", mostrarResultado);