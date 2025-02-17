"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entidad = Entidad;
exports.enumerable = enumerable;
exports.readonly = readonly;
function Entidad(config) {
    console.log('Entidad', config);
    return function (target) {
        target.clave = config.clave;
        console.log('target', target);
    };
}
function enumerable(value) {
    return function (target, PropertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
function readonly(target, nane, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
