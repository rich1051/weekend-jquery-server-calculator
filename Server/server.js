// importing Express to the server:
const express = require('express');

// importing body-parser to the server:
const bodyParser = require('body-parser');

// create an instance of express by calling function above
const app = express();

const PORT = 5000;

// serve static files that live in the public folder
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
// console logging to ensure server is running:
    console.log('listening on port', PORT)
});