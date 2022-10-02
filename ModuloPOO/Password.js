
/*
Aprendí OOP con Java, por lo que fue un desafío trabajar con clases en Javascript.
Por lo pronto me parece que sigo prefiriendo Java,
por la facilidad de contar facilmente con métodos y atributos privados.
*/
class Password {
  //Atributos
  longitud = 8;
  contraseña;

  //Constructores

  constructor(longitud) {
    if(longitud != undefined){
        this.longitud = longitud;
    }
    this.contraseña = this.generarPassword();
  }

  //Getters & Setters
  getLongitud() {
    return this.longitud;
  }

  setLongitud(longitud) {
    
    //Si se desea que, al setear una nueva longitud, se genere nuevamente la contraseña...
    /*
    if(this.longitud !== longitud){
        this.longitud = longitud;
        this.generarPassword();
    }
    else{
        this.longitud = longitud;
    }
    */

    //Si no se cambia la contraseña al cambiar la longitud, simplemente...
    this.longitud = longitud;
  }

  getContraseña() {
    return this.contraseña.toString();
  }

  //Métodos
  esFuerte() {
    let rta = false;
    if (
      this.contarMayusculas(this.contraseña) > 2 &&
      this.contarMinusculas(this.contraseña) > 1 &&
      this.contarNumeros(this.contraseña) > 3
    ) {
      rta = true;
    }
    return rta;
  }

  contarMayusculas(str) {
    let cantidad = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (char >= "A" && char <= "Z") {
        cantidad++;
      }
    }
    return cantidad;
  }

  contarMinusculas(str) {
    let cantidad = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (char >= "a" && char <= "z") {
        cantidad++;
      }
    }
    return cantidad;
  }

  contarNumeros(str) {
    let cantidad = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (char >= "0" && char <= "9") {
        cantidad++;
      }
    }
    return cantidad;
  }

  generarPassword() {
    this.contraseña = "";
    const char = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    for (let i = 0; i < this.longitud; i++) {
      let pos = Math.floor(Math.random() * char.length);
      this.contraseña = this.contraseña.concat(char[pos]);
    
    }
    return this.contraseña;
  }
  
}

let pass = new Password(12);
console.log(pass.getContraseña());
console.log(pass.getLongitud());
console.log(pass.esFuerte());
