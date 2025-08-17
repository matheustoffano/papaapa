// HEADER SCROLL
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});



const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar-mobile');

menuIcon.addEventListener('click', function () {
    navbar.classList.toggle('active');
    menuIcon.innerHTML = navbar.classList.contains('active')
    ? '<i class="fa-solid fa-xmark" style="color:white;"></i>'
    : '<i class="fa-solid fa-bars"></i>';

    menuIcon.style.color = 'white';
})




// ============================
// SCRIPT CAR LAUNCH - CYBERTRUCK
// ============================




// ============================
// SCRIPT TESLA MODEL Y
// ============================
const modelYSilver = document.querySelector('#modely-silver');
const modelYBlue = document.querySelector('#modely-blue');
const modelYGrey = document.querySelector('#modely-grey');

const colorYSilver = document.querySelector('#color1');
const colorYBlue = document.querySelector('#color2');
const colorYGrey = document.querySelector('#color3');

// MODEL Y COLOR SWITCH
colorYSilver.addEventListener('click', function() {
    modelYSilver.style.display = 'block';
    modelYBlue.style.display = 'none';
    modelYGrey.style.display = 'none';
});
colorYBlue.addEventListener('click', function() {
    modelYBlue.style.display = 'block';
    modelYSilver.style.display = 'none';
    modelYGrey.style.display = 'none';
});
colorYGrey.addEventListener('click', function() {
    modelYGrey.style.display = 'block';
    modelYSilver.style.display = 'none';
    modelYBlue.style.display = 'none';
});

// ============================
// SCRIPT TESLA MODEL S
// ============================
const modelSRed = document.querySelector('#models-red');
const modelSMblue = document.querySelector('#models-mblue');
const modelSWhite = document.querySelector('#models-white');

const colorSRed = document.querySelector('#color4');
const colorSMblue = document.querySelector('#color5');
const colorSWhite = document.querySelector('#color6');

// MODEL S COLOR SWITCH
colorSRed.addEventListener('click', function() {
    modelSRed.style.display = 'block';
    modelSMblue.style.display = 'none';
    modelSWhite.style.display = 'none';
});
colorSMblue.addEventListener('click', function() {
    modelSMblue.style.display = 'block';
    modelSRed.style.display = 'none';
    modelSWhite.style.display = 'none';
});
colorSWhite.addEventListener('click', function() {
    modelSWhite.style.display = 'block';
    modelSRed.style.display = 'none';
    modelSMblue.style.display = 'none';
});

// ============================
// SCRIPT TESLA MODEL 3
// ============================
const model3Black = document.querySelector('#model3-black');
const model3Grey = document.querySelector('#model3-grey');
const model3White = document.querySelector('#model3-white');

const color3Black = document.querySelector('#color7');
const color3Grey = document.querySelector('#color8');
const color3White = document.querySelector('#color9');

// MODEL 3 COLOR SWITCH
color3Black.addEventListener('click', function() {
    model3Black.style.display = 'block';
    model3Grey.style.display = 'none';
    model3White.style.display = 'none';
});
color3Grey.addEventListener('click', function() {
    model3Grey.style.display = 'block';
    model3Black.style.display = 'none';
    model3White.style.display = 'none';
});
color3White.addEventListener('click', function() {
    model3White.style.display = 'block';
    model3Grey.style.display = 'none';
    model3Black.style.display = 'none';
});

// ============================
// SCRIPT TESLA MODEL X
// ============================

// ============================
// VARIÁVEIS TESLA MODEL X
// ============================
const modelXBlack = document.querySelector('#modelx-black');
const modelXRed = document.querySelector('#modelx-red');
const modelXSilver = document.querySelector('#modelx-silver');

const colorXBlack = document.querySelector('#color10');
const colorXRed = document.querySelector('#color11');
const colorXSilver = document.querySelector('#color12');


// BLACK COLOR
colorXBlack.addEventListener('click', function() {
    modelXBlack.style.display = 'block';
    modelXRed.style.display = 'none';
    modelXSilver.style.display = 'none';
});

// RED COLOR
colorXRed.addEventListener('click', function() {
    modelXRed.style.display = 'block';
    modelXBlack.style.display = 'none';
    modelXSilver.style.display = 'none';
});

// SILVER COLOR
colorXSilver.addEventListener('click', function() {
    modelXSilver.style.display = 'block';
    modelXBlack.style.display = 'none';
    modelXRed.style.display = 'none';
});


/* Efeito parallax ao scroll */
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.parallax-bg');
  parallax.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
});