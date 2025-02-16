export {};

//aserciones de tipo en typescript | Type assertions
let codigoCurso: any;
codigoCurso = "sdfsdf";
let numeroCurso: number = <number>codigoCurso

console.log('numeroCurso', numeroCurso)

let estudiante: {nombre: string, curso: string} = {nombre: "", curso: ""};
estudiante.nombre = 'Frank';
estudiante.curso = 'react';

type Estudiante = {nombre: string, curso: string}

let estudiante2 = <Estudiante>{};
estudiante2.curso = "React"
estudiante2.nombre = "Juan"

let estudiante3 = `{"nombre": "Juan", "curso": "Javascript"}`
let objetoEstudiante: Estudiante = <Estudiante>JSON.parse(estudiante3) 
console.log('estudiante', objetoEstudiante)