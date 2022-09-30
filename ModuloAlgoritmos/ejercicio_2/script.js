const savedPass = prompt("Generá una contraseña nueva...");

let attempts = 0;
let pass;

do{
    let mensaje = "Ingresá la contraseña..."
    pass = prompt(mensaje);
    if(savedPass === pass){
        alert("Felicitaciones, recordás tu contraseña!");
        attempts = 3;
    }
    else{
        alert("Contraseña incorrecta :(");
        attempts++;
        if(attempts < 3){
            mensaje = "Probá nuevamente...";
        }
        else{
            alert("Tenés que ejercitar la memoria.")
        }
        
    }

}while(attempts < 3)

