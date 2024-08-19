function validate() {
    var email = document.getElementById("mail").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var error = document.getElementById("error");
    
    if (emailPattern.test(email)) {
        error.style.display = "none";
        return true;
        
    } else {
        // alert("Please enter a valid email address.");
        error.style.display = "block";
        return false;
    }
}

