function conversor(){
    const grados = parseFloat(document.getElementById('gradosS').value);
    const tipoTemperatura = document.getElementById('tempType').value;
    const tipoTemperaturaDeseada = document.getElementById('tempT').value;

    let resultado = '';

    if (tipoTemperatura === 'celsius' && tipoTemperaturaDeseada === 'fahrenheit') {
        resultado = celsiusAFahrenheit(grados);
    } else if (tipoTemperatura === 'celsius' && tipoTemperaturaDeseada === 'rankine') {
        resultado = celsiusARankine(grados);
     } else if (tipoTemperatura === 'celsius' && tipoTemperaturaDeseada === 'kelvin') {
        resultado = celsiusAKelvin(grados);
    } else if (tipoTemperatura === 'fahrenheit' && tipoTemperaturaDeseada === 'celsius') {
        resultado = fahrenheitACelsius(grados);
    } else if (tipoTemperatura === 'fahrenheit' && tipoTemperaturaDeseada === 'kelvin') {
        resultado = fahrenheitAKelvin(grados);
    } else if (tipoTemperatura === 'fahrenheit' && tipoTemperaturaDeseada === 'rankine') {
        resultado = fahrenheitARankine(grados);
    } else if (tipoTemperatura === 'kelvin' && tipoTemperaturaDeseada === 'celsius') {
        resultado = kelvinACelsius(grados);
    } else if (tipoTemperatura === 'kelvin' && tipoTemperaturaDeseada === 'fahrenheit') {
        resultado = kelvinAFahrenheit(grados);
    } else if (tipoTemperatura === 'kelvin' && tipoTemperaturaDeseada === 'rankine') {
        resultado = kelvinARankine(grados);
    }    else if (tipoTemperatura === 'rankine' && tipoTemperaturaDeseada === 'celsius') {
        resultado = rankineACelsius(grados);
    }    else if (tipoTemperatura === 'rankine' && tipoTemperaturaDeseada === 'kelvin') {
        resultado = rankineAKelvin(grados);
    }    else if (tipoTemperatura === 'rankine' && tipoTemperaturaDeseada === 'fahrenheit') {
        resultado = rankineAFahrenheit(grados);
    } else {
        mostrarAviso();
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
function celsiusARankine(grados) {  
    return (grados + 273.15) * 9/5;
}


function kelvinARankine(grados) {
    return grados * 9/5;
}

function fahrenheitARankine(grados) {
    return grados + 459.67;
}
function rankineACelsius(grados) {
    return (grados - 491.67) * 5/9;
}


function rankineAKelvin(grados) {
    return grados * 5/9;
}


function rankineAFahrenheit(grados) {
     return grados - 459.67;
}
function mostrarAviso() {
    alert("Por favor, procura utilizar diferentes escalas de temperatura");
  }
