let numero = Math.round((Math.random()*100));
let numeroIngresado = document.querySelector(".numeroIngresado");
const btnIntentar = document.querySelector(".btnIntentar");

btnIntentar.onclick = comparar;
numeroIngresado.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        btnIntentar.click();
    }
})

function comparar(){
    let numeroDado = numeroIngresado.value;
    if(numeroDado < numero){
        console.log("es menor");
    }
    else if(numeroDado > numero){
        console.log("es mayor");
    }
    else{
        console.log("ACERTÓ!")
    }
}
