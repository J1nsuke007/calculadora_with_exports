function Tabla(opcion) {
    switch (opcion) {
        case 1:
            function suma(a,b) {
                return a + b;
            }
            exports.suma = suma;//exportamos la funcion suma
            break;
        case 2:
            function resta(a,b) {
                return a - b;
            }
            exports.resta = resta;//exportamos la funcion resta
            break;
        case 3:
            function multiplicacion(a,b) {
                return a * b;
            }
            exports.multiplicacion = multiplicacion;//exportamos la funcion multiplicacion
            break;
        case 4:
            function division(a,b) {
                if (b === 0) {
                    console.log("no se puede dividir por cero");//al momento de dividir entre 0 nos sale un error en la consola
                    //para evitar que rompa el codigo, mejos usamos una condicional
                } else {
                    return a / b;
                    
                }
            }
            exports.division = division;
            break;
    
        default:
            console.log("no hay mas opciones")
        break;
    }
    return opcion;
}
exports.Tabla = Tabla;
