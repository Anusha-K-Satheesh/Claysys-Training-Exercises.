$(document).ready(function() {
    // Email validation
    $('#email').on('focusout', function() {   // When the user leaves the email input field (focus out event)
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   // Define a regular expression pattern for validating email addresses
        let email = $(this).val();   // Get the value entered in the email input field

        if (!email) {   // Check if the email field is empty
            $('#email').addClass('error').removeClass('valid');   // If empty, add 'error' class and remove 'valid' class
            $('#emailError').text('This field is required.').show();
        } else if (!emailPattern.test(email)) {   // Check if the email format is valid
            $('#email').addClass('error').removeClass('valid');   // If format is invalid, add 'error' class and remove 'valid' class
            $('#emailError').text('Please enter a valid email address.').show();
        } else {
            $('#email').removeClass('error').addClass('valid');
            $('#emailError').hide();   // Hide the error message
        }
    });

    // Password validation
    $('#password').on('focusout', function() {  // When the user leaves the password input field (focus out event)
        let password = $(this).val();   // Get the value entered in the password input field

        if (!password) {   // Check if the password field is empty
            $('#password').addClass('error').removeClass('valid');
            $('#passwordError').text('This field is required.').show();
        } else if (password.length < 6) {   // Check if the password is shorter than 6 characters
            $('#password').addClass('error').removeClass('valid');   // If too short, add 'error' class and remove 'valid' class
            $('#passwordError').text('Password must be at least 6 characters long.').show();
        } else {    // If the password field is not empty and has at least 6 characters
            $('#password').removeClass('error').addClass('valid');
            $('#passwordError').hide();   // Hide the error message
        }
    });

    // Form submission
    $('#btn').on('click', function(event) {
        // Prevent form submission
        event.preventDefault();   // Stop the form from submitting

        let email = $('#email').val();   // Get the values entered in the email and password fields
        let password = $('#password').val();
        let valid = true;   // Assume everything is valid at the start

        // Validate email
        if (!email) {    // Check if the email field is empty
            $('#email').addClass('error').removeClass('valid');
            $('#emailError').text('This field is required.').show();
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {   // Check if the email format is correct
            $('#email').addClass('error').removeClass('valid');
            $('#emailError').text('Please enter a valid email address.').show();
            valid = false;
        } else {
            $('#email').removeClass('error').addClass('valid');
            $('#emailError').hide();
        }

        // Validate password
        if (!password) {   // Check if the password field is empty
            $('#password').addClass('error').removeClass('valid');
            $('#passwordError').text('This field is required.').show();
            valid = false;
        } else if (password.length < 6) {
            $('#password').addClass('error').removeClass('valid');
            $('#passwordError').text('Password must be at least 6 characters long.').show();
            valid = false;
        } else {
            $('#password').removeClass('error').addClass('valid');
            $('#passwordError').hide();
        }

        // If all fields are valid, submit the form
        if (valid) {
            // For demonstration, just alerting success
            alert('Form submitted successfully!');

            // Clear input fields and reset form
            $('#email').val('').removeClass('error').removeClass('valid');
            $('#password').val('').removeClass('error').removeClass('valid');
            $('#emailError').hide();
            $('#passwordError').hide();

            // Optionally, you can reset other form elements or perform additional actions here
        }
    });
});


