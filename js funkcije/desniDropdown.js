// /js funkcije/desniDropdown.js

function toggleRightDropdown() {
    const dropdown = document.getElementById('desniDropdown');
    dropdown.classList.toggle('show');
}

// Added navigation functions
function naPocetnu() {
    window.location.href = '../pocetna stranica/main.html';
}

function goToWeather() {
    window.location.href = '../vremenska prognoza/vrijeme.html';
}
