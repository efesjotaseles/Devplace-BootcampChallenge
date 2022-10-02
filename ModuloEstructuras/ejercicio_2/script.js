
function reemplazar(pila, nuevo, viejo){
    let auxPila = [];
    let auxInt;

    //Vamos desapilando la pila...
    while(pila.length !== 0){
        auxInt = pila.pop();
        //Comparando el elemento que sacamos con el que queremos reemplazar.
        if(auxInt === viejo){
            //Si es igual, en en la pila auxiliar insertamos el elemento nuevo.
            auxPila.push(nuevo);
        }
        else{
            //Si no es igual, simplemente insertamos en la pila auxiliar lo que quitamos de la original.
            auxPila.push(auxInt);
        }
    }

    //Solamente se insertó algo en la pila auxiliar si había al menos un elemento en la pila original.
    if(auxPila.length !== 0){
        //Si es el caso, hay que reapilar lo que apilamos en la auxiliar en la original.
        while(auxPila.length !== 0){
            pila.push(auxPila.pop());
        }
    }
    return pila;
}

//Generamos una pila con números del 0 al 20.
let pilita = [];
for(let i=0; i<20; i++){
    pilita.push(Math.round(Math.random()*10));
}
console.log(pilita);

//Sorteamos 2 numeros.
let numViejo = Math.round(Math.random()*10);
let numNuevo = Math.round(Math.random()*10);
console.log("Numero viejo: " + numViejo);
console.log("Numero nuevo: " + numNuevo);

pilita = reemplazar(pilita,numNuevo,numViejo);

console.log(pilita);


