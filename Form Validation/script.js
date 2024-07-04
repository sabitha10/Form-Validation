document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    let errorMessage = '';

    if (username.length < 5) {
        errorMessage += 'Username must be at least 5 characters long. ';
    }
    if (password.length < 8) {
        errorMessage += 'Password must be at least 8 characters long. ';
    }
    if (!email.includes('@')) {
        errorMessage += 'Email must be valid. ';
    }

    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
    } else {
        document.getElementById('error-message').textContent = '';
        alert('Form submitted successfully!');
    }
});
