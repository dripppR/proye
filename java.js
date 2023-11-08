function conversor(){
    const grados = parseFloat(document.getElementById('gradosS').value);
    const tipoTemperatura = document.getElementById('tempType').value;
    const tipoTemperaturaDeseada = document.getElementById('tempT').value;

    let resultado = '';

    if (tipoTemperatura === 'celsius' && tipoTemperaturaDeseada === 'fahrenheit') {
        resultado = celsiusAFahrenheit(grados);
    } else if (tipoTemperatura === 'celsius' && tipoTemperaturaDeseada === 'kelvin') {
        resultado = celsiusAKelvin(grados);
    } else if (tipoTemperatura === 'fahrenheit' && tipoTemperaturaDeseada === 'celsius') {
        resultado = fahrenheitACelsius(grados);
    } else if (tipoTemperatura === 'fahrenheit' && tipoTemperaturaDeseada === 'kelvin') {
        resultado = fahrenheitAKelvin(grados);
    } else if (tipoTemperatura === 'kelvin' && tipoTemperaturaDeseada === 'celsius') {
        resultado = kelvinACelsius(grados);
    } else if (tipoTemperatura === 'kelvin' && tipoTemperaturaDeseada === 'fahrenheit') {
        resultado = kelvinAFahrenheit(grados);
    } else {
        resultado = 'Por favor, selecciona tipos de temperatura válidos.';
    }

    document.getElementById('res').innerText = "Resultado: " + resultado;
}

function celsiusAFahrenheit(grados) {
    return (grados * 9/5) + 32;
}

function celsiusAKelvin(grados) {
    return grados + 273.15;
}

function fahrenheitACelsius(grados) {
    return (grados - 32) * 5/9;
}

function fahrenheitAKelvin(grados) {
    return (grados - 32) * 5/9 + 273.15;
}

function kelvinACelsius(grados) {
    return grados - 273.15;
}

function kelvinAFahrenheit(grados) {
    return (grados - 273.15) * 9/5 + 32;
}