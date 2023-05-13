// getting jQuery up and running:
$(document).ready(onReady);

function onReady() {
    console.log('DOM successfully loaded!');

// creating each button click functionality for user on DOM using jQuery:
    $('#equal-button').on('click', handleClickEqualsButton);
    $('#add-button').on('click', addFunction);
    $('#subtract-button').on('click', subtractFunction);
    $('#multiply-button').on('click', multiplyFunction);
    $('#divide-button').on('click', divideFunction);
    $('#clear-button').on('click', clearFunction);
 
    getMath()
};

// initiated operator variable:
let operator;

// initiated click functions for each button
// determines operator variable 
function addFunction(firstNumber, secondNumber) {
    operator = '+';
};
function subtractFunction(firstNumber, secondNumber) {
    operator = '-';
};
function multiplyFunction(firstNumber, secondNumber) {
    operator = 'x';
};
function divideFunction(firstNumber, secondNumber) {
    operator = '÷';
};
function clearFunction(firstNumber, secondNumber) {
    $('#first-number-text').val('');
    $('#second-number-text').val('');
};

