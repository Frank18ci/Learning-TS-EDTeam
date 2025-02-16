export {}; //modulo en TS
//alias para tipos de datos en Typescript
let cursoNuevo: string = 'Typescript'

//cursos codigo: javacript = 1, typescript = 2
// curso = 1; //javascript

//uso de tipo de dato type
type Curso = string | number;

let curso2: Curso;
curso2 = 'Java'
curso2 = 2

function getCurso(): Curso{
    //return 'Javascript'
    return 1;
}

//areglos
let cursos: string[] = ['Javascript', 'Java']
let cursos3: Curso[] = ['Javascript', 'Java', 2]

console.log('cursos', cursos)
console.log('cursos 2', cursos3)

