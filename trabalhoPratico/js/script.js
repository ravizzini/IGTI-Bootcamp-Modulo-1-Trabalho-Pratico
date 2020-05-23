window.addEventListener('load', start);

let displayVermelho = null;
let displayVerde = null;
let displayAzul = null;
let redRange = null;
let greenRange = null;
let blueRange = null;
let boxColor = null;

function start() {
  boxColor = document.querySelector('#box');

  displayVermelho = document.querySelector('#displayVermelhoValue');
  displayVerde = document.querySelector('#displayVerdeValue');
  displayAzul = document.querySelector('#displayAzulValue');

  redRange = document.querySelector('#redRange');
  greenRange = document.querySelector('#greenRange');
  blueRange = document.querySelector('#blueRange');

  redRange.addEventListener('change', changeColor);
  greenRange.addEventListener('change', changeColor);
  blueRange.addEventListener('change', changeColor);

  changeColor();
}

function changeColor() {
  const red = +redRange.value;
  const green = +greenRange.value;
  const blue = +blueRange.value;

  displayVermelho.value = red;
  displayVerde.value = green;
  displayAzul.value = blue;

  boxColor.style.backgroundColor =
    'rgb(' + red + ',' + green + ',' + blue + ')';
}

/*

document.querySelector('#redRange').addEventListener('change', changeColor);
document.querySelector('#greenRange').addEventListener('change', changeColor);
document.querySelector('#blueRange').addEventListener('change', changeColor);
document.getElementById('redRange').addEventListener('change', changeColor);
document.getElementById('greenRange').addEventListener('change', changeColor);
document.getElementById('blueRange').addEventListener('change', changeColor);*/
