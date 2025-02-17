import { Entidad, enumerable, readonly } from "../decorators";

@Entidad({
    clave: 'Curso'
})
export class Curso {
    prueba: string;
    constructor(private _id: number, private _nombre: string){
        this.prueba = ''
    }

    //decorador de funcion
    @enumerable(true)
    getPrueba(){
        return this.prueba
    }

    @readonly
    lectura(){

    }

    get id(){return this._id}
    set id(id: number){this._id = id}

    get nombre(){return this._nombre}
    set nombre(nombre: string){this._nombre = nombre}
}
