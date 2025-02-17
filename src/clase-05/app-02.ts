//usando una libreria externa de javascript lodash
//packgage.json
//npm init -y
//npm install lodash --save 
// --save para guardarlo como dependencia en package

import {random} from 'lodash';


function numeroAleatorio(a: number, b: number){
    return random(a, b);
}
console.log('numero aleatorio entre 1 y 10', numeroAleatorio(1, 10))