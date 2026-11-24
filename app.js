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