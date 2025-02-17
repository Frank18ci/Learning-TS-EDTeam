
export {};

import { Curso } from "./model/Curso";
import { EscuelaDigital } from "./model/Escuela-Digital";
import { analizarClase, mostrarPropiedad, PI } from "./utils";

let typescript = new Curso(1, 'Typescript')
analizarClase(Curso);
//sobreescribiendo  la funcion 
//typescript.lectura = function() {} // error usamos decorador readonly
let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostrarPropiedad(Curso)
console.log('PI',PI)

