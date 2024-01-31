Java.perform(function () {
    var ClassName = "z0.f"; 

    var MyJavaClass = Java.use(ClassName);


    MyJavaClass.b.implementation = function () {
        console.log("Método b() chamado - bypass aplicado");
        return false;
    };

 
    MyJavaClass.c.implementation = function () {
        console.log("Método c() chamado - bypass aplicado");
        return false;
    };

    console.log("Bypass de detecção de emulador aplicado na classe " + ClassName);
});
