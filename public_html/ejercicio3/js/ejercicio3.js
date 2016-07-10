
console.log("Hoja de ejercicios Nº3.");
console.log("************** Ejercicio 1 ***********************");
//ambito de ejecución delimitado.
var ej01 = (function () {

    //creamos la clase triangulo
    var triangulo = function (a, b) {
        //comprobamos argumentos de la funcion
        if (arguments.length === 2 && !isNaN(a) && !isNaN(b)) {

            //Propiedades
            this.ca = a;
            this.cb = b;


            //Métodos de la clase
            this.hipotenusa = function () {
                var h = this.ca * 2 + this.cb * 2;
                return h;
            };

            this.area = function () {
                var a = this.ca * this.cb / 2;
                return a;
            };

            this.perimetro = function () {
                var p = this.ca + this.cb + this.hipotenusa();
                return p;
            };

            //reescribir el metodo toString.
            this.toString = function () {
                return "En un triangulo rectangulo con dos lados:\nCateto A = " + this.ca + " y Cateto B = " + this.cb + "\nHipotenusa es : " + this.hipotenusa() + "\nArea es : " + this.area() + "\nPerimetro es : " + this.perimetro();
            };

        } else {
            console.log("tienen que ser dos argumentos y numeros");
        }

    };

    //instanciamos el objeto y le pasamos los parametros
    var uno = new triangulo(3, 5);
    //imprimimos por pantalla todos los datos.
    console.log(uno.toString());

})();

console.log("************** Ejercicio 2 ***********************");
//ambito de ejecución delimitado.
var ej02 = (function () {

    //creamos la clase circulo
    var circulo = function (radio) {

        //comprovamos los parametros la longuitud y si es un numero.
        if (arguments.length === 1 && !isNaN(radio)) {
            //Propiedades
            this.radio = radio;

            //Metodos
            this.diametro = function () {
                var d = 2 * this.radio;
                return d;
            };

            this.area = function () {
                var a = Math.PI * Math.pow(this.radio, 2);
                return a;
            };

            this.perimetro = function () {
                var p = 2 * Math.PI * this.radio;
                return p;
            };

            this.toString = function () {
                return"Dado el radio de la circumferencia = " + this.radio + ".\nDiametro = " + this.diametro() + "\nArea = " + this.area() + "\nPerimetro = " + this.perimetro();
            };

        } else {
            console.log("El parametro tiene que ser un número");
        }

    };

    var dos = new circulo(5);
    console.log(dos.toString());

})();

console.log("************** Ejercicio 3 ***********************");
//ambito de ejecución delimitado.
var ej03 = (function () {
    var hexagono = function (lado) {

        if (arguments.length === 1 && !isNaN(lado)) {
            //propiedades
            this.lado = lado;

            //metodos
            this.perimetro = function () {
                var p = 6 * this.lado;
                return p;
            };

            this.toString = function () {
                return "Datos del hexagono con un lado de: " + this.lado + "\nPerimetro = " + this.perimetro();
            };
        } else {
            console.log("Parametros incorrectos");
        }
    };

    var tres = new hexagono(8);
    console.log(tres.toString());

})();

console.log("************** Ejercicio 5 ***********************");
//ambito de ejecución delimitado.
var ej05 = (function () {

    var contador = 1;
    var agenda = function (nombre, correo, telefono) {
        if (arguments.length === 3 && isNaN(nombre) && isNaN(correo) && !isNaN(telefono)) {

            //propiedades
            this.nombre = nombre;
            this.correo = correo;
            this.telefono = telefono;
            this.id = contador++;

            //metodos
            this.toString = function () {
                return"Id: "+this.id+", Nombre: " + this.nombre + ", Correo: " + this.correo + ", Telefono: " + this.telefono;
            };
        } else {
            console.log("Numero de argumentos incorrectos");
        }
    };

    //instanciar objetos.
    var e1 = new agenda("raul", "raul@gmail.com", "933531041");
    var e2 = new agenda("eva", "eva@gmail.com", "616978548");
    var e3 = new agenda("hector", "hector@gmail.com", "936589547");
    //var contactos =[e1,e2,e3];
    //console.log("Contacto numero :"+contactos[2].nombre);
    console.log(e1.toString());
    console.log(e2.toString());
    console.log(e3.toString());
})();

console.log("************** Ejercicio 6 ***********************");
//ambito de ejecución delimitado.
var ej06 = (function () {
    
    var contactos = [];
    var contador =1;
    var agenda = function () {
        this.nombre = '';
        this.correo = '';
        this.telefono = '';
        this.id = contador++;
        
        this.addIn = function (nombre, correo, telefono){
            this.nombre = nombre;
            this.correo = correo;
            this.telefono = telefono;
            var nuevoContacto = [this.id+"\", \""+this.nombre + "\", \""+ this.correo+ "\", \""+this.telefono];
            contactos.push(nuevoContacto);
            return "Contacto añadido con exito.";
        };
        
        this.deleteIn = function (id){
          var pos = contactos[id+1].pop();
          return pos;
          
        };
        
    };
    
    var e1 = new agenda();
    var e2 = new agenda();
    var e3 = new agenda();
   
    console.log(e1.addIn("raul","casa","ter"));
    console.log(e1.id);
    console.log(e2.addIn("eva","vero","neo"));
    console.log(e2.id);
    console.log(e3.addIn("hector","pew","xiu"));
    console.log(e3.id);
    //console.log(e3.deleteIn("0"));
    console.log(contactos);
      
})(); 