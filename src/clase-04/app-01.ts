export {};

//miembros publicos

class Curso {
    constructor(private id: number,private nombre: string){}
}


class EscuelaDigital {
    //atributos
    private cursos: Curso[] = [];
    //funcion que nos permite crear objetos
    constructor(private nombre: string){}

    agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('Escuela')
let cursoJ = new Curso(1, 'Java')
let cursoA = new Curso(2, 'Angular')
escuela.agregarCurso(cursoJ)
escuela.agregarCurso(cursoA)
//aceder a los atributos publicos
console.log('escuela', escuela)