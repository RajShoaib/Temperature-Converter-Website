function convertTemp() {

    var tempInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;

    if (!tempInput || isNaN(tempInput)) {
        alert("Please enter a valid temperature.");
        return;
    }


    var convertedTemperature;
    switch (unit) {
        case "celsius":
            convertedTemperature = (parseFloat(tempInput) * 9 / 5) + 32;
            document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
            break;
        case "fahrenheit":
            convertedTemperature = (parseFloat(tempInput) - 32) * 5 / 9;
            document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
            break;
        case "kelvin":
            convertedTemperature = parseFloat(tempInput) + 273.15;
            document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} K`;
            break;
        default:
            alert("Invalid unit selected.");
    }
}
