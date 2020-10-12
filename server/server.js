const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;


app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

const calcHistory = require('./modules/history.js');

app.get('/calcHistory', (req, res) => {
    res.send(calcHistory);
    console.log(calcHistory);
});

app.post('/calcHistory', (req, res) => {
    console.log(req.body);
    let inputA = req.body.input1;
    let inputB = req.body.input2;
    let modifier = req.body.modifier;
    let answer = 0;

    if(modifier === "+"){
        answer = Number(inputA) + Number(inputB);
        
    } // adds input fields
    else if (modifier === "-") {
        answer = Number(inputA) - Number(inputB);

    } // subtracts input fields
    else if (modifier === "*") {
        answer = Number(inputA) * Number(inputB);

    } // multiplies the fields
    else if (modifier === "/") {
        answer = Number(inputA) / Number(inputB);
 
    } else {
        alert("Please select a modifier!!!");
    } // End of If chain, returns alert if modifier is not selected

    let answerObject = {
        inputA: inputA,
        inputB: inputB,
        modifier: modifier,
        answer: answer

    }
    calcHistory.push(answerObject);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log('Up and running on port: ', port);
});

