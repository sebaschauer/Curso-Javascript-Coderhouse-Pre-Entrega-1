
function validarDatos (dia,fecha){
    let producto = 0;
    let cantidad = 0;
    let preciouni = 0;
    let precioTotal = 0;
    let totalApagar = 0;
    let validar = true;
    verif = dia - fecha;
if (isNaN(fecha) && fecha<dia || verif>=18){
    alert('Bienvenidos a la Tienda Cervecera');
    console.log('Bienvenidos a la Tienda Cervecera');
    ingresarProducto(producto, cantidad, preciouni,precioTotal,totalApagar);
}
else {
    alert('La venta de bebidas alcohólicas está prohibida a menores de 18 años');
    validar = false;
}
return validar;
}
function ingresarProducto (producto, cantidad, preciouni,precioTotal,totalApagar) {
    let validar = true;
    while (validar){
        producto = prompt('Ingrese el nombre del producto que quiere agregar al carrito o "fin" para salir');        
        if(producto !='fin'){
            cantidad = prompt('Ingrese la cantidad:');
            preciouni = parseFloat(prompt ('Ingrese el precio del producto:'));
            precioTotal = cantidad * preciouni;
            console.log(`Su pedido es: ${producto} x ${cantidad} x ${preciouni}`);
            console.log(`El precio total es: ${precioTotal}`);
            totalApagar += precioTotal;
            validar = true; 
        }
        else{
            console.log(`El total a pagar es: ${totalApagar}`);
            let n = 0;
            let cuotas = 0;
            calculoCuotas(totalApagar,n,cuotas);
            console.log('Gracias por su compra');
            validar = false;
        }   
    }
}
function calculoCuotas (totalApagar,n,cuotas,recargo,total){
    console.log('El pago en cuotas tiene un recargo del 6% por cuota')
    n = prompt('Ingrese el numero de cuotas con las que desea realizar el pago:');
    if (n<=1){
        cuotas = totalApagar;
        console.log(`Su pago en una cuota es de: ${cuotas}`)
    }
    else{
        recargo = (0.06*n)*100;
        cuotas = (((0.06*n)+1)*totalApagar)/n;
        total = (((0.06*n)+1)*totalApagar);
        console.log (`El recargo para ${n} cuotas es de: ${recargo}%`)
        console.log (`El monto total con recargo es de: ${total}`);
        console.log(`Su pago en ${n} cuotas es de: ${cuotas.toFixed(2)} por cuota`);
    }

}

let dia = 2023;
let fecha = prompt('Ingrese el año de su nacimiento:')
validarDatos(dia,fecha);
