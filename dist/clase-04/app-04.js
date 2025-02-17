"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//herencia de clases
//modificadores de acceso
class Curso {
    constructor(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    get id() { return this._id; }
    get nombre() { return this._nombre; }
}
class Escuela {
    constructor(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.cursos = [];
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get nombre() { return this._nombre; }
    set nombre(nombre) { this._nombre = nombre; }
    agregarCurso(curso) {
        this.cursos.push(curso);
    }
}
class EscuelaDigital extends Escuela {
    constructor(id, nombre, _paginaWeb) {
        super(id, nombre); //reusar el constructor de la superclase
        this._paginaWeb = _paginaWeb;
    }
    get paginaWeb() { return this._paginaWeb; }
    set paginaWeb(paginaWeb) { this._paginaWeb = paginaWeb; }
}
const escuela = new EscuelaDigital(1, 'Escuela', 'EscuelaVirtual.com');
let cursoJ = new Curso(1, 'Java');
let cursoA = new Curso(2, 'Angular');
escuela.agregarCurso(cursoJ);
escuela.agregarCurso(cursoA);
//aceder a los atributos publicos
//cursoJ.nombre = 'Javascript' ///usando set
//cursoJ.id = 20 //usando set
console.log('escuela', escuela);
console.log('escuelaPaginaWeb', escuela.paginaWeb);
