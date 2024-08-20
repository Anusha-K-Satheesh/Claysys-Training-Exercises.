// function validateDate() {
//     const dateInput = document.querySelector('input[name="date"]'); 
//     const errorElement = document.getElementById('date-error');
//     const selectedDate = new Date(dateInput.value); 
//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
//     // Check if the date input field is empty.
//     if (dateInput.value.trim() === '') {
//         errorElement.textContent = 'Required field'; // Set the error message for an empty field.
//         setError(dateInput, errorElement);
//     } else if (selectedDate < today) {
//         errorElement.textContent = 'Invalid date';
//         setError(dateInput, errorElement); // Call a function to apply error styling to the input field and error element.
//     } else {
//         setSuccess(dateInput, errorElement);  
//     }
// }
// function validateName() {
//     const nameInput = document.querySelector('input[name="fname"]'); // Select the input field with the name 'fname'
//     const errorElement = document.getElementById('fname-error');
//     const nameRegex = /^[a-zA-Z\s]+$/; // Regular expression to allow only letters and spaces
//     if (nameInput.value.trim() === '') {
//         errorElement.textContent = 'Required field';
//         setError(nameInput, errorElement);
//     } else if (!nameRegex.test(nameInput.value.trim())) {
//         errorElement.textContent = 'Name should only contain letters and spaces';
//         setError(nameInput, errorElement);
//     } else {
//         setSuccess(nameInput, errorElement);
//     }
// }
// function validateAge() {
//     const ageInput = document.querySelector('input[name="age"]');
//     const errorElement = document.getElementById('age-error');
//     const ageValue = parseInt(ageInput.value, 10); // Convert the value from the 'ageInput' field to an integer, using base 10
//     if (ageInput.value.trim() === '') {
//         errorElement.textContent = 'Required field';
//         setError(ageInput, errorElement);
//     } else if (isNaN(ageValue) || ageValue < 1 || ageValue > 120) {  
//         errorElement.textContent = 'Invalid Age';
//         setError(ageInput, errorElement);
//     } else {
//         setSuccess(ageInput, errorElement);
//     }
// }
// // Function to validate the emergency contact person field
// function validatePerson() {
//     const personInput = document.querySelector('input[name="person"]');  // Select the input field with the name 'person'
//     const errorElement = document.getElementById('person-error');
//     validateField(personInput, errorElement);
// }
// // Validate Position Field
// function validatePosition() {
//     const positionInput = document.querySelector('input[name="position"]');
//     const errorElement = document.getElementById('position-error');
//     validateField(positionInput, errorElement);
// }
// // Validate Gender Fields
// function validateGender() {
//     const maleInput = document.getElementById('male');
//     const femaleInput = document.getElementById('female');
//     const errorElement = document.getElementById('gender-error');
//     if (!maleInput.checked && !femaleInput.checked) {  // Check if neither the male nor the female radio button is checked
//         errorElement.textContent = 'Required field';   // If neither is checked, set the error message to 'Required field'
//         errorElement.style.display = 'block';  
//     } else {
//         errorElement.style.display = 'none';
//     }
// }
// // General Field Validation Function
// function validateField(input, errorElement) {
//     if (input.value.trim() === '') {  // Check if the input field is empty
//         errorElement.textContent = 'Required field';  // If the input is empty, set the error message to 'Required field'
//         setError(input, errorElement);
//     } else {
//         setSuccess(input, errorElement);
//     }
// }
// // Set Error Style and Message
// function setError(input, errorElement) {
//     input.classList.remove('success'); // Remove the 'success' class from the input element, if it exists
//     input.classList.add('error');  // Add the 'error' class to the input element to apply error styles
//     errorElement.style.display = 'block';
// }
// // Set Success Style and Hide Message
// function setSuccess(input, errorElement) {
//     input.classList.remove('error');
//     input.classList.add('success');
//     errorElement.style.display = 'none';
// }
// // Validate Last Name Fields
// function validateLastName() {
//     const boxspaceInput = document.getElementById('boxspace'); // Select the boxspace input field by its ID
//     const boxspacesInput = document.getElementById('boxspaces'); // Select the boxspaces input field by its ID
    
//     // Validate the first last name input field
//     const errorElement1 = document.getElementById('lname-error');
//     validateLastNameField(boxspaceInput, errorElement1);

//     // Validate the second last name input field
//     const errorElement2 = document.getElementById('lname-error2');
//     validateLastNameField(boxspacesInput, errorElement2);
// }
// // General Last Name Field Validation Function
// function validateLastNameField(input, errorElement) {
//     if (input.value.trim() === '') {  // Check if the input field is empty
//         errorElement.textContent = 'Required field';  // If the input is empty, set the error message to 'Required field'
//         input.style.border = '2px solid red';  // Set the border color to red
//         errorElement.style.display = 'block';  // Display the error message
//     } else {
//         input.style.border = '2px solid green';  // Set the border color to green if the input is valid
//         errorElement.style.display = 'none';  // Hide the error message
//     }
// }



