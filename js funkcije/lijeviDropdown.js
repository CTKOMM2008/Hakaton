// /js funkcije/lijeviDropdown.js

function handleProfileClick() {

}

function toggleLeftDropdown() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (isLoggedIn) {
        // Redirect to profile page or show profile options
        alert('Profile options would be here.');
    } else {
        window.location.href = '../login stranica/login.html';
    }
    const dropdown = document.getElementById('lijeviDropdown');
    dropdown.classList.toggle('show');
}