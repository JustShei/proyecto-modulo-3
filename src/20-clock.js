function milisegundosDesdeMedianoche() {
  const ahora = new Date();  // Obtiene la fecha y hora 

  const horas = ahora.getHours()
  const minutos = ahora.getMinutes()
  const segundos = ahora.getSeconds()

  const milisegundos = (horas * 3600 + minutos * 60 + segundos) * 1000

  return milisegundos
}

console.log("Milisegundos desde medianoche:", milisegundosDesdeMedianoche());
