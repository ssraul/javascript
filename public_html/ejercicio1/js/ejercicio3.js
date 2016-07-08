
console.log("******************** Ejercicio 1. *********************");
var Ejercicio31 = (function () {
    var triangleRectangle = function (a, b) {
        if (arguments.length === 2 && !isNaN(a && b)) {

            var h;
            //propiedades.
            this.ca = a;
            this.cb = b;

            //metodos.
            this.hipotenusa = function () {
                h = Math.sqrt((this.ca * this.ca + this.cb * this.cb));
                return h;
            };

            this.area = function () {
                var a;
                a = (this.ca * this.cb) / 2;
                return a;
            };

            this.perimetre = function () {
                var p;
                p = this.ca + this.cb + h;
                return p;
            };

            this.toString = function () {
                return "Un triangulo rectangulo con dos catetos de valor " + this.ca + " \n\
y " + this.cb + " tiene un:\nArea = " + this.area() + ".\nHipotenusa = " + this.hipotenusa() + "\nPerimetro = " + this.perimetre();
            };
        } else {
            console.log("Esta funcion necesita dos argumentos");
        }

    };
    var tri01 = new triangleRectangle(5, 4.3);
    console.log(tri01.toString());

})();

console.log("******************** Ejercicio 2. ********************");
var Ejercicio32 = (function () {



    var circulo = function (a) {



        this.radio = a;

        this.diametro = function () {
            var d = this.radio * 2;
            return d;
        };

        this.area = function () {
            var a = Math.PI * this.radio * 2;
            return a;
        };

        this.perimetro = function () {
            var p = 2 * Math.PI * this.radio;
            return p;
        };

        this.toString = function () {
            return "El radio del circulo es : " + this.radio + "\nEl diametro es: " + this.diametro() + "\nEl Area es: " + this.area() + "\nEl perimetro es: " + this.perimetro();
        };

    };


    var c1 = new circulo(5);
    console.log(c1.toString());

})();


