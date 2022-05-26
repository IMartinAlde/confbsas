const precioTotal = 200;

function resumir(){
    var cantidadTicket = document.getElementById('inputCantidad').value;
    var descuento = document.getElementById('inputCategoria').value;
    console.log(cantidadTicket);
    console.log(descuento);

    var precio = Math.round(cantidadTicket * precioTotal * (1 - descuento));

    document.getElementById('compraTotal').value = "Total a pagar: $" + precio;
}