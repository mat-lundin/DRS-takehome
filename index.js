// grab html elements for buttons
const darkBtn = document.getElementById('darkBtn');
const shopBtn = document.getElementById('shopBtn');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');

// grab html elements for sections
const navEl = document.getElementById('nav');
const navLinks = document.querySelectorAll('.navLinkLight')
const bannerEl = document.getElementById('banner');
const productsEl = document.getElementById('products');
const servicesEl = document.getElementById('services');
const productArr = document.querySelectorAll('.productLight')
const aboutEl = document.getElementById('about');
const contactEl = document.getElementById('contact');

// grab html elements for slides
// initial code from https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
const slides = document.querySelectorAll(".slide");

// grab html elements for form
const contactForm = document.getElementById('contactForm');
const fnameEl = document.getElementById('fname');
const emailEl = document.getElementById('email');
const msgEl = document.getElementById('msg');
const confirmEl = document.getElementById('confirm');
const popup = document.getElementById("myPopup");

// keep track of darkmode vs lightmode
let isDark = false;

// assign translateX property to all slides
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

// keep track of current slidde
let curSlide = 0;
const maxSlide = slides.length - 1;

// select next and previous slide buttons
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");


// when dark mode button is clicked, replace the light classes for dark classes
darkBtn.addEventListener('click', ()=>{
    if (isDark) {
       productArr.forEach((element)=>{
        element.classList.toggle('productDark')
       })
       navLinks.forEach((element)=> {
        element.classList.toggle('navLinkDark')
       })
       slides.forEach((element)=> {
        element.classList.toggle('slideDark')
       })
        bannerEl.className = 'bannerLight';
        shopBtn.className = 'shopBtnLight';
        productsEl.className = 'productsLight';
        servicesEl.className = 'servicesLight';
        aboutEl.className = 'aboutLight';
        contactEl.className = 'contactLight';
        darkBtn.className = 'darkBtnLight';
        navEl.className = 'navLight';
        submitBtn.className = 'formBtnLight';
        resetBtn.className = 'formBtnLight';
        darkBtn.innerHTML = 'Dark Mode';
        isDark = false;
    } else {
        productArr.forEach((element)=>{
            element.classList.toggle('productDark')
           })
           navLinks.forEach((element)=>{
            element.classList.toggle('navLinkDark')
           })
           slides.forEach((element)=> {
            element.classList.toggle('slideDark')
           })
        bannerEl.className = 'bannerDark';
        shopBtn.className = 'shopBtnDark';
        productsEl.className = 'productsDark';
        servicesEl.className = 'servicesDark'
        aboutEl.className = 'aboutDark';
        contactEl.className = 'contactDark';
        darkBtn.className = 'darkBtnDark';
        navEl.className = 'navDark';
        submitBtn.className = 'formBtnDark';
        resetBtn.className = 'formBtnDark';
        darkBtn.innerHTML = 'Light Mode';
        isDark = true;
    };
});

// when form is submitted, log submitted info to the console or tell the user to enter data
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fnameVal = fnameEl.value;
    const emailVal = emailEl.value;
    const msgVal = msgEl.value;

    if (fnameVal || emailVal || msgVal) {
        console.log(`First Name: ${fnameVal} \nEmail: ${emailVal}\nMessage: ${msgVal}`);
        showFormConfirm()
        fnameEl.value = '';
        emailEl.value = '';
        msgEl.value = '';
    } else {
        showFormDeny();
    };
});

// when reset button is clicked, remove confirmation text
resetBtn.addEventListener('click', ()=>{
    confirmEl.innerHTML = ''
    if (popup.classList.contains('show')) {
        popup.classList.toggle('show')
    }
});

// confirmation popup
function showFormConfirm() {
    popup.classList.toggle("show");
    popup.innerHTML = 'Form Data Logged to Console!';
  }

// confirmation popup
function showFormDeny() {
    popup.classList.toggle("show");
    popup.innerHTML = 'Oops! No data entered. Please enter data and submit.';
  };

// index.html calls this after a setTimeout of 2 seconds
// reset button also hides popup, so check before toggling the class
  function hideFormStatus() {
    if (popup.classList.contains('show')) {
        popup.classList.toggle('show')
    };
  };

// next slide button listener
nextSlide.addEventListener('click', ()=> {
      // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide ++;
  }

 slides.forEach((slide, indx) => {
   slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
 });
});

// previous slide button listener
prevSlide.addEventListener('click', ()=>{
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide --;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});