//tipos basicos typescript
//boolean
let estado = true;
let conectado: boolean;
conectado = false;


function tieneDescuento(curso: string): boolean{
    return curso === "typescript" ? true : false;
}

console.log(`tiene descuento('angular'):`, tieneDescuento('angular'))

//Number

let estudiantes = 100

let cantidadDeEstudiantes: number
cantidadDeEstudiantes = 150

function getCantidadEstudiantes(curso: string): number{
    return curso === "typescript" ? 100 : 0
}

//Number, hexadecimal

let hexadecimal: number = 0xf00d;
console.log('hexadecimal', hexadecimal)

let binario: number = 0b1001;
console.log('binario', binario)

let octal: number = 0o755
console.log('octal', octal)

//String 
let nombre: string = 'Frank'
let apellido: string = 'Carpio'

let nombreComppleto = nombre + " " + apellido
console.log('nombre completo', nombreComppleto)

let nombreCompleto2 = `${nombre} ${apellido}`

let arregloCursos = ['Typescript', 'Angular']
let mensaje = `Mi nombre es ${nombre} y tengo ${arregloCursos.length} gracias`
console.log(mensaje)


//tipo especial
//any
let desconocido; //var desconocido
desconocido = 'holaa'
desconocido = 2

let desconocido2: any = 2


//tipo void
let vacio: void;

function mostrarContenido(curso: string): void{
    const mensaje = curso ? `Bienvenido al curso ${curso}` : 'Suscribete'
    console.log(mensaje)
}
mostrarContenido('Typescript')


//tipo Never
let nunca: never;

function retornarError(error: string): never{
    throw new Error("Error en funcion " + error)
    //nunca retorna un valor
}

//retornarError('Valor inesperado')

function clicloInfinito(): never{
    while(true){
    }
}

// Tipo null y undefined
let variableUndefined: undefined = undefined;
let variableNull: null = null;

function retornoNull(): null{
    return null;
}

function retornoUndefined(): undefined{
    return undefined;
}

let variableSinValor;
console.log('variable sin valor', variableSinValor)

//funciones en typescript

function saludo2(nombre?: string): string{
    return nombre ? 'Hola ' + nombre : 'Hola'
}
console.log(saludo2(nombreCompleto2))
console.log(saludo2())


//Arreglos de typescript
let cursosNuevos : string[] = ['Typescript', 'React', 'Angular'];

let nombres : Array<string>
nombres = ['Juan', 'Marco']

let arreglo: any[] = [2, 'cadena', true]

//tuplas

let infoCursos: [string, number] = ['typescript', 100]
infoCursos = ['angular', 500]

let curso: [string, number, string] = ['typeScript', 150, '08/2019']

console.log('fecha de inicio de curso', curso[2])
console.log('total inscritos', curso[1])


let tuplaTest: [string, string] = ['a', 'b']
let tuplaTemp: [string, string] = ['c', 'd']

tuplaTemp = tuplaTest
console.log('tuplaTest', tuplaTemp)
