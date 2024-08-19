function validate() {
    var fullname = document.getElementById("name").value
    var email = document.getElementById("mail").value;
    var password = document.getElementById("pwd").value
    


    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    var fullnameerror = document.getElementById("nameerror");
    var mailerror = document.getElementById("mailerror");
    var passworderror = document.getElementById("pwderror");
    

    var valid = true

    if (!emailPattern.test(email)) {
        mailerror.style.display = "block";
        valid = false;
    } else {
        // alert("Please enter a valid email address.");
        mailerror.style.display = "none";
    }

    
    if (!passwordpattern.test(password)) {
        passworderror.style.display = "block";
        valid = false;
    } else {
        passworderror.style.display = "none";
    }


    if (fullname.trim().length < 8) {
        fullnameerror.style.display = "block";
        valid = false;
    } else {
        fullnameerror.style.display = "none";
    }

    return valid

}




