
//ejercicio 1.
console.log("1.\n");
var base = 5;
var altura = 6;
var resultado = base * altura;
console.log("Area del rectangulo: "+resultado+"\n");

var resultadoPerimetro= ((base*2) + (altura*2));
console.log("Perimetro del rectangulo: "+resultadoPerimetro+"\n");

//ejercicio1 hecho por el profesor;
//1a forma de hacerlo en el ambito global.
var a,b,r,p;
a=3;
b=5;
ar=a*b;
p=2*a+2*b;

console.log("Area = "+ar+" perimetro = "+p);

//2a manera de hacerlo, ambito de una funcion inmediata.
(function (){
var a,b,ar,p;
a=3;
b=5;
ar=a+b;
p=2*a+2*b;
console.log("Area = "+ar+" perimetro = "+p);  
})();

/*3a version con espacio de nombres*/
var myScope = (function (){
var a,b,ar,p;
a=3;
b=5;
ar=a+b;
p=2*a+2*b;
console.log("Area = "+ar+" perimetro = "+p); 
})();//se ejecuta porque dejo los parentesis ultimos detras. si los quito
// y ejecuto la funcion myScope, funcionará
// myScope();

console.log("variable Scope "+myScope);

/*4a modulo*/
var myModul = (function () {
    var a, b, ar, p, x;
    a = 3;
    b = 5;
    ar = a * b;
    p = 2 * a + 2 * b;
    x="abc";
    console.log("Modulo 4. Area = " + ar + " perimetro = " + p);
    return{
        A:a,
        B:b,
        X:x
    };
})();
console.log("Valor de A "+myModul.A);// los podemos recuperar;


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
var segundos = 1056789;
var minutos = segundos/60;
var horas = minutos/60;
var dias = horas/24;
console.log(segundos +" Segundos son:\nDias: "+dias.toFixed(0)+"\nHoras: "+horas.toFixed(0)+"\nMinutos: "+minutos.toFixed(0)+"");

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
var suma=0;
for (var i = 0; i < 100; i++) {
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


//ejercicio11
console.log("Ejercicio 11.");
var horoscopo=( function (){
    var fechaNacimiento = "23/04/1977";
    var day =(fechaNacimiento.substr(0,2));
    var month = (fechaNacimiento.substr(3,2));
    var a=(day+month);
    console.log(a);
    
})();


//ejercicio12
console.log("12.");
var v5=[4,9,6,1,7,8,5,3,0,2];
for (var i = 1; i < v5.length; i++) {
    for (var j = 0; j < v5.length-1; j++) {
        if(v5[j]>v5[j+1]){
            aux = v5[j];
            v5[j]=v5[j+1];
            v5[j+1]= aux;
        }        
    }
}
console.log("Array ordenado:");
for (var i = 0; i < v5.length; i++) {
    console.log(v5[i]);
    
}

//ejercicio14
console.log("Ejercicio 14.");
var posicion = (function (){
    var v14=[4,9,6,1,7,8,5,3,0,2];
    var numero=5;
    console.log("la posición del número 5 es: "+v14.indexOf(numero));
})();

//ejercicio16
console.log("Ejercicio 16.");
var posicion = (function (){
    var texto = "candidatura";
    var letra = "";
    var remplazado = texto.replace(/a/g,letra);   
    console.log(remplazado);
})();

//ejercicio18
console.log("Ejercicio 18.");
var validarFechas = (function () {
    var fecha1 ="04/07/2016";
    var dia = parseInt(fecha1[0] + fecha1[1]);
    var mes = parseInt(fecha1[3] + fecha1[4]);
    var anyo = parseInt(fecha1[6] + fecha1[7] + fecha1[8] + fecha1[9]);
    var validar = true;
    console.log(anyo);
    if (mes > 12) {
        console.log("Parametro mes incorrecto");
        validar = false;
    }
    if (anyo > 9999 || anyo < 1) {
        console.log("Año incorrecto");
        validar = false;
    }

    if (dia < 0 || dia > 31) {
        console.log("dia del mes incorrecto");
        validar = false;
    }
    var va = dia + " " + mes + " " + anyo;
    if (validar) {
        console.log("Fecha correcta: " + va);
    } else {
        console.log("Fecha incorrecta");
    }
})();

//ejercicio19.
console.log("Ejercicio 19. Calcular letra del DNI *****");
var validarDni = (function () {
    var dni = "x36531767q";
    if (isNaN(dni[0])) {
        if (dni[0] === "y") {
            dni = dni.replace("y", 1);
            console.log(dni);
        }
        if (dni[0] === "x") {
            dni = dni.replace("x", 0);
            console.log(dni);
        }
    }
    dni = dni.substr(0, dni.length - 1);
    var letraDNI = (dni % 23);
    switch (letraDNI) {
        case 18:
            console.log("Letra H");
            break;
        case 15:
            console.log("Letra S");
            break;
        case 16:
            console.log("Letra Q");
            break;
        default:
            console.log("mal escrito");
            break;
    }
})();

//ejercicio con un objeto en javascript
console.log("Ejercicio con objeto en javascript/////////////////////");

var objeto = function () {
    //atributos del objeto.
    var k, m;
    //funciones
    function area() {
        return this.k * this.m;
    }
    ;
    function perimetro() {
        return 2 * this.k + 2 * this.m;
    }
    ;
    function imprimir() {
        console.log("Area y perimetro de un cuadrado:\n\a = " + this.k + "\nb = " + this.m + "\nArea = " +area()+ "\nPerimetro = " + perimetro());
    }
    ;
    return{
        k: k,
        m: m,
        area: area,
        perimetro: perimetro,
        imprimir: imprimir
    };
};

var my = new objeto();
my.k=7;
my.m=8;
console.log(my.area());
console.log(my.perimetro());
my.imprimir();

