// grab html elements
const darkBtn = document.getElementById('darkBtn');
const shopBtn = document.getElementById('shopBtn');
const submitBtn = document.getElementById('submitBtn');
const bannerEl = document.getElementById('banner');
const productsEl = document.getElementById('products');
const aboutEl = document.getElementById('about');
const contactEl = document.getElementById('contact');

let isDark = false;

// when dark mode button is clicked, replace the light classes for dark classes
darkBtn.addEventListener('click', ()=>{
    if (isDark) {
        bannerEl.className = 'bannerLight';
        shopBtn.className = 'shopBtnLight';
        productsEl.className = 'productsLight';
        aboutEl.className = 'aboutLight';
        contactEl.className = 'contactLight';
        darkBtn.className = 'darkBtnLight';
        darkBtn.innerHTML = 'Dark Mode';
        isDark = false;
    } else {
        bannerEl.className = 'bannerDark';
        shopBtn.className = 'shopBtnDark';
        productsEl.className = 'productsDark';
        aboutEl.className = 'aboutDark';
        contactEl.className = 'contactDark';
        darkBtn.className = 'darkBtnDark';
        darkBtn.innerHTML = 'Light Mode';
        isDark = true;
    }
})