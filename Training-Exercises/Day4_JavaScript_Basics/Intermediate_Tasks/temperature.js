function toFahrenheit(event) {
    event.preventDefault();
    var celsius = document.getElementsByName("cel")[0].value
    var fahrenheit = (celsius * 9/5) + 32
    document.getElementsByName("fah")[0].value = fahrenheit
    return false
}