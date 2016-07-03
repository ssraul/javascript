//ejercicio 1.
console.log("1.\n");
var base = 5;
var altura = 6;
var resultado = base * altura;
console.log("Area del rectangulo: "+resultado+"\n");

var resultadoPerimetro= ((base*2) + (altura*2));
console.log("Perimetro del rectangulo: "+resultadoPerimetro+"\n");



//ejercicio2
console.log("2.\n");

var catetoA = 4;
var catetoB = 4;
var catetoC = 4;
var resultadoArea= (catetoA * catetoB)/2;
console.log("Area del Triangulo rectangulo: " + resultadoArea);

var perimetroTriangulo = catetoA + catetoB +catetoC;
console.log("Perimetro del triangulo rectangulo: "+perimetroTriangulo);

//ejercicio3
console.log("3.\n");
var segundos = 86400;
var minutos = segundos/60;
var horas = minutos/60;
var dias = horas/24;
console.log(segundos +" Segundos son:\nDias: "+dias+"\nHoras: "+horas+"\nMinutos: "+minutos+"");

//ejercicio4
console.log("4.");
var intereses;
var cantidad = 50000;
var dias = 90;
var intNominal= 10;

intereses=((cantidad*intNominal*dias)/36000);
console.log(intereses);

//ejercicio5
console.log("5.");
for (var i = 1; i < 5; i++) {
    var suma;
    suma+= i;
}
console.log(suma);

//ejercicio6
console.log("6.");
var min = 60;
var h = min*60;
var d = h*24;
var mes = d*30;

var n = 2;
var resultadoMeses = n* mes;
console.log("Segundos que tienen "+n+" meses: " + resultadoMeses);

//ejercicio7
console.log("7. Maximo, minimo , medio");
 var v =[7,5,3,8,2,9];
 var  max = Math.max.apply(null,v);
 var  min = Math.min.apply(null,v);
 var media=0;
 for (var i = 0; i < v.length; i++) {
    media += v[i];
}

//calcular la media del valor
media=media/v.length;

//poner solo 2 dicimales.
var mediaDecimales = media.toFixed(2);

console.log("Maximo número del array: "+ max);
console.log("Maximo número del array: "+ min);
console.log("Maximo número del array: "+ mediaDecimales);

//ejercicio8
console.log("8.");
var v2=[4,9,6,1,7,8,5,3,0,2];
var sumaMenores=0;

for (var i = 0; i < v2.length; i++) {
    if (v2[i]<6) {
        sumaMenores+=v2[i];
    }
}
console.log("Suma de los componentes menores de 6: "+sumaMenores);

//ejercicio9
console.log("9.");
var v3=[4,9,6,1,7,8,5,3,0,2];
var v4=[];

for (var i = 0; i < v3.length; i++) {
    if (v3[i]<=4) {
        v4.push(v3[i]);
    }
}
console.log("vector con: "+v4.length+ " componetes superiores o iguales a 4, que son:");
for (var i = 0; i < v4.length; i++) {
    console.log(v4[i]);
}

//ejercicio10
console.log("10.nº de letras de una palabra");
var palabra="hola";
console.log(palabra.length);


