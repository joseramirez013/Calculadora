//Declaración de variables
var operando_1;
var operando_2;
var operacion;


function init(){
  //Variables
  var display = document.getElementById('display');
  var reset = document.getElementById('on');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var punto = document.getElementById('punto');
  var reset = document.getElementById('on');
  var signo = document.getElementById('sign');


  //Eventos de click
  // Si el valor inicial es cero ejecuta la función "limpiar" y reemplaza el contenido por la tecla presionada

uno.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "1";
  } else {
    display.textContent = display.textContent + "1";
  }
}

dos.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "2";
  } else {
    display.textContent = display.textContent + "2";
  }
}

tres.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "3";
  } else {
    display.textContent = display.textContent + "3";
  }
}

cuatro.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "4";
  } else {
    display.textContent = display.textContent + "4";
  }
}

cinco.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "5";
  } else {
    display.textContent = display.textContent + "5";
  }
}

seis.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "6";
  } else {
    display.textContent = display.textContent + "6";
  }
}

siete.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "7";
  } else {
    display.textContent = display.textContent + "7";
  }
}

ocho.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "8";
  } else {
    display.textContent = display.textContent + "8";
  }
}

nueve.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "9";
  } else {
    display.textContent = display.textContent + "9";
  }
}

cero.onclick = function(event){
  if (display.textContent.length >= "8") {
    display.textContent = display.textContent;
  } else if (display.textContent == "0") {
    limpiar();
    display.textContent = display.textContent + "0";
  } else {
    display.textContent = display.textContent + "0";
  }
}

//IndexOf: Si la secuencia devuelve un -1, significa que no existe la secuencia indicada en el argumento,
// por tanto se agrega al contenido
punto.onclick = function(event){
  if (display.textContent.indexOf(".") == -1) {
    display.textContent = display.textContent + ".";
  }
}

//Boton ON/C
reset.onclick = function(event){
  display.textContent = "0";
}

signo.onclick = function(event){
  opuesto();
}

}

// Función que limpia la pantalla
function limpiar() {
  display.textContent = "";
}

//Funcion invertir numero
function opuesto(){
  nx = Number(display.textContent); //Convertir en numero
  nx = -nx; //Cambiar el signo
  x = String(nx); //Volver a convertir en numero
  display.innerHTML=x;
}
