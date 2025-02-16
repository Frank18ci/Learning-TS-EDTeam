"use strict";
// enumerados en typescript
//type Curso = string | number;
var Curso;
(function (Curso) {
    Curso[Curso["Javascript"] = 0] = "Javascript";
    Curso[Curso["Typescript"] = 1] = "Typescript";
    Curso[Curso["Angular"] = 2] = "Angular";
})(Curso || (Curso = {}));
let curso2 = Curso.Javascript;
console.log('curso', curso2);
console.log('curso', Curso[curso2]);
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 0] = "Lunes";
    Dia[Dia["Martes"] = 1] = "Martes";
    Dia[Dia["Miercoles"] = 2] = "Miercoles";
    Dia[Dia["Jueves"] = 3] = "Jueves";
    Dia[Dia["Viernes"] = 4] = "Viernes";
})(Dia || (Dia = {}));
console.log('Viernes', Dia.Viernes);
var FinSemana;
(function (FinSemana) {
    FinSemana[FinSemana["Sabado"] = 5] = "Sabado";
    FinSemana[FinSemana["Domingo"] = 6] = "Domingo";
})(FinSemana || (FinSemana = {}));
console.log('Sabado', FinSemana.Sabado);
console.log('Domingo', FinSemana.Domingo);
// control sobre los valores a enumerar
var Mes;
(function (Mes) {
    Mes["Enero"] = "Ene";
    Mes["Febrero"] = "Feb";
    Mes["Marzo"] = "Mar";
    Mes["Abril"] = "Abr";
})(Mes || (Mes = {}));
console.log('Marzo', Mes.Marzo);
