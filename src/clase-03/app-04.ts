// enumerados en typescript

//type Curso = string | number;

enum Curso{
    Javascript,
    Typescript,
    Angular
}
let curso2 : Curso = Curso.Javascript;
console.log('curso', curso2)
console.log('curso', Curso[curso2])


enum Dia{
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes
}

console.log('Viernes', Dia.Viernes)

enum FinSemana {
    Sabado = 5,
    Domingo
}

console.log('Sabado', FinSemana.Sabado)
console.log('Domingo', FinSemana.Domingo)


// control sobre los valores a enumerar
enum Mes{
    Enero = 'Ene',
    Febrero = 'Feb',
    Marzo = 'Mar',
    Abril = 'Abr'
}

console.log('Marzo', Mes.Marzo)