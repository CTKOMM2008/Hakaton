document.addEventListener('DOMContentLoaded', () => {
    // Show weather icon if logged in
    const isLoggedIn = localStorage.getItem('loggedIn');
    const weatherIcon = document.getElementById('weatherIcon');

    if (isLoggedIn) {
        weatherIcon.style.display = 'block';
    } else {
        weatherIcon.style.display = 'none';
    }
});