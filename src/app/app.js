// For Contact Me page
// Function to validate the form fields
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting if validation fails

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const message = document.getElementById('message');
    const messageBox = document.getElementById('message-box');

    // Clear previous validation messages
    messageBox.classList.add('d-none');

    let valid = true;

    // Basic validation checks
    if (name.value.trim() === '') {
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value.trim() === '' || !emailPattern.test(email.value)) {
        valid = false;
    }

    const telPattern = /^[0-9]{10}$/; // Assuming a 10-digit phone number format
    if (tel.value.trim() === '' || !telPattern.test(tel.value)) {
        valid = false;
    }

    if (message.value.trim() === '') {
        valid = false;
    }

    if (valid) {
        // If everything is valid, submit the form
        document.getElementById('contact-me-form').submit();
        document.getElementById('contact-me-form').reset();
    } else {
        messageBox.classList.remove('d-none');
    }


}

// Attach the validation function to the form submit event
const eleForm = document.getElementById('contact-me-form');
eleForm.addEventListener('submit', validateForm);

// For footer
const date = new Date();
const footerYear = document.getElementById('footer-year');
footerYear.textContent = date.getFullYear();

// Enable tooltips on page load
var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
var tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
