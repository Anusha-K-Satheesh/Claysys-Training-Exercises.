$(document).ready(function() {
    // Set up event listeners for form validation on input or blur events

    // Validate first name input field
    $('input[name="fname"]').on('input blur', function() {
        validateName($(this));
    });

    // Validate last name input field
    $('input[name="lname"]').on('input blur', function() {
        validateName($(this));
    });

    // Validate date of birth input field
    $('input[name="dob"]').on('input blur', function() {
        validateDateOfBirth($(this));
    });

    // Validate phone number input field
    $('input[name="phonenmbr"]').on('input blur', function() {
        validatePhoneNumber($(this));
    });

    // Validate email input field
    $('input[name="email"]').on('input blur', function() {
        validateEmail($(this));
    });

    // Validate address input field
    $('input[name="address"]').on('input blur', function() {
        validateAddress($(this));
    });

    // Validate username input field
    $('input[name="uname"]').on('input blur', function() {
        validateUsername($(this));
    });

    // Validate password input field
    $('input[name="pwd"]').on('input blur', function() {
        validatePassword($(this));
    });

    // Validate confirm password input field
    $('input[name="confirmpwd"]').on('input blur', function() {
        validateConfirmPassword($(this), $('input[name="pwd"]'));
    });

    // Validate entire form when the sign-up button is clicked
    $('#btnsignup').on('click', function() {
        var isValid = true; // Assume the form is valid initially

        // Check each input and select field for validation
        $('input.field, select.field').each(function() {
            if (!validateField($(this))) {
                isValid = false; // Mark form as invalid if any field fails validation
            }
        });

        // If form is valid, clear it (optional)
        if (isValid) {
            clearForm(); // Clear all fields after successful submission
        }
    });

    // Function to validate name fields (first and last name)
    function validateName(input) {
        var value = input.val().trim();
        var regex = /^[A-Za-z]+$/; // Regex for only letters
        if (value === '') {
            showError(input, 'This field is required.');
        } else if (!regex.test(value)) {
            showError(input, 'Name must contain only letters.');
        } else {
            hideError(input); // If valid, hide any error message
        }
    }

    // Function to validate phone number
    function validatePhoneNumber(input) {
        var value = input.val().trim();
        var regex = /^[6789][0-9]{9}$/; // Regex for a valid phone number
        if (value === '') {
            showError(input, 'This field is required.');
        } else if (!regex.test(value)) {
            showError(input, 'Invalid phone number');
        } else {
            hideError(input);
        }
    }

    // Function to validate email
    function validateEmail(input) {
        var value = input.val().trim();
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for a valid email
        if (value === '') {
            showError(input, 'This field is required.');
        } else if (!regex.test(value)) {
            showError(input, 'Invalid email address.');
        } else {
            hideError(input);
        }
    }

    // Function to validate address (basic non-empty check)
    function validateAddress(input) {
        var value = input.val().trim();
        if (value === '') {
            showError(input, 'This field is required.');
        } else {
            hideError(input);
        }
    }

    // Function to validate username (same regex as email)
    function validateUsername(input) {
        var value = input.val().trim();
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === '') {
            showError(input, 'This field is required.');
        } else if (!regex.test(value)) {
            showError(input, 'Invalid Username');
        } else {
            hideError(input);
        }
    }

    // Function to validate password
    function validatePassword(input) {
        var value = input.val().trim();
        if (value === '') {
            showError(input, 'This field is required.');
        } else if (value.length < 6) {
            showError(input, 'Password must be at least 6 characters.');
        } else {
            hideError(input);
        }
    }

    // Function to validate confirm password (must match the password)
    function validateConfirmPassword(confirmInput, passwordInput) {
        var confirmValue = confirmInput.val().trim();
        var passwordValue = passwordInput.val().trim();
        if (confirmValue === '') {
            showError(confirmInput, 'This field is required.');
        } else if (confirmValue !== passwordValue) {
            showError(confirmInput, 'Passwords do not match.');
        } else {
            hideError(confirmInput);
        }
    }

    // Function to validate date of birth (must be a past date)
    function validateDateOfBirth(input) {
        var value = input.val().trim();
        var dob = new Date(value);
        var today = new Date();
        if (value === '') {
            showError(input, 'This field is required.');
        } else if (dob >= today) {
            showError(input, 'Invalid date');
        } else {
            hideError(input);
        }
    }

    // Function to validate any input or select field
    function validateField(input) {
        if (input.is('input')) {
            var name = input.attr('name');
            // Call the appropriate validation function based on input name
            if (name === 'fname' || name === 'lname') {
                validateName(input);
            } else if (name === 'phonenmbr') {
                validatePhoneNumber(input);
            } else if (name === 'email') {
                validateEmail(input);
            } else if (name === 'uname') {
                validateUsername(input);
            } else if (name === 'pwd') {
                validatePassword(input);
            } else if (name === 'confirmpwd') {
                validateConfirmPassword(input, $('input[name="pwd"]'));
            } else if (name === 'dob') {
                validateDateOfBirth(input);
            } else if (name === 'address') {
                validateAddress(input);
            }
        } else if (input.is('select')) {
            var value = input.val();
            if (value === 'select') {
                showError(input, 'This field is required.');
            } else {
                hideError(input);
            }
        }
        // Return true if no error message is visible for the input
        return !input.next('.error-msg').is(':visible');
    }

    // Function to show error message for an input
    function showError(input, message) {
        input.css('border-color', 'red'); // Set border color to red
        input.next('.error-msg').text(message).show(); // Show error message
    }

    // Function to hide error message for an input
    function hideError(input) {
        input.css('border-color', 'green'); // Set border color to green
        input.next('.error-msg').text('').hide(); // Hide error message
    }

    // Function to clear the form and reset field styles
    function clearForm() {
        $('input.field, select.field').each(function() {
            $(this).val('').css('border-color', ''); // Clear value and reset border color
            $(this).next('.error-msg').hide(); // Hide error messages
        });
    }
});
