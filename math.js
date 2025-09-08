function Tabla(opcion) {
    switch (opcion) {
        case 1:
            function suma(a,b) {
                return a + b;
            }
            exports.suma = suma;
            break;
        case 2:
            function resta(a,b) {
                return a - b;
            }
            exports.resta = resta;
            break;
        case 3:
            function multiplicacion(a,b) {
                return a * b;
            }
            exports.multiplicacion = multiplicacion;
            break;
        case 4:
            function division(a,b) {
                if (b === 0) {
                    console.log("no se puede dividir por cero");
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