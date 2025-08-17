// Seleção das imagens externas
const model3white = document.querySelector('#model3white');
const model3black = document.querySelector('#model3black');
const model3grey = document.querySelector('#model3grey');
const model3red = document.querySelector('#model3red');

// Seleção das imagens internas
const innerblack = document.querySelector('#innerimg1');
const innerwhite = document.querySelector('#innerimg2');

// Seleção das cores externas
const colorblack = document.querySelector('#colorblack');
const colorblue = document.querySelector('#colorblue');
const colorred = document.querySelector('#colorred');
const colorsilver = document.querySelector('#colorsilver');

// Seleção do texto informativo
const infoColor = document.querySelector('#info-color');

// Seleção das cores internas
const colorinnerblack = document.querySelector('#color-inner1');
const colorinnerwhite = document.querySelector('#color-inner2');

// Seleção do valor
const colorValue = document.querySelector('#color-selected');
const innerValue = document.querySelector('#inner-selected');
const value = document.querySelector('#value');

// Valores das cores externas
let priceBlack = 0;
let priceBlue = 1000;
let priceRed = 1500;
let priceSilver = 1200;

// Valores das cores internas
let inBlack = 'Black';
let inWhite = 'White';

// Botão de pagamento
let payment = document.getElementById('payment');

// Funções para trocar cores externas
colorblack.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = `Valor total = $ 47,990`;
    colorValue.innerHTML = `Cor selecionada =  Diamond Black - Incluso`;
    infoColor.innerHTML = 'Diamond Black';
    model3white.style.display = 'none';
    model3black.style.display = 'block';
    model3grey.style.display = 'none';
    model3red.style.display = 'none';
    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
});

colorblue.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = `Valor total = $ 48,990`;
    colorValue.innerHTML = `Cor selecionada = Stealth Grey + $${priceBlue}`;
    infoColor.innerHTML = 'Stealth Grey';
    model3white.style.display = 'none';
    model3black.style.display = 'none';
    model3grey.style.display = 'block';
    model3red.style.display = 'none';
    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
});

colorred.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = `Valor total = $ 49,490`;
    colorValue.innerHTML = `Cor selecionada = Ultra Red + $${priceRed}`;
    infoColor.innerHTML = 'Ultra Red';
    model3white.style.display = 'none';
    model3black.style.display = 'none';
    model3grey.style.display = 'none';
    model3red.style.display = 'block';
    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
});

colorsilver.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = `Valor total = $ 49,190`;
    colorValue.innerHTML = `Cor selecionada = Pearl White Multi-Coat + $${priceSilver}`;
    infoColor.innerHTML = 'Pearl White Multi-Coat';
    model3white.style.display = 'block';
    model3black.style.display = 'none';
    model3grey.style.display = 'none';
    model3red.style.display = 'none';
    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
});

// Funções para cores internas
colorinnerblack.addEventListener('click', function() {
    innerValue.innerHTML = `Cor interior = ${inBlack}`;
    innerblack.style.display = 'block';
    innerwhite.style.display = 'none';
    model3white.style.display = 'none';
    model3black.style.display = 'none';
    model3grey.style.display = 'none';
    model3red.style.display = 'none';
});

colorinnerwhite.addEventListener('click', function() {
    innerValue.innerHTML = `Cor interior = ${inWhite}`;
    innerblack.style.display = 'none';
    innerwhite.style.display = 'block';
    model3white.style.display = 'none';
    model3black.style.display = 'none';
    model3grey.style.display = 'none';
    model3red.style.display = 'none';
});

// Botão de pagamento
payment.addEventListener('click', function() {
    this.innerHTML = 'Pagamento finalizado';
    this.style.background = 'blue';
});
