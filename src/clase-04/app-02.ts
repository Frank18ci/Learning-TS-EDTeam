export {};

//miembros publicos

class Curso {
    constructor(private _id: number,private _nombre: string){}

    get id() {return this._id}
    set id(id: number) {this._id = id}

    get nombre() {return this._nombre}
    set nombre(nombre: string) {this._nombre = nombre}
}


class EscuelaDigital {
    //atributos
    private cursos: Curso[] = [];
    //funcion que nos permite crear objetos
    constructor(private _nombre: string){}

    agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }

    get nombre() {return this._nombre}
    set nombre(nombre: string) {this._nombre = nombre}
}

const escuela = new EscuelaDigital('Escuela')
let cursoJ = new Curso(1, 'Java')
let cursoA = new Curso(2, 'Angular')
escuela.agregarCurso(cursoJ)
escuela.agregarCurso(cursoA)
//aceder a los atributos publicos
cursoJ.nombre = 'Javascript' ///usando set
cursoJ.id = 20 //usando set
console.log('escuela', escuela)
