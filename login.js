window.addEventListener('DOMContentLoaded', (event) => {
    const loginBtn = document.getElementById('loginBtn');
    const errorMessage = document.getElementById('errorMessage');

    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('users.txt')
            .then(response => response.text())
            .then(data => {
                const users = data.split('\n');
                const foundUser = users.find(user => {
                    const [storedUsername, storedPassword] = user.split(',');
                    return username === storedUsername.trim() && password === storedPassword.trim();
                });
                
                if (foundUser) {
                    // Redirect to home page or perform other actions
                    console.log('Login successful');
                } else {
                    errorMessage.textContent = 'Invalid username or password. Please try again.';
                }
            })
            .catch(error => {
                console.error('Error reading file:', error);
                errorMessage.textContent = 'An error occurred. Please try again later.';
            });
    });
});