// grab html elements for buttons
const darkBtn = document.getElementById('darkBtn');
const shopBtn = document.getElementById('shopBtn');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');

// grab html elements for sections
const navEl = document.getElementById('nav');
const contactLink = document.getElementById('contactLink');
const aboutLink = document.getElementById('aboutLink');
const shopLink = document.getElementById('shopLink');
const homeLink = document.getElementById('homeLink');
const bannerEl = document.getElementById('banner');
const productsEl = document.getElementById('products');
const aboutEl = document.getElementById('about');
const contactEl = document.getElementById('contact');

// grab html elements for form
const contactForm = document.getElementById('contactForm');
const fnameEl = document.getElementById('fname');
const emailEl = document.getElementById('email');
const msgEl = document.getElementById('msg');
const confirmEl = document.getElementById('confirm');

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
        navEl.className = 'navLight';
        contactLink.className = 'navLinkLight';
        aboutLink.className = 'navLinkLight';
        shopLink.className = 'navLinkLight';
        homeLink.className = 'navLinkLight';
        submitBtn.className = 'formBtnLight';
        resetBtn.className = 'formBtnLight';
        darkBtn.innerHTML = 'Dark Mode';
        isDark = false;
    } else {
        bannerEl.className = 'bannerDark';
        shopBtn.className = 'shopBtnDark';
        productsEl.className = 'productsDark';
        aboutEl.className = 'aboutDark';
        contactEl.className = 'contactDark';
        darkBtn.className = 'darkBtnDark';
        navEl.className = 'navDark';
        contactLink.className = 'navLinkDark';
        aboutLink.className = 'navLinkDark';
        shopLink.className = 'navLinkDark';
        homeLink.className = 'navLinkDark';
        submitBtn.className = 'formBtnDark';
        resetBtn.className = 'formBtnDark';
        darkBtn.innerHTML = 'Light Mode';
        isDark = true;
    }
})

// when form is submitted, do something or at least don't refresh the page
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fnameVal = fnameEl.value;
    const emailVal = emailEl.value;
    const msgVal = msgEl.value;

    console.log(`First Name: ${fnameVal} \nEmail: ${emailVal}\nMessage: ${msgVal}`);
    confirmEl.innerHTML = 'Form Data Logged to Console!'
})