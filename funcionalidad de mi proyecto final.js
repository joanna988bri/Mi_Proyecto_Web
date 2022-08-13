//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var Blog = document.getElementById('Blog');
    var experiencia = document.getElementById('Experiencia');
    var contacto = document.getElementById('contacto');
    var perfil = document.getElementById('perfil');
    var busqueda = document.getElementById('busqueda');
    var enlaces = document.getElementById('enlaces')
    var compartir = document.getElementById('compartir');
    var mefueutil = document.getElementById('me fue util');
    var nomefueutil = document.getElementById('no me fue util');
    var comentarios = document.getElementById('comentarios');
  }
  //Eventos de click
  blog.onclick = function(e){
    resultado.textContent = resultado.textContent  + "blog";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
