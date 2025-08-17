const cybertruck = document.querySelector('#cybertruck');

const cybertruckWheel1 = document.querySelector('#cybertruck-wheel-img1');
const cybertruckWheel2 = document.querySelector('#cybertruck-wheel-img2');

const cybertruckInner1 = document.querySelector('#innerimg-cy1');
const cybertruckInner2 = document.querySelector('#innerimg-cy2');

const wheel1 = document.querySelector('#wheel1');
const wheel2 = document.querySelector('#wheel2');

const cybertruckColor1 = document.querySelector('#color-inner1');
const cybertruckColor2 = document.querySelector('#color-inner2');

const wheelInfo = document.querySelector('#info-wheels');
const wheelsValue = document.querySelector('#wheels-selected');
const innerValue = document.querySelector('#inner-selected');

// Valores
let wheelFirst = 320;
let wheelSecond = 450;

let innerFirst = 'Black'
let innerSecond = 'White'

let totalValue = document.getElementById('value');

let payment = document.getElementById('payment');

// ======================
// Seleção de Rodas
// ======================
wheel1.addEventListener('click', function () {
    totalValue.innerHTML = 'Valor total = $ 80,200'
    totalValue.style.display = 'block'
    wheelsValue.textContent = `Selecionado [ Core Wheel + $ ${wheelFirst} ]`;
    wheelInfo.textContent = 'Core Wheels';

    cybertruck.style.display = 'none';
    cybertruckInner1.style.display = 'none';
    cybertruckInner2.style.display = 'none';

    cybertruckWheel1.style.display = 'block';
    cybertruckWheel2.style.display = 'none';
});

wheel2.addEventListener('click', function () {
    totalValue.innerHTML = 'Valor total = $ 80,330' 
    wheelsValue.textContent = `Selecionado [ Cyber Wheel + $ ${wheelSecond} ]`;
    wheelInfo.textContent = 'Cyber Wheels';

    cybertruck.style.display = 'none';
    cybertruckInner1.style.display = 'none';
    cybertruckInner2.style.display = 'none';

    cybertruckWheel1.style.display = 'none';
    cybertruckWheel2.style.display = 'block';
});

// ======================
// Seleção de Interiores
// ======================
cybertruckColor1.addEventListener('click', function () {
    innerValue.textContent = `Selecionado [ Cor = ${innerFirst} ]`

    cybertruck.style.display = 'none';
    cybertruckWheel1.style.display = 'none';
    cybertruckWheel2.style.display = 'none';

    cybertruckInner1.style.display = 'block';
    cybertruckInner2.style.display = 'none';
});

cybertruckColor2.addEventListener('click', function () {
    innerValue.textContent = `Selecionado [ Cor = ${innerSecond} ]`

    cybertruck.style.display = 'none';
    cybertruckWheel1.style.display = 'none';
    cybertruckWheel2.style.display = 'none';

    cybertruckInner1.style.display = 'none';
    cybertruckInner2.style.display = 'block';
});


payment.addEventListener('click', function() {
    this.innerHTML = 'Pagamento finalizado';
    this.style.background = 'blue';
})