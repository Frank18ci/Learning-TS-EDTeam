"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//miembros publicos
class Curso {
    constructor(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get nombre() { return this._nombre; }
    set nombre(nombre) { this._nombre = nombre; }
}
class EscuelaDigital {
    //funcion que nos permite crear objetos
    constructor(_nombre) {
        this._nombre = _nombre;
        //atributos
        this.cursos = [];
    }
    agregarCurso(curso) {
        this.cursos.push(curso);
    }
    get nombre() { return this._nombre; }
    set nombre(nombre) { this._nombre = nombre; }
}
const escuela = new EscuelaDigital('Escuela');
let cursoJ = new Curso(1, 'Java');
let cursoA = new Curso(2, 'Angular');
escuela.agregarCurso(cursoJ);
escuela.agregarCurso(cursoA);
//aceder a los atributos publicos
cursoJ.nombre = 'Javascript'; ///usando set
cursoJ.id = 20; //usando set
console.log('escuela', escuela);
