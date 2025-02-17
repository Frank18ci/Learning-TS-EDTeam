export {analizarClase, mostrarPropiedad, PI }

function analizarClase(clase: any){
    console.log('Clave:', clase.clave)
}

function mostrarPropiedad(clase: any){
    for(let prop in clase.prototype){
        console.log('prop',prop)
    }
}

const PI = 3.1416