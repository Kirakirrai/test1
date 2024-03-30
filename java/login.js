function validateLogin() {
            // Get input values
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Check if username and password are correct
            // Replace this with your actual login validation logic
            if (username === 'your_username' && password === 'your_password') {
                // Redirect to the home page
                window.location.href = 'home.html'; // Replace 'home.html' with your actual home page URL
            } else {
                // If login is incorrect, display an error message
                var errorElement = document.getElementById('error-message');
                errorElement.innerText = 'Invalid username or password. Please try again.';
            }

            // Prevent form submission
            return false;
        }
