let valorHora = 0;
const valorAntiguedad = 30; //Importe por año.
const antiguedadMinimaParaCobro = 11; //Años a partir de los cuales se cobra la antiguedad.

let empleade = {
  nombre: "",
  antiguedad: "",
  horasTrabajadas: "",
};

do {
  valorHora = prompt("¿Cuál es el valor hora a pagar?");
} while (isNaN(valorHora));

empleade.nombre = prompt("Indique el nombre del empleade:");
do {
  empleade.antiguedad = prompt("Indique la antiguedad.");
} while (isNaN(empleade.antiguedad));

do {
  empleade.horasTrabajadas = prompt("Indique las horas trabajadas en el mes.");
} while (isNaN(empleade.horasTrabajadas));

let importe = calcularImporte(empleade);

alert(
  "Nombre: " +
    empleade.nombre +
    "\nAntiguedad: " +
    empleade.antiguedad +
    "\nImporte: $" +
    importe
);

function calcularImporte(empleade) {
  let importe = empleade.horasTrabajadas * valorHora;
  if (empleade.antiguedad >= antiguedadMinimaParaCobro) {
    importe += empleade.antiguedad * valorAntiguedad;
  }
  return importe;
}
