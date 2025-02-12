document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Validate the form fields
    if (!username || !email || !password || !confirmPassword) {
        errorMessage.textContent = "Please fill out all fields.";
        errorMessage.style.display = "block";
        return;
    }

    // Validate if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        errorMessage.style.display = "block";
        return;
    }

    // Store the user data in localStorage
    const userData = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Show success message and redirect to login page
    alert("Account created successfully!");
    window.location.href = '/account.html'; // Redirect to Login page
});


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const loginUsername = document.getElementById('username').value;
    const loginPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Retrieve stored user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Validate if fields are empty
    if (!loginUsername || !loginPassword) {
        alert('Please fill in all fields!');
        return;
    }

    // If no user data is found in localStorage
    if (!storedUserData) {
        alert('No user found. Please sign up first.');
        return;
    }

    // Check if the entered credentials match the stored ones
    if (storedUserData.username !== loginUsername || storedUserData.password !== loginPassword) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid username or password.";
        return;
    }

    // Successful login
    alert('Login successful!');
    window.location.href = '/index.html'; // Redirect to account page (or any other page)
});





