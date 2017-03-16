
function convertirACelsius(){
  var fahrenheit = document.getElementById('fahrenheit').value;
  var resultado = (parseInt(fahrenheit)* 1.8 + 32);
  return alert(resultado);
}

function convertirAFahrenheit(){
  var celsius = document.getElementById('celsius').value;
  var resultado = ((parseInt(celsius) - 32) * (5/9));
  return alert(resultado);
}
