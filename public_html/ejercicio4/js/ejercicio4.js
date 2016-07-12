
console.log("****** Ejercicio 1************");
var ej01 = (function () {
    var expReg =/^\d{8}[-][A-Z]$/;
    var dni ="36531767-Q";
    if (expReg.test(dni)) {
        console.log("correcto");   
    }else{
        console.log("Incorrecto");
    } 
            
})();
console.log("****** Ejercicio 3 ************");
var ej03 = (function () {
    var expReg =/^([12][09][0-5][0-9])[-]([01][\d])[-]([0-3]\d)$/;
    var fecha = "2040-12-31";
        if (expReg.test(fecha)) {
        console.log("correcto");   
    }else{
        console.log("Incorrecto");
    } 
    
    var any = fecha.replace(expReg,"$1");
    var mes = fecha.replace(expReg,"$2");
    var dia = fecha.replace(expReg,"$3");
    console.log("Año: "+any+" Mes: "+mes+" Dia: "+dia);
    
})();
console.log("****** Ejercicio 4 ***********");
var ej04 = (function () {
    var expReg = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    var hora ="10:50:59";
    if (expReg.test(hora)) {
        console.log("Correcto");
    }else{
        console.log("incorrecto");
    }
    var h = hora.replace(expReg,"$1");
    var m = hora.replace(expReg,"$2");
    var s = hora.replace(expReg,"$3");
    console.log("Hora: "+h+" Minutos: "+m+" Segundos: "+s);    
})();
console.log("****** Ejercicio 5 ************");
var ej05 = (function () {
    var expReg = /^([01]\d|1[0-2]):([0-5]\d):([0-5]\d).[P|A][M]$/;
    var hora = "01:12:56 PM";
        if (expReg.test(hora)) {
        console.log("Hora correcta");
    }else{
        console.log("hora incorrecta");
    }  
})();

console.log("****** Ejercicio 7 ************");
var expReg = /^$/;
var telefonos;







