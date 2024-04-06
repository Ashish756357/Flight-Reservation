// Get the form element
const form = document.querySelector('.hero form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values
    const fromInput = document.querySelector('input[name="from"]');
    const toInput = document.querySelector('input[name="to"]');
    const departureInput = document.querySelector('input[name="departure"]');
    const returnInput = document.querySelector('input[name="return"]');

    // Get the values entered by the user
    const fromValue = fromInput.value;
    const toValue = toInput.value;
    const departureValue = departureInput.value;
    const returnValue = returnInput.value;

    // Perform validation if needed
    // For example, check if the required fields are not empty

    // Process the form data (e.g., submit it to the server or perform some other action)
    console.log('Form submitted with the following data:');
    console.log('From:', fromValue);
    console.log('To:', toValue);
    console.log('Departure Date:', departureValue);
    console.log('Return Date:', returnValue);

    // Clear the form inputs
    fromInput.value = '';
    toInput.value = '';
    departureInput.value = '';
    returnInput.value = '';
});




document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Validation logic
    if (validateForm()) {
        alert('Booking successful!');
        // You can add additional actions here, like submitting the form via AJAX
    } else {
        alert('Please fill out all required fields.');
    }
});

function validateForm() {
    var checkInDate = document.getElementById('check-in-date').value;
    var checkOutDate = document.getElementById('check-out-date').value;
    var rooms = document.getElementById('rooms').value;
    var adults = document.getElementById('adults').value;
    // Check if any of the required fields are empty
    if (checkInDate === '' || checkOutDate === '' || rooms === '' || adults === '') {
        return false;
    }
    return true;
}

