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