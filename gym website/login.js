document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert('Logging in...');
        // Proceed with login logic (AJAX or page redirection)
    } else {
        alert('Please fill all fields.');
    }
});
