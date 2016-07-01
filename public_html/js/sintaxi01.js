var x, y, z;
x=1;
y=0;
z=x/y; // en este caso Z es igual a infinity
console.log("x= " + x + "\ny = " + y + "\nz = "+ z);

// es este caso a es igual a 0.
var a= x/z;
console.log("x= " + x + "\nz = " + z + "\na = "+ a);


//en este caso el resultado es NaN.
var b= NaN;
var a = x/b;
console.log("x= " + x + "\nb= " + b + "\na = "+ a);

console.log("\u265e"); // ♞ caballo del ajedrez el unicode va en hexadecimal


// se pueden ver los strings con un array
var str ="Hola món";
console.log(str[0]+" "+ str[6]);

//pero no deja substituir elcaracter
str[6]="a";
console.log(str[0]+" "+ str[6]);



// sintaxi de objetos.
var r = {
    a:3,
    b:5,
    c:"Hola"
};

//acces a components dún objecte com objecte
console.log(r);

//acces components d'un objecte como array
// un objeto se comporta como un array asociativo
console.log(r.a + "\n" + r.b + "\n" + r.c[3]);
console.log(r['a'] + "\n" + r["b"] + "\n" + r['c'][3]);

// array
var s =[3,5,"Hola"];
console.log(s);
console.log(s[0] + "\n" + s[1] + "\n" + s[2][3]);

//añadir propiedades a un objeto
r.d = "como estas";
console.log(r);


console.log("PI "+ Math.PI);

console.log(3 + undefined);
console.log(3 + null);
console.log(parseFloat("NaN")); // torna NaN

//se puden definir variables las veces que quieras no como en java
console.log("\n\n\nScope");
var x = 4;
console.log(x);
console.log(yy);

if (x>0) {
    var yy = 6;    
}
console.log(yy);

//3616 curs de java





        