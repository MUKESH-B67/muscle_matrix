document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (username && email && password) {
        alert('Signing up...');
        // Proceed with signup logic (AJAX or page redirection)
    } else {
        alert('Please fill all fields.');
    }
});
