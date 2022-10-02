
//Al no contar con punteros, opto por tomar como fin de la lista el valor undefined
function sumarLista(lista){
    return sumarListaConRecursividad(lista, 0);
}
/**
 * Suma todos los elementos desde el elemento indicado hasta el último.
 * @param {*} lista 
 * @param {*} posicionActual Si se quiere sumar la lista entera, indicar 0. No funciona con valores negativos.
 * @returns 
 */
function sumarListaConRecursividad(lista, posicionActual){
    let suma = 0;
    if(lista[posicionActual] !== undefined){
        suma = lista[posicionActual] + sumarListaConRecursividad(lista, posicionActual+1);
    }
    return suma;
}

//Generamos una lista con números del 0 al 5.
let listita = [];
for(let i=0; i<5; i++){
    listita.push(Math.round(Math.random()*5));
}
console.log(listita);

let suma = sumarListaConRecursividad(listita,0);
console.log("Los elementos de la pila suman: " + suma);