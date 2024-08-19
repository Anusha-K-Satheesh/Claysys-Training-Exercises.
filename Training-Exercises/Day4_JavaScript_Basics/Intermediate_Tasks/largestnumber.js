function largestNumber() {
    var firstNumber = parseFloat(document.getElementById("fnum").value)
    var secondNumber = parseFloat(document.getElementById("snum").value)
    var thirdNumber = parseFloat(document.getElementById("tnum").value)

    let large

    if ( firstNumber > secondNumber && firstNumber > thirdNumber ) {
        large = firstNumber
    } else if ( secondNumber > firstNumber && secondNumber > thirdNumber ) {
        large = secondNumber
    } else {
        large = thirdNumber 
    }

    document.getElementById("result").innerHTML = "Largest Number : " + large
}