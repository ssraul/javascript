/*--------------------------------------------------------------------------*/
/*Pruebas con objetos en javascript*/
//global
//console.log("prueba de objetos");
//var x=34*Math.PI;
//var str = "console.log("+x+");";
//console.log(str);
//eval(str);
//str="console.log(x)";
//console.log(str);
//eval(str);
//
///**/
//var paller=[1,5,4,8,0,2,1];
//var pos;
//var agulla =8;
//pos = paller.indexOf(agulla);
//console.log(pos);
//
//pos = paller.indexOf(agulla, 4);
//console.log(pos);
///*-1 es que no lo ha encontrado*/
//
//agulla=1;
//pos = paller.indexOf(agulla, -2);
//console.log(pos);
///*devuelve la posicion*/
//
//console.log("foreach ejemplo");
//var y=[1,5,4,8,0,2,1];
//var suma=0;
//y.forEach( function (valor){
//   suma+=valor; 
//});
//console.log("x = [" + x + "]\nsuma = "+ suma);
//
//console.log("funcion sort");
//
//var x=[1,5,4,8,0,2,1,12,22,32,101,9];
//x.sort();
//console.log(x);
//
//var x=[1,5,4,8,0,2,1,12,22,32,101,9,"a"];//caso raro
//x.sort(
//        function (a,b){
//            console.log(a + ", " + b +", ");
//            return a-b;
//        }
//        );

/*si todas cumplen la condicion devuelve true y si hay alguna que no retorna false*/
console.log("hacer un test devuelve true o false en funcion del resultado");
var x = [1, 5, 4, 8, 0, 2, 1, 12, 22, 32, 101, 9];
var test = -5;
var resultado = x.every(
        function (valor, index, myarray) {
            return valor > test;
        }
);
console.log(resultado);
/*otra forma*/
var x = [1, 5, 4, 8, 0, 2, 1, 12, 22, 32, 101, 9];
var test = -5;
var i, result = true;
for ( i = 0; i < x.length; i++) {
    if (x[i]<test) {
        result = false;
        break;
    }
}
console.log(result);

/*treballar ambr dades*/
console.log("trabajar con fechas.");
var mydata01 = new Date();
console.log(mydata01);

var mydate02 = new Date("2016-02-29");
console.log(mydate02);
var mydate03 = new Date("2016-02-70");
console.log(mydate03);

var mydate04 = Date.UTC(2016,8,1,12,0,0);
console.log(mydate02.toDateString());
console.log(mydate02.toLocaleString());
console.log(mydata01.toString());

var d= new Date("2016-02-28T12:30:00.0000z");
console.log(d.toString());
//afegir 3 mesos, 2dies 5h

var t = 3*30*24*60*60*1000 + 2*24*60*60*1000 + 5*60*60*100; //ms
var d1 = d.getTime() +t;
var d2= new Date(d1);
console.log(d2.toString());

/*Format Json*/
console.log("Formato Json -------------------------------------------------");

var coords = {
  lat:34343,
  long: 4343
};
 console.log(JSON.stringify(coords));
 
 var z = '[1,3,4,65,"ab"]';
 console.log(JSON.parse(z));
