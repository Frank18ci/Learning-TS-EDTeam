"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//aserciones de tipo en typescript | Type assertions
let codigoCurso;
codigoCurso = "sdfsdf";
let numeroCurso = codigoCurso;
console.log('numeroCurso', numeroCurso);
let estudiante = { nombre: "", curso: "" };
estudiante.nombre = 'Frank';
estudiante.curso = 'react';
let estudiante2 = {};
estudiante2.curso = "React";
estudiante2.nombre = "Juan";
let estudiante3 = `{"nombre": "Juan", "curso": "Javascript"}`;
let objetoEstudiante = JSON.parse(estudiante3);
console.log('estudiante', objetoEstudiante);
