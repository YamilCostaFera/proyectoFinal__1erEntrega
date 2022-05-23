alert('BIENVENIDOS A DULCE PASTELERIA');
let saldo = 0;
let inicio = prompt('Elija sus productos favoritos para añadir al carrito. \n Seleccione la torta que desee: \n 1- Oreo Cake ($1500) \n 2- Choco Oreo ($1650)  \n 3- Chocotorta ($2100) \n 4- Cheesecake ($1950)\n 5- Tiramisú ($1250)\n 6- Ver mi carrito \n 7-Finalizar compra');
const descuento = (a,b) => a*b;
const pedido = [];



while (inicio != '7') {
    switch (inicio) {
        case '1':
            saldo = saldo + 1500;
            alert('Su saldo es ' + saldo);
            break;
        case '2':
            saldo = saldo + 1650;
            alert('Su saldo es ' + saldo);
            break;

        case '3':
            saldo = saldo + 2100;
            alert('Su saldo es ' + saldo);
            break;

        case '4':
            saldo = saldo + 1950;
            alert('Su saldo es ' + saldo);
            break;

        case '5':
            saldo = saldo + 1250;
            alert('Su saldo es ' + saldo);
            break;

        case '6':
            let total = prompt('El total de tu pedido es ' + saldo + '\n Escriba el codigo de descuento\n (10% - DDULCE10 | 20% - DDULCE20), para finalizar la compra presiona X');
            while (total != 'X') {
                switch (total) {
                    case 'DDULCE10':
                        saldo = descuento (saldo,0.9);
                        alert('Con el descuento su saldo es ' + saldo);
                        break;
                    case 'DDULCE20':
                        saldo = descuento (saldo,0.9);
                        alert('Con el descuento su saldo es ' + saldo);
                        break;
                    default:
                        alert(descuento + ' no es una opcion valida');
                        break;
                }
                alert('El total de su compra es ' + saldo);    
            }
            alert('El total de su compra es ' + saldo);
        break;
        
        default:
            alert(inicio + ' no es una opcion valida');
            break;
    }
    pedido.push(saldo);
    inicio = prompt('Elija sus productos favoritos para añadir al carrito. \n Seleccione la torta que desee: \n 1- Oreo Cake ($1500) \n 2- Choco Oreo ($1650)  \n 3- Chocotorta ($2100) \n 4- Cheesecake ($1950)\n 5- Tiramisú ($1250)\n 6- Ver mi carrito \n 7-Finalizar compra');

}
alert('Finalizaste la compra! Te esperamos pronto!');
console.log(pedido);