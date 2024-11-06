"use strict";

var saludo = function saludo(nombre) {
  var mensaje = "Hola, ".concat(nombre, "!");
  var saludo = hola;
  return mensaje;
};
var nombres = ["Ana", "Luis", "Carlos"];
nombres.forEach(function (nombre) {
  return console.log(saludo(nombre));
});
