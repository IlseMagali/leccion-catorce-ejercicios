function convertirAFahrenheit(){
  var celsius = document.getElementById("gradosCelsius").value;
  var resultadoEnFahrenheit = (celsius * 1.8 +32);
  document.getElementById("gradosCelsius").value = resultadoEnFahrenheit;
}

function convertirACelsius(){
  var fahrenheit = document.getElementById("gradosFahrenheit").value;
  var resultadoEnCelsius = (fahrenheit -32)/1.8.toFixed(2);
  document.getElementById("gradosFahrenheit").value = resultadoEnCelsius;
}
