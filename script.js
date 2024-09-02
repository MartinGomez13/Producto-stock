const StockTotal = [];

let producto;
let cantidad;

function AgregarStock(){
    producto = prompt("Ingrese un producto para agregar al stock");
    cantidad = prompt("Ingrese una cantidad para agregar al stock");
    let cantidadNumerica = parseInt(cantidad);
    if(producto != "" && cantidadNumerica != "0"){
    console.log("Ingresaste "+ cantidadNumerica + " unidades de " + producto);
    StockTotal.push (producto);
    } else{
        alert("Datos incorrectos")
    }
}

let bucle = true
while(bucle){
    AgregarStock()
    bucle = confirm("Desea agregar otro producto?")
};

console.log(StockTotal)

