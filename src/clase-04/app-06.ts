export {};
//herencia de clases
//modificadores de acceso
//abstrac
//static

enum MisCursos{
    Javascript,
    Typescript,
    Angular
}

class Curso {
    public static cursosDisponibles: MisCursos[] = [MisCursos.Javascript, MisCursos.Typescript];
    constructor(private readonly _id: number,private readonly _nombre: string){}

    get id() {return this._id}
    get nombre() {return this._nombre}

    static getInfo(c: Curso){
        return JSON.stringify(c)
    } 
}

//no deja crear objetos directamente
abstract class Escuela {
    protected cursos: Curso[] = [];
    constructor(protected _id: number, protected _nombre: string){

    }

    get id() {return this._id}
    set id(id: number) {this._id = id}

    get nombre() {return this._nombre}
    set nombre(nombre: string) {this._nombre = nombre}

    agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }
}


class EscuelaDigital  extends Escuela{
    
    constructor(id: number, nombre: string, private _paginaWeb: string){
        super(id, nombre) //reusar el constructor de la superclase
    }
    get paginaWeb() {return this._paginaWeb}
    set paginaWeb(paginaWeb) {this._paginaWeb = paginaWeb}
}


const escuela = new EscuelaDigital(1, 'Escuela', 'EscuelaVirtual.com')
let cursoJ = new Curso(1, 'Java')
let cursoA = new Curso(2, 'Angular')
escuela.agregarCurso(cursoJ)
escuela.agregarCurso(cursoA)
//aceder a los atributos publicos
//cursoJ.nombre = 'Javascript' ///usando set
//cursoJ.id = 20 //usando set
console.log('escuela', escuela)
console.log('escuelaPaginaWeb', escuela.paginaWeb)

console.log('Mis Cursos', Curso.cursosDisponibles)
console.log('CursoJS', Curso.getInfo(cursoJ))