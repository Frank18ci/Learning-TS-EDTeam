"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//miembros publicos
class Curso {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
class EscuelaDigital {
    //funcion que nos permite crear objetos
    constructor(nombre) {
        this.nombre = nombre;
        //atributos
        this.cursos = [];
    }
    agregarCurso(curso) {
        this.cursos.push(curso);
    }
}
const escuela = new EscuelaDigital('Escuela');
let cursoJ = new Curso(1, 'Java');
let cursoA = new Curso(2, 'Angular');
escuela.agregarCurso(cursoJ);
escuela.agregarCurso(cursoA);
//aceder a los atributos publicos
console.log('escuela', escuela);
