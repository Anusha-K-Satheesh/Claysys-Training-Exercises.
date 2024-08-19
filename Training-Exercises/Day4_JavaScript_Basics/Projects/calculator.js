function num(nos) {
    
    document.getElementById("output").value=document.getElementById("output").value+nos;
}
function clears() {
    document.getElementById("output").value=""
}
function equalClick() {
    var text=document.getElementById("output").value
    result=eval(text)
    document.getElementById("output").value=result
}