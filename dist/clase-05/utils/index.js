"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.analizarClase = analizarClase;
exports.mostrarPropiedad = mostrarPropiedad;
function analizarClase(clase) {
    console.log('Clave:', clase.clave);
}
function mostrarPropiedad(clase) {
    for (let prop in clase.prototype) {
        console.log('prop', prop);
    }
}
const PI = 3.1416;
exports.PI = PI;
