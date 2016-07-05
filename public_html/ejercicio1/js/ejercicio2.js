
/*------------------------------------------------------------------------*/
console.log("Ejercicio 1.");
var ex01 = (function () {
    var texto = "la figura 4a divideix un heptagon de dues maneres diferents";
    var remplazar = texto.replace(/a/g, "A");
    console.log(remplazar);
})();

/*-------------------------------------------------------------------------*/
console.log("Ejercicio 2.");
var ex02 = (function () {
    var v = [4, 5, 9, 6, 1, 7, 8, 5, 3, 0, 2];
    var numero = 5;
    var i = 0;
    var pos = 0;
    for (i = 0; i < v.length; i++) {
        if (v[i] === numero) {
            pos=[i];
            break;
        }
    }
    console.log("La posición del 5 es: "+i);
})();


/*--------------------------------------------------------------------------*/
console.log("Ejercicio 3.");

var ex03 = (function (){
    var texto="Amanece, la casa es de color amarillo, verde i azul.";
    var palabras = texto.split(" ");
    
    
    
})(); 

/*--------------------------------------------------------------------------*/
