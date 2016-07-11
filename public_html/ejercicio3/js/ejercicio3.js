
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
    var uno = new triangulo(6, 5);
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

console.log("************** Ejercicio 4 ***********************");
//ambito de ejecución delimitado.
var ej04 = (function () {

    var Reloj = function () {

        //propiedades
        this.hora;
        this.min;
        this.seg;

        this.establecerHora = function (h, m, s) {
            this.hora = h;
            this.min = m;
            this.seg = s;

        };
        this.establecerHoraString = function (hms) {
            var a = hms.split(":");
            this.hora = a[0];
            this.min = a[1];
            this.seg = a[2];
        };

        this.incrementarSeg = function () {
            this.seg++;
            if (this.seg === 60) {
                this.seg = "00";
                this.min++;
            }
        };
        this.incrementarMin = function () {
            this.min++;
            if (this.min === 60) {
                this.min = "00";
                this.hora++;
            }
        };
        this.incrementarHora = function () {
            this.hora++;
            if (this.hora === 24) {
                this.hora = "00";
            }
        };

        this.toString = function () {
            return this.hora + ":" + this.min + ":" + this.seg;
        };

        this.reiniciar = function () {
            this.hora = 0;
            this.min = 0;
            this.seg = 0;
        };
    };

    var r1 = new Reloj();
    r1.establecerHora(10, 11, 12);
    r1.establecerHoraString("01:59:59");
    //r1.incrementarHora();
    //r1.incrementarMin();
    r1.incrementarSeg();
    console.log(r1.toString());
})();

console.log("************** Ejercicio 5 ***********************");
//ambito de ejecución delimitado.
var ej05 = (function () {

    var contador = 1;
    var Entrada = function (nombre, correo, telefono) {
        
        if (arguments.length === 3 && isNaN(nombre) && isNaN(correo) && !isNaN(telefono)) {

            //propiedades            
            var nombre =nombre;
            var correo = correo;
            var telefono = telefono;
            var id = contador++;
            
            //getters y setters
            this.getNombre = function(){
                return nombre;
            };
            
            this.setNombre = function (nuevo_nombre) {
                nombre = nuevo_nombre;
            };
            
            this.getCorreo = function(){
                return correo;
            };
            
            this.setCorreo = function (nuevo_correo){
              correo = nuevo_correo;  
            };
            
            this.getTelefono = function(){
                return telefono;
            };
            
            this.setTelefono = function (nuevo_telefono){
              telefono = nuevo_telefono;  
            };
            
            this.getId = function () {
                return id;
            };
            
            //metodos
            this.toString = function () {
                return"Id: "+id+", Nombre: " + nombre + ", Correo: " + correo + ", Telefono: " + telefono;
            };
        } else {
            console.log("Numero de argumentos incorrectos");
        }
    };

    //instanciar objetos.
    var e1 = new Entrada("raul", "raul@gmail.com", "933531041");
    var e2 = new Entrada("eva", "eva@gmail.com", "616978548");
    var e3 = new Entrada("hector", "hector@gmail.com", "936589547");
    e1.setNombre("Daniel");
    e1.setCorreo("nuevo@gmail.com");
    console.log(e1.getNombre());
    console.log(e1.getCorreo());
    console.log(e1.getId());
    
    //var contactos =[e1,e2,e3];
    //console.log("Contacto numero :"+contactos[0].nombre);
    console.log(e1.toString());
    console.log(e2.toString());
    console.log(e3.toString());
})();

console.log("************** Ejercicio 6 ***********************");
//ambito de ejecución delimitado.
var ej06 = (function () {
      
    //objeto Entrada
    var Entrada = function (id,nombre,correo,telefono) {
        this.id=id;
        this.nombre=nombre;
        this.correo=correo;
        this.telefono=telefono;
        this.toString = function () {
            return this.id+" "+this.nombre+" "+this.correo+" "+this.telefono+"";
        };
    };
    
    var e1 = new Entrada("1","Raul","raul@gmail.com","936587777");
    var e2 = new Entrada("2","Eva","eva@gmail.com","9345632");
    var e3 = new Entrada("3","Hector","hector@gmail.com","9220000");
    
    var listaContactos =[e1,e2,e3];
    console.log("Lista de contactos:\n"+listaContactos[2].nombre);
    
    //objeto Agenda   
    var Agenda = function () {
        this.afegirEntrada = function (nom, correo, telefono) {
            var x = new Entrada(listaContactos.length+1,nom,correo,telefono);
            listaContactos.push(x);
            return listaContactos;
        };
        
        this.buscarNombre = function (nombre) {
            var i;
            for (i = 0; i < listaContactos.length; i++) {               
                if(listaContactos[i].nombre===nombre){
                    return "Datos :"+listaContactos[i];
                }else{
                    return "No existe el usuario.";
                }
            }
        };
        
    };
    
    var nuevaAgenda = new Agenda();
    nuevaAgenda.afegirEntrada("Manuel","manuel@gmail.com","9658744");
    console.log("Lista de contactos "+listaContactos[2]);
    
    console.log(nuevaAgenda.buscarNombre("Raul"));
    
    
    
      
})();
