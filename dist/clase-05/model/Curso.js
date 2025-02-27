"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
const decorators_1 = require("../decorators");
let Curso = class Curso {
    constructor(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.prueba = '';
    }
    //decorador de funcion
    getPrueba() {
        return this.prueba;
    }
    lectura() {
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get nombre() { return this._nombre; }
    set nombre(nombre) { this._nombre = nombre; }
};
exports.Curso = Curso;
__decorate([
    (0, decorators_1.enumerable)(true)
], Curso.prototype, "getPrueba", null);
__decorate([
    decorators_1.readonly
], Curso.prototype, "lectura", null);
exports.Curso = Curso = __decorate([
    (0, decorators_1.Entidad)({
        clave: 'Curso'
    })
], Curso);
