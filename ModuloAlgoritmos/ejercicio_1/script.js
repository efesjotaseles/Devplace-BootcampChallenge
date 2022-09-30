
let givenNumber = prompt("Ingrese un número...");

if(isPrime(givenNumber)){
    alert("El número " + givenNumber + " es primo!");
}
else{
    alert("El número " + givenNumber + " NO es primo.");
}

function isPrime(number){
    //Asumimos que el número es primo.
    let response = true;
    let num = Math.abs(parseInt(number)) ;

    //Si es cero, entonces no es primo.
    if(num === 0){
        response = false;
    }
    //Si no, y es menor a 4, es primo y se termina la función.
    else if(num > 3){
        //Pero si es mayor a 3, se busca si tiene un divisor que no deje resto.
        let i = 2;

        //Encontrando al menos un divisor, se corta el while al cambiar response a false.
        while(response === true && i <= num/2){
            if(num%i === 0){
                response = false;
            }
            i++;
        }
    }
    return response;
}