let cuentaARS = 100000
let cuentaUSS = 100.94

let TNA = 118
function plazofijo(inversion, plazo, tasa) {
    return plazo * (tasa/100) /360 * inversion;
}

function login() {
    let autorizado = false
    let intentos = 3
    let clave = ""

    for (let i = intentos; i > 0; i--){
        let ingreso = prompt('¡Bienvenido a tu HomeBanking! Ingresa tu clave\nSi es tu primera vez deja el espacio en blanco')
            if (ingreso == clave) {
                alert("Ingresaste correctamente");
                autorizado = true;
                break;
            } else {
                alert("Clave Incorrecta, te quedan " + (i - 1) + " intentos")
            }
    }
    return autorizado
}


if (login()) {

        //Empieza el menu seleccionable
        let operacion = prompt("¿Que deseas hacer?\n1 - Ver saldos\n2 - Ver tus tarjetas\n3 - Depositar\n4 - Constituir un Plazo Fijo\n0 - Salir");
            
            //Combinando el while con el switch puedo crear un menu seleccionable
            while (operacion != 0){
                switch (operacion) {
                    case "1":
                        alert("Saldos:\nCuenta $ 123-123456-1: $"+ cuentaARS +" pesos\nCuenta U$S 123-123456-1: U$S"+ cuentaUSS +" dolares");
                        break;
                    case "2":
                        alert("Tarjetas\nMasterCard 9353: $13000 gastados de $120000 de limite\nVisa 4175: $1500 gastados de $120000 de limite");
                        break;
                    case "3":
                        let deposito = parseInt(prompt("Ingrese el importe a depositar:"));
                        cuentaARS = cuentaARS + deposito
                        alert("Su nuevo saldo es $"+ cuentaARS)
                        break;
                    case "4":
                        let importe = parseInt(prompt("Ingrese el importe a invertir:"))
                        if (importe <= cuentaARS) {
                            let dias = parseInt(prompt("Plazo de inversion:"));
                            if (dias >= 30) {
                                alert("Luego de "+ dias +" dias, se le acreditaran $"+ plazofijo(importe, dias, TNA) +" en su cuenta");
                                cuentaARS = cuentaARS - importe;
                            } else {
                                alert("Seleccione un plpazo mayor o igual a 30")
                            }
                        } else {
                            importe = prompt("Usted no cuenta con los montos necesarios");
                        }
                        break;
                        
                        // Trate de hacerlo con un while, pero me loopeaba el primero y no podia salir de la eleccion del plazo en caso de que elija menor a 30 dias
                        // while (importe <= cuentaARS) {
                        //     let dias = parseInt(prompt("Plazo"))
                        //     while (dias >= 30) {
                        //         let interes = dias * (TNA/100) / 360 * importe;
                        //         alert("Luego de "+ dias +" dias, se le acreditaran $"+ interes +" en su cuenta");
                        //         cuentaARS = cuentaARS - importe;
                        //         continue;
                        //     }
                        //     dias = parseInt(prompt("Elija un plazo mayor o igual a 30 dias"));
                        // }
                        // importe = parseInt(prompt("Usted no cuenta con los montos necesarios, indique otro monto:"));
                        // break;


                    default:
                        alert("Elegiste un opcion invalida")
                }
                operacion = prompt("¿Que deseas hacer?\n1 - Ver saldos\n2 - Ver tus tarjetas\n3 - Depositar\n4 - Constituir un Plazo Fijo\n0 - Salir");
            }
    } else {
        alert("Demasiados intentos fallidos, espera unos segundos y refresca la pagina.")
}
alert("Muchas gracias por operar con nosotros")