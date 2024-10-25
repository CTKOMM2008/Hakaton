// logout.js

function logout() {
    // Clear user data from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');

    // Redirect to the login page or home page
    window.location.href = "/login stranica/login.html";
}