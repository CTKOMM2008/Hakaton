// /js funkcije/jezik.js

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    showLanguage(lang);
}

function showLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}

// Check localStorage for language preference
document.addEventListener('DOMContentLoaded', () => {
    let lang = localStorage.getItem('language') || 'me'; // default to Montenegrin
    showLanguage(lang);
});

// Language switch functions
function promijeniCrnogorski() {
    setLanguage('me');
}

function promijeniEngleski() {
    setLanguage('en');
}
