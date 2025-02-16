export {}; //modulo en TS
//alias para tipos de datos en Typescript
let cursoNuevo: string = 'Typescript'

//cursos codigo: javacript = 1, typescript = 2
// curso = 1; //javascript
let curso2: string | number;
curso2 = 'Java'
curso2 = 2

function getCurso(): string | number{
    //return 'Javascript'
    return 1;
}

//areglos
let cursos: string[] = ['Javascript', 'Java']
let cursos3: (string | number | boolean)[] = ['Javascript', 'Java', 2, true]

console.log('cursos', cursos)
console.log('cursos 2', cursos3)

