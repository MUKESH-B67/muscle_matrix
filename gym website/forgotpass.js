document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    
    if (email) {
        alert('Password reset link sent to ' + email);
        // Proceed with sending reset link (AJAX or page redirection)
    } else {
        alert('Please enter a valid email.');
    }
});
