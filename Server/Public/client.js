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
 
    getMath();
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

// initiated function to get mathList array from server:
function getMath() {
    $.ajax({
        type: 'GET',
        url: '/list'

// this allows it to appear on the DOM using renderToDom function
    }).then(function (response) {
        console.log('Success!', response);
        renderToDom(response);

// if it doesn't work, gives an alert:
    }).catch(function(error) {
        alert('Request failed! :(');
        console.log('Request failed: ', error);
    });
};

// initiated function to get answer from server:
// this allows it to appear on the DOM using renderToDom function
function getAnswer(){
    $.ajax({
        method: 'GET',
        url: '/answer'

// this allows it to appear on the DOM using renderToDom function
    }).then(function(response){
        result = response.answer;
        renderToDom(answer);

// if it doesn't work, gives an alert:
    }).catch(function(error){
        // alert('error in getAnswer!');
    });
}; 

function handleClickEqualsButton(event) {
    event.preventDefault();
    console.log('submit called')
// creating variables to hold first and second number input fields:
    const firstNumber = $('#first-number-text').val();
    const secondNumber = $('#second-number-text').val();
    
// clear input fields on submit:
    $('#first-number-text').val('');
    $('#second-number-text').val('');

// using AJAX to post user inputs to server:
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: {
            firstNumber,
            secondNumber,
            operator
        }
    }).then(function(response) {
        console.log('Success!');
// call getMath function:
        getMath();
// call getAnswer function:
        getAnswer();
// if it doesn't work, gives an alert:
    }).catch(function(error) {
        alert('Error with math post!');
        console.log('Error with post: ', error);
    });
};

// initiated function to get user data to show up on DOM:
function renderToDom(calculations) {
// getting rid of any "old" data
        $('#math-history').empty();
// .text only the most recent generated answer to DOM using for-of loop:
        for (let calculation of calculations) {
            $('#answer-text').text(`
                ${calculation.answer}
        `);
// .append the firstNumber, secondNumber, operator, and answer
// to DOM to generate list of past calculations using for-of loop:
            $('#math-history').append(`
                <li>${calculation.firstNumber} ${calculation.operator} ${calculation.secondNumber} = ${calculation.answer}</li>
            `);
        };
    };