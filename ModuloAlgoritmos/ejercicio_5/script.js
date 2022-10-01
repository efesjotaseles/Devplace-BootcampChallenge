const btnEnter = document.querySelector(".btnEnter");
const input = document.querySelector(".numeroIngresado");

let numInput = null;
let numMax = null;
let numMin = null;
let numSum = 0;

btnEnter.onclick = enterNumber;
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        btnEnter.click();
    }
})

function enterNumber() {
  numInput = parseInt(input.value);
  if (!isNaN(numInput) && numInput !== -1) {
    serviceMax(numInput);
    console.log("Maximo: " + numMax);
    serviceMin(numInput);
    console.log("Minimo: " + numMin);
    serviceSum(numInput);
    console.log("Suma: " + numSum);
    input.value = '';
  } else if (numInput === -1) {
    mostrarResultados();
  }
}

function serviceMax(num) {
  let numero = parseInt(num);
  if (numMax === null || numMax < numero) {
    numMax = num;
  }
}

function serviceMin(num) {
  let numero = parseInt(num);
  if (numMin === null || numMin > numero) {
    numMin = num;
  }
}

function serviceSum(num) {
  let numero = parseInt(num);
  numSum += numero;
}

function removeInput() {
  input.remove();
  btnEnter.remove();
}

function mostrarResultados() {
  removeInput();

  let resultado =
    "a) Mayor número ingresado: " +
    numMax + "<br>" +
    "b) Menor número ingresado: " +
    numMin + "<br>" +
    "c) Suma total de números ingresados: " +
    numSum;

    const p = document.createElement("p");
    p.innerHTML = resultado;
    document.body.appendChild(p);

}
