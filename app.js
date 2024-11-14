//FUNCIÓN SIMPLE DE CONVERSIÓN DE MONEDA
function Euros_A_Dolares(euros){

  const dolar = 1.06;
  return 1.06*euros;
}

let euros = parseFloat(prompt("Introduce la cantidad de euros que quieras convertir:"));

console.log(euros + "€ Euros son en dólares: " + Euros_A_Dolares(euros).toFixed(2) + "$");