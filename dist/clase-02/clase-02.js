"use strict";
//tipos basicos typescript
//boolean
let estado = true;
let conectado;
conectado = false;
function tieneDescuento(curso) {
    return curso === "typescript" ? true : false;
}
console.log(`tiene descuento('angular'):`, tieneDescuento('angular'));
//Number
let estudiantes = 100;
let cantidadDeEstudiantes;
cantidadDeEstudiantes = 150;
function getCantidadEstudiantes(curso) {
    return curso === "typescript" ? 100 : 0;
}
//Number, hexadecimal
let hexadecimal = 0xf00d;
console.log('hexadecimal', hexadecimal);
let binario = 0b1001;
console.log('binario', binario);
let octal = 0o755;
console.log('octal', octal);
//String 
let nombre = 'Frank';
let apellido = 'Carpio';
let nombreComppleto = nombre + " " + apellido;
console.log('nombre completo', nombreComppleto);
let nombreCompleto2 = `${nombre} ${apellido}`;
let arregloCursos = ['Typescript', 'Angular'];
let mensaje = `Mi nombre es ${nombre} y tengo ${arregloCursos.length} gracias`;
console.log(mensaje);
//tipo especial
//any
let desconocido; //var desconocido
desconocido = 'holaa';
desconocido = 2;
let desconocido2 = 2;
//tipo void
let vacio;
function mostrarContenido(curso) {
    const mensaje = curso ? `Bienvenido al curso ${curso}` : 'Suscribete';
    console.log(mensaje);
}
mostrarContenido('Typescript');
//tipo Never
let nunca;
function retornarError(error) {
    throw new Error("Error en funcion " + error);
    //nunca retorna un valor
}
//retornarError('Valor inesperado')
function clicloInfinito() {
    while (true) {
    }
}
// Tipo null y undefined
let variableUndefined = undefined;
let variableNull = null;
function retornoNull() {
    return null;
}
function retornoUndefined() {
    return undefined;
}
let variableSinValor;
console.log('variable sin valor', variableSinValor);
//funciones en typescript
function saludo2(nombre) {
    return nombre ? 'Hola ' + nombre : 'Hola';
}
console.log(saludo2(nombreCompleto2));
console.log(saludo2());
//Arreglos de typescript
let cursosNuevos = ['Typescript', 'React', 'Angular'];
let nombres;
nombres = ['Juan', 'Marco'];
let arreglo = [2, 'cadena', true];
//tuplas
let infoCursos = ['typescript', 100];
infoCursos = ['angular', 500];
let curso = ['typeScript', 150, '08/2019'];
console.log('fecha de inicio de curso', curso[2]);
console.log('total inscritos', curso[1]);
let tuplaTest = ['a', 'b'];
let tuplaTemp = ['c', 'd'];
tuplaTemp = tuplaTest;
console.log('tuplaTest', tuplaTemp);
