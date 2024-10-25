// login.js

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

// Fake login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate successful login
    localStorage.setItem('loggedIn', 'true');
    alert('Successfully logged in!');
    window.location.href = '../pocetna stranica/main.html';
});

// Fake register functionality
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate successful registration
    alert('Successfully registered!');
    showLogin();
});
