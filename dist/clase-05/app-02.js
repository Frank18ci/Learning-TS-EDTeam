"use strict";
//usando una libreria externa de javascript lodash
//packgage.json
//npm init -y
//npm install lodash --save 
// --save para guardarlo como dependencia en package
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function numeroAleatorio(a, b) {
    return (0, lodash_1.random)(a, b);
}
console.log('numero aleatorio entre 1 y 10', numeroAleatorio(1, 10));
