function mostrarSaludo(nombre) {
    alert(`¡Hola, ${nombre}! Bienvenido a nuestra página web.`);
  }
  
  // Solicitar el nombre del usuario y mostrar el saludo
  let nombreUsuario = prompt("¿Cómo te llamas?");
  mostrarSaludo(nombreUsuario);