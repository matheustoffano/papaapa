const modelgrey = document.querySelector('#modelygrey');
const modelblue = document.querySelector('#modelyblue');
const modelwhite = document.querySelector('#modelywhite');
const modelred = document.querySelector('#modelyred');

const innerblack = document.querySelector('#innerimg1');
const innerwhite = document.querySelector('#innerimg2');

const colorgrey = document.querySelector('#colorgrey');
const colorblue = document.querySelector('#colorblue');
const colorwhite = document.querySelector('#colorwhite');
const colorred = document.querySelector('#colorred');

const infoColor = document.querySelector('#info-color');

const colorinnerblack = document.querySelector('#color-inner1');
const colorinnerwhite = document.querySelector('#color-inner2');

const colorValue = document.querySelector('#color-selected');
const innerValue = document.querySelector('#inner-selected');

const value = document.querySelector('#value');

let colorg = 'Incluso';
let colorb = 1000;
let colorw = 1300;
let colorr = 1500;

let inblack = 'Black';
let inwhite = 'White';

let payment = document.getElementById('payment');

colorgrey.addEventListener('click', function() {
    value.style.display = 'inline-block'
    value.innerHTML = 'Valor total = $ 37,490'
    colorValue.innerHTML = `Cor selecionada =  Stealth Grey - ${colorg}`;
    infoColor.innerHTML = 'Stealth Grey'
    modelgrey.style.display = 'block';
    modelblue.style.display = 'none';
    modelwhite.style.display = 'none';
    modelred.style.display = 'none';

    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
})

colorblue.addEventListener('click', function() {
    value.style.display = 'inline-block'
    value.innerHTML = 'Valor total = $ 38,490'
    colorValue.innerHTML = `Cor selecionada =  Deep Blue Metallicy + $${colorb}`;
    infoColor.innerHTML = 'Deep Blue Metallicy'
    modelblue.style.display = 'block';
    modelgrey.style.display = 'none';
    modelwhite.style.display = 'none';
    modelred.style.display = 'none';

    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
})

colorwhite.addEventListener('click', function() {
    value.style.display = 'inline-block'
    value.innerHTML = 'Valor total = $ 38,790'
    colorValue.innerHTML = `Cor selecionada =  Pearl White Multi-Coat + $${colorw}`;
    infoColor.innerHTML = 'Pearl White Multi-Coat'
    modelwhite.style.display = 'block';
    modelgrey.style.display = 'none';
    modelblue.style.display = 'none';
    modelred.style.display = 'none';

    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
})

colorred.addEventListener('click', function() {
    value.style.display = 'inline-block'
    value.innerHTML = 'Valor total = $ 38,990'
    colorValue.innerHTML = `Cor selecionada =  Ultra Red + $${colorr}`;
    infoColor.innerHTML = 'Ultra Red'
    modelred.style.display = 'block';
    modelgrey.style.display = 'none';
    modelblue.style.display = 'none';
    modelwhite.style.display = 'none';

    innerblack.style.display = 'none';
    innerwhite.style.display = 'none';
})

colorinnerblack.addEventListener('click', function() {
    innerValue.innerHTML = `Cor interior = ${inblack}`
    innerblack.style.display = 'block';
    innerwhite.style.display = 'none';

    modelred.style.display = 'none';
    modelgrey.style.display = 'none';
    modelblue.style.display = 'none';
    modelwhite.style.display = 'none';

    
})

colorinnerwhite.addEventListener('click', function() {
    innerValue.innerHTML = `Cor interior = ${inwhite}`
    innerblack.style.display = 'none';
    innerwhite.style.display = 'block';

    modelred.style.display = 'none';
    modelgrey.style.display = 'none';
    modelblue.style.display = 'none';
    modelwhite.style.display = 'none'; 
    
})

payment.addEventListener('click', function() {
    this.innerHTML = 'Pagamento finalizado';
    this.style.background = 'blue';
})

