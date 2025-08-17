const modelblack = document.querySelector('#modelsgrey');
const modelblue = document.querySelector('#modelsblue');
const modelred = document.querySelector('#modelsred');
const modelsilver = document.querySelector('#modelswhite');

const innerblack = document.querySelector('#innerimg1');
const innercream = document.querySelector('#innerimg2');

const colorblack = document.querySelector('#colorblack');
const colorblue = document.querySelector('#colorblue');
const colorred = document.querySelector('#colorred');
const colorsilver = document.querySelector('#colorsilver');

const infoColor = document.querySelector('#info-color');

const colorinnerblack = document.querySelector('#color-inner1');
const colorinnercream = document.querySelector('#color-inner2');

const colorValue = document.querySelector('#color-selected');
const innerValue = document.querySelector('#inner-selected');

const value = document.querySelector('#value');

let colorb = 1000;
let colorbl = 1200;
let colorr = 1300;
let colors = 1500;

let inblack = 'Black';
let incream = 'Cream';

let payment = document.getElementById('payment');

// Seleção de cores externas
colorblack.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = 'Valor total = $ 37,490';
    colorValue.innerHTML = `Cor selecionada = Diamond Black - incluso`;
    infoColor.innerHTML = 'Diamond Black';
    modelblack.style.display = 'block';
    modelblue.style.display = 'none';
    modelred.style.display = 'none';
    modelsilver.style.display = 'none';

    innerblack.style.display = 'none';
    innercream.style.display = 'none';
})

colorblue.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = 'Valor total = $ 38,490';
    colorValue.innerHTML = `Cor selecionada = Frost Blue Metallic + $${colorb}`;
    infoColor.innerHTML = 'Frost Blue Metallic';
    modelblue.style.display = 'block';
    modelblack.style.display = 'none';
    modelred.style.display = 'none';
    modelsilver.style.display = 'none';

    innerblack.style.display = 'none';
    innercream.style.display = 'none';
})

colorred.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = 'Valor total = $ 38,790';
    colorValue.innerHTML = `Cor selecionada = Ultra Red + $${colorr}`;
    infoColor.innerHTML = 'Ultra Red';
    modelsilver.style.display = 'block';
    modelblack.style.display = 'none';
    modelblue.style.display = 'none';
    modelred.style.display = 'none';

    innerblack.style.display = 'none';
    innercream.style.display = 'none';
})

colorsilver.addEventListener('click', function() {
    value.style.display = 'inline-block';
    value.innerHTML = 'Valor total = $ 38,990';
    colorValue.innerHTML = `Cor selecionada = Lunar Silver + $${colors}`;
    infoColor.innerHTML = 'Lunar Silver';
    modelred.style.display = 'block';
    modelblack.style.display = 'none';
    modelblue.style.display = 'none';
    modelsilver.style.display = 'none';

    innerblack.style.display = 'none';
    innercream.style.display = 'none';
})

// Seleção de cores internas
colorinnerblack.addEventListener('click', function() {
    innerValue.innerHTML = `Cor interior = ${inblack}`;
    innerblack.style.display = 'block';
    innercream.style.display = 'none';

    modelblack.style.display = 'none';
    modelblue.style.display = 'none';
    modelred.style.display = 'none';
    modelsilver.style.display = 'none';
})

colorinnercream.addEventListener('click', function() {
    innerValue.innerHTML = `Cor interior = ${incream}`;
    innerblack.style.display = 'none';
    innercream.style.display = 'block';

    modelblack.style.display = 'none';
    modelblue.style.display = 'none';
    modelred.style.display = 'none';
    modelsilver.style.display = 'none';
})

// Finalizar pagamento
payment.addEventListener('click', function() {
    this.innerHTML = 'Pagamento finalizado';
    this.style.background = 'blue';
})
