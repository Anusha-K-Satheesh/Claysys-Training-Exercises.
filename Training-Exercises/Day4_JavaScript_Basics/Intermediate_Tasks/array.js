let numbers = [ 54, 84, 32, 79, 10 ]
document.getElementById("before").innerHTML = "Numbers before sorting : "+ numbers

numbers.sort(function(a, b){return a - b});

document.getElementById("result").innerHTML = "Numbers after sorting : "+ numbers
