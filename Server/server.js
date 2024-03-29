// importing Express to the server:
const express = require('express');

// importing body-parser to the server:
const bodyParser = require('body-parser');

// create an instance of express by calling function above
const app = express();

const PORT = process.env.PORT || 5000;
// comment
// serve static files that live in the public folder
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

//importing mathList variable from module:
let mathList = require('./modules/math');

let answer;

// getting getMath function from client.js:
// responds with the mathList array:
app.get('/list', function(req, res) {

// console.logging to ensure request is working:
    console.log('Request for /math was made');
    console.log(mathList)

// responds with the mathList array:
    res.send(mathList);
});

// getting getAnswer function from client.js:
app.get('/answer', function(req, res) {

// console.logging to ensure request is working:
    console.log('Request for /answer was made');
    console.log(answer)

// responds with the answer array:
    res.send({answer: answer});
});

app.post('/calculate', function(req, res) {
    let firstNumber = Number(req.body.firstNumber);
    let secondNumber = Number(req.body.secondNumber);
    let operator = req.body.operator

    if (req.body.operator === '+') {
    answer = firstNumber + secondNumber;
    console.log(answer);
    }
    else if (req.body.operator === '-') {
    answer = firstNumber - secondNumber;
    console.log(answer);
    }
    else if (req.body.operator === 'x') {
    answer = firstNumber * secondNumber;
    console.log(answer);
    }
    else if (req.body.operator === '÷') {
    answer = firstNumber / secondNumber;
    console.log(answer);
    };
    
    mathArray = {
        firstNumber,
        secondNumber,
        operator,
        answer
    };
    mathList.push(mathArray);
    res.sendStatus(201);
});

app.listen(PORT, () => {
// console logging to ensure server is running:
    console.log('listening on port', PORT)
});

