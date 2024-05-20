/**
 * Un buen caso para usar switch
 *
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 *
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo trimestre"
 *
 * Explora esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 *
 */

let mes = 4;
let trimestre;

// Escribir tu código a partir de aquí

switch(mes){
    case 1: 
    case 2:
    case 3:
    case 4:
    trimestre = "first"
}
console.log("We are in the", trimestre, "trimestre");