// Validate Date Field
function validateDate() {
    const dateInput = document.querySelector('input[name="date"]'); 
    const errorElement = document.getElementById('date-error');
    const selectedDate = new Date(dateInput.value); 
    const today = new Date();
    
    today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
    
    if (dateInput.value.trim() === '') {
        errorElement.textContent = 'Required field'; 
        setError(dateInput, errorElement);
    } else if (selectedDate < today) {
        errorElement.textContent = 'Invalid date';
        setError(dateInput, errorElement);
    } else {
        setSuccess(dateInput, errorElement);  
    }
}

// Validate First Name Field
function validateName() {
    const nameInput = document.querySelector('input[name="fname"]'); 
    const errorElement = document.getElementById('fname-error');
    const nameRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
    
    if (nameInput.value.trim() === '') {
        errorElement.textContent = 'Required field';
        setError(nameInput, errorElement);
    } else if (!nameRegex.test(nameInput.value.trim())) {
        errorElement.textContent = 'Name should only contain letters and spaces';
        setError(nameInput, errorElement);
    } else {
        setSuccess(nameInput, errorElement);
    }
}

// Validate Age Field
function validateAge() {
    const ageInput = document.querySelector('input[name="age"]');
    const errorElement = document.getElementById('age-error');
    const ageValue = parseInt(ageInput.value, 10); 
    
    if (ageInput.value.trim() === '') {
        errorElement.textContent = 'Required field';
        setError(ageInput, errorElement);
    } else if (isNaN(ageValue) || ageValue < 1 || ageValue > 120) {  
        errorElement.textContent = 'Invalid Age';
        setError(ageInput, errorElement);
    } else {
        setSuccess(ageInput, errorElement);
    }
}

// Validate Emergency Contact Person Field
function validatePerson() {
    const personInput = document.querySelector('input[name="person"]');  
    const errorElement = document.getElementById('person-error');
    const nameRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
    
    if (personInput.value.trim() === '') {
        errorElement.textContent = 'Required field';
        setError(personInput, errorElement);
    } else if (!nameRegex.test(personInput.value.trim())) {
        errorElement.textContent = 'Name should only contain letters and spaces';
        setError(personInput, errorElement);
    } else {
        setSuccess(personInput, errorElement);
    }
}

// Validate Position Field
function validatePosition() {
    const positionInput = document.querySelector('input[name="position"]');
    const errorElement = document.getElementById('position-error');
    const positionRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
    
    if (positionInput.value.trim() === '') {
        errorElement.textContent = 'Required field';
        setError(positionInput, errorElement);
    } else if (!positionRegex.test(positionInput.value.trim())) {
        errorElement.textContent = 'Position should only contain letters and spaces';
        setError(positionInput, errorElement);
    } else {
        setSuccess(positionInput, errorElement);
    }
}

// Validate Gender Field
function validateGender() {
    const maleInput = document.getElementById('male');
    const femaleInput = document.getElementById('female');
    const errorElement = document.getElementById('gender-error');
    if (!maleInput.checked && !femaleInput.checked) {
        errorElement.textContent = 'Required field';   
        errorElement.style.display = 'block';  
    } else {
        errorElement.style.display = 'none';
    }
}

// Validate Last Name Fields
function validateLastName() {
    const boxspaceInput = document.getElementById('boxspace'); 
    const boxspacesInput = document.getElementById('boxspaces'); 
    
    const errorElement1 = document.getElementById('lname-error');
    validateLastNameField(boxspaceInput, errorElement1);

    const errorElement2 = document.getElementById('lname-error2');
    validateLastNameField(boxspacesInput, errorElement2);
}

// General Last Name Field Validation Function
function validateLastNameField(input, errorElement) {
    const nameRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
    
    if (input.value.trim() === '') {
        errorElement.textContent = 'Required field';  
        input.style.border = '2px solid red';  
        errorElement.style.display = 'block';  
    } else if (!nameRegex.test(input.value.trim())) {
        errorElement.textContent = 'Last name should only contain letters and spaces';
        input.style.border = '2px solid red';
        errorElement.style.display = 'block';
    } else {
        input.style.border = '2px solid green';  
        errorElement.style.display = 'none';  
    }
}

// General Field Validation Function
function validateField(input, errorElement) {
    if (input.value.trim() === '') {
        errorElement.textContent = 'Required field';  
        setError(input, errorElement);
    } else {
        setSuccess(input, errorElement);
    }
}

// Set Error Style and Message
function setError(input, errorElement) {
    input.classList.remove('success');
    input.classList.add('error');  
    errorElement.style.display = 'block';
}

// Set Success Style and Hide Message
function setSuccess(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.style.display = 'none';
}


