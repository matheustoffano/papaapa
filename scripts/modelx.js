// Seleção das cores externas do Model X
const modelred = document.querySelector('#modelxred');
const modelblack = document.querySelector('#modelxblack');
const modelblue = document.querySelector('#modelxblue');
const modelsilver = document.querySelector('#modelxsilver');

// Seleção das cores internas
const innerblack = document.querySelector('#innerimg1');
const innerwhite = document.querySelector('#innerimg2');

// Seleção dos botões de cor externa
const colorblack = document.querySelector('#colorblack');
const colorblue = document.querySelector('#colorblue');
const colorred = document.querySelector('#colorred');
const colorsilver = document.querySelector('#colorsilver');

// Texto da cor selecionada
const infoColor = document.querySelector('#info-color');

// Botões de cor interna
const colorinnerblack = document.querySelector('#color-inner1');
const colorinnerwhite = document.querySelector('#color-inner2');

// Valores selecionados
const colorValue = document.querySelector('#color-selected');
const innerValue = document.querySelector('#inner-selected');
const value = document.querySelector('#value');

// Valores extras para cores externas
let colorb = 1000;
let colorbl = 1200;
let colorr = 1300;
let colors = 1500;

let inblack = 'Black';
let inwhite = 'White';

let payment = document.getElementById('payment');

// Seleção de cores externas
colorblack.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = 'Valor total = $ 89,990';
    colorValue.innerHTML = `Cor selecionada = Diamond Black - incluso`;
    infoColor.innerHTML = 'Diamond Black';
    modelblack.style.display = 'block';
    modelblue.style.display = 'none';
    modelred.style.display = 'none';
    modelsilver.style.display = 'none';

    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
});

colorblue.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = 'Valor total = $ 90,990';
    colorValue.innerHTML = `Cor selecionada = Frost Blue Metallic + $${colorb}`;
    infoColor.innerHTML = 'Frost Blue Metallic';
    modelblue.style.display = 'block';
    modelblack.style.display = 'none';
    modelred.style.display = 'none';
    modelsilver.style.display = 'none';

    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
});

colorred.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = 'Valor total = $ 91,290';
    colorValue.innerHTML = `Cor selecionada = Ultra Red + $${colorr}`;
    infoColor.innerHTML = 'Ultra Red';
    modelred.style.display = 'block';
    modelblack.style.display = 'none';
    modelblue.style.display = 'none';
    modelsilver.style.display = 'none';

    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
});

colorsilver.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = 'Valor total = $ 91,490';
    colorValue.innerHTML = `Cor selecionada = Lunar Silver + $${colors}`;
    infoColor.innerHTML = 'Lunar Silver';
    modelsilver.style.display = 'block';
    modelblack.style.display = 'none';
    modelblue.style.display = 'none';
    modelred.style.display = 'none';

    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
});

// Seleção de cores internas
colorinnerblack.addEventListener('click', function() {
    innerValue.innerHTML = `Cor interior = ${inblack}`;
    innerblack.style.display = 'block';
    innerwhite.style.display = 'none';

    modelblack.style.display = 'none';
    modelblue.style.display = 'none';
    modelred.style.display = 'none';
    modelsilver.style.display = 'none';
});

colorinnerwhite.addEventListener('click', function() {
    innerValue.innerHTML = `Cor interior = ${inwhite}`;
    innerblack.style.display = 'none';
    innerwhite.style.display = 'block';

    modelblack.style.display = 'none';
    modelblue.style.display = 'none';
    modelred.style.display = 'none';
    modelsilver.style.display = 'none';
});

// Finalizar pagamento
payment.addEventListener('click', function() {
    this.innerHTML = 'Pagamento finalizado';
    this.style.background = 'blue';
});
