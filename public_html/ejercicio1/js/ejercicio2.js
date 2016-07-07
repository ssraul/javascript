
/*------------------------------------------------------------------------*/
console.log("Ejercicio 1.");
var ex01 = (function () {
    var texto = "la figura 4a divideix un heptágon de dues maneres diferents";
    var remplazar = texto.replace(/[aá]/g, "A");
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
            pos = [i];
            break;
        }
    }
    console.log("La posición del 5 es: " + i);
})();

/*--------------------------------------------------------------------------*/
console.log("Ejercicio 3.");
var ex03 = (function () {
    var texto = "Amanece, la casa es de color amarillo, verde i azul.";
    var palabras = texto.split(" ");
    var i = 0;
    var j = 0;
    for (i = 0; i < palabras.length; i++) {
        if (palabras[i][0] === "a" || palabras[i][0] === "A") {
            console.log("Primera palabra que empieza por a es: " + palabras[i]);
            break;
        }
    }
    console.log();
})();


/*--------------------------------------------------------------------------*/
console.log("Ejercicio 4.");

var ex04 = (function () {
    var texto = "La casa familiar estava a un poble petit. la casa era molt maca\n\
i li agradaba a tothom";
    var palabras = texto.split(" ");
    var buscar = "casa";
    var i = 0;
    var pos = 0;
    for (i = 0; i < palabras.length; i++) {
        if (palabras[i] === buscar) {
            pos = [i];
        }
    }
    console.log("última posición de casa en el texto es:" + pos);
})();

/*--------------------------------------------------------------------------*/
var ex05prueba = (function () {
    var persona = {
        nombre: 'raul',
        edad: 18,
        saludo: function (nombre) {
            console.log("hola " + nombre);
        }
    };
    console.log(persona.nombre);
    persona.saludo("dani");

})();

//console.log("Ejercicio 5. Método del Caesar.");
//var Caesar =( function () {
//    function Caesar(texto, numero, tipo) {
//        this.texto = texto;
//        this.numero= numero;
//        this.tipo = tipo;
//        this.encriptar = function (){
//            var i;
//            var textoEncriptado=[];
//            console.log("Texto cifrado con el metodo del Caesar:");
//            for (i = 0; i < this.texto.length; i++) {              
//                textoEncriptado +=this.texto[i].replace(this.texto[i],String.fromCharCode(this.texto[i].charCodeAt(0)+this.numero));
//            }
//            console.log(textoEncriptado);
//        };
//    }
//    return Caesar;
//})();

//var uno = new Caesar('son las 9 de la mañana',2,'encriptar');
//uno.encriptar();

console.log("****** Ejercicio 5. Método del Caesar. ********");
var Caesar = (function () {
    function Caesar(texto, numero) {
        this.texto = texto;
        //this.letra = letra;
        this.numero = numero;
        //this.clave = 'abcdefghijklmnopqrstuvwxyz';     
        this.encriptar = function () {
            var i;
            var textoEncriptado = [];
            console.log("Texto CIFRADO con el metodo del Caesar:");
            for (i = 0; i < this.texto.length; i++) {
                textoEncriptado += this.texto[i].replace(this.texto[i], String.fromCharCode(this.texto[i].charCodeAt(0) + this.numero));
            }
            console.log(textoEncriptado);
        };
        this.desencriptar = function () {
            var i;
            var textoEncriptado = [];
            console.log("Texto DESCIFRADO con el metodo del Caesar:");
            for (i = 0; i < this.texto.length; i++) {
                textoEncriptado += this.texto[i].replace(this.texto[i], String.fromCharCode(this.texto[i].charCodeAt(0) - this.numero));
            }
            console.log(textoEncriptado);
        };
    }
    return Caesar;
})();

var mensaje = new Caesar('LA FIGURA DIVIDE UN HEPTAGONO DE DOS MANERAS DIFERENTES', 10);
mensaje.encriptar();

var uno = new Caesar('VK*PSQ_\K*NS`SNO*_X*ROZ^KQYXY*NO*NY]*WKXO\K]*NSPO\OX^O]', 10);
uno.desencriptar();

console.log("********** Ejercicio 6. Arrays **************");
var ex06 = (function () {
    var a = new Array(8);
    var max = 14;
    var min = 1;
    var i;
    for (i = 0; i < a.length; i++) {
        a[i] = Math.floor(Math.random() * (max - min) + min);
    }
    console.log("Componentes aleatorios : " + a);
    var inverso = a.reverse();
    console.log("Array inverso : " + inverso);
    var quitarPrimero = a.unshift();
    console.log("Extraer el primer elemento del array : " + quitarPrimero);
    var extraer = a.pop(); 
    var extraer2 = a.pop();
    console.log("Extraer los dos últimos elementos : "+extraer+" y "+extraer2+".");
    
    a.push(5);
    console.log("Añadir el numero 5 al final del array: " +a);
  
    a.sort(function (a, b) {
        return a - b;
    });
    console.log("Numeros ordenados: "+a);

    var buscar = a.indexOf(5);
    if (buscar === -1) {
        console.log("No hay ningun numero 5");
    } else {
        console.log("Posicion del numero 5 es: " + buscar);
    }


})();

console.log("********** Ejercicio 7. Fechas **************");
var ex07 = (function () {

})();




console.log("********* Ejercicio 8. PRIMITIVA ************");
var ex08 = (function () {
    var i;
    var numeros = [];
    var n = 6;
    console.log("Numeros de la primitiva:");
    for (i = 1; i <= n; i++) {
        numeros[i] = Math.floor(Math.random() * (50 - 1) + 1);
        console.log("Número " + [i] + ": " + numeros[i]);
    }
    var complementario = Math.floor(Math.random() * (11 - 1) + 1);
    console.log("Complementario : " + complementario);
})();

console.log("********** Ejercicio 9. QUINIELAS **************");
var ex09 = (function () {
    var partidos = [];
    var n = 15;
    var i;
    console.log("Partidos de la semana: Jornada 27.");
    for (i = 1; i <= n; i++) {
        partidos[i] = Math.floor(Math.random() * (4 - 1) + 1);
        switch (partidos[i]) {
            case 1:
                console.log("Partido " + [i] + " : 1");
                break;
            case 2:
                console.log("Partido " + [i] + " :     2");
                break;
            case 3:
                console.log("Partido " + [i] + " :   X");
                break;

            default:

                break;
        }
    }
})();

console.log("********** Ejercicio 10. Numero primero **************");
var ex10 = (function () {
    var numero = 73;

})();

