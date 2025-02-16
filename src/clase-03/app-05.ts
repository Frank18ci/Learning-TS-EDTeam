// interfaces en tsc
interface ICurso{
    nombre: string;
    identificador?: number;   
}

let cursoTypescript: ICurso ={
    nombre: 'Typescript',
    identificador: 1
}

cursoTypescript = {
    nombre: 'Java',
    identificador: 2
}

let curso3: ICurso;

curso3 = {
    nombre: 'Angular'
}
curso3 = {
    nombre: 'React',
    identificador: 10
}

console.log('cursoTypescript', cursoTypescript)

//extendiendo interfaces | herencia de interfaces
interface CursoEspecial extends ICurso{
    costo: number;
}

const primerCurso: CursoEspecial = {
    nombre: 'Spring boot', //ICurso
    identificador: 1, //ICurso
    costo: 100 //CursoEspecial
}

console.log('primerCurso', primerCurso)

