var distancia;
distancia=prompt('Ingrese un valor:','');

distancia=parseInt(distancia);

if(distancia <= 1000) {
    alert("pie");
}else if(distancia <=10000){
    alert("bicicleta");
}else if(distancia <=30000){
    alert("colectivo");
}else if(distancia <=100000){
    alert("auto");
}else if(distancia >100000){
    alert("avión");}








var numeros = [20, 30, 1, 250, 123, 333];
alert("El array de numeros es " + numeros)
var largest = numeros[0];

for (var i = 0; i < numeros.length; i++) {
    if (largest < numeros[i] ) {
        largest = numeros[i];
    }
}
alert("El numero mas grande es " + largest);