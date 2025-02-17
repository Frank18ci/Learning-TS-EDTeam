"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Curso_1 = require("./model/Curso");
const Escuela_Digital_1 = require("./model/Escuela-Digital");
const utils_1 = require("./utils");
let typescript = new Curso_1.Curso(1, 'Typescript');
(0, utils_1.analizarClase)(Curso_1.Curso);
//sobreescribiendo  la funcion 
//typescript.lectura = function() {} // error usamos decorador readonly
let escuela = new Escuela_Digital_1.EscuelaDigital();
(0, utils_1.analizarClase)(Escuela_Digital_1.EscuelaDigital);
(0, utils_1.mostrarPropiedad)(Curso_1.Curso);
console.log('PI', utils_1.PI);
