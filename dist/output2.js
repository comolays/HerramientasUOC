"use strict";

const saludo = nombre => {
  const mensaje = `Hola, ${nombre}!`;
  return mensaje;
};
const nombres = ["Ana", "Luis", "Carlos"];
nombres.forEach(nombre => console.log(saludo(nombre)));
