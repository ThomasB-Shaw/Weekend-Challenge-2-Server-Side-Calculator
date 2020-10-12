const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;


app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

const calcHistory = require('./modules/history.js');
let serverCalc = require('./modules/serverCalc.js')

app.get('/calcHistory', (req, res) => {
    res.send(calcHistory);
    console.log(calcHistory);
});

app.post('/calcHistory', (req, res) => {
    console.log(req.body);
    calcHistory.push(req.body);
    res.sendStatus(200);
});

app.get('/serverCalc', (req, res) => {
    res.send(serverCalc);
    console.log(serverCalc);
});

app.listen(port, () => {
    console.log('Up and running on port: ', port);
});

function combinedDeal() {
    let answer = 0;
    if(modifier === "+"){
        answer = Number($('#inputOne').val()) + Number($('#inputTwo').val());
        return answer ;
    } // adds input fields
    else if (modifier === "-") {
        answer = Number($('#inputOne').val()) - Number($('#inputTwo').val());
        return answer ;
    } // subtracts input fields
    else if (modifier === "*") {
        answer = Number($('#inputOne').val()) * Number($('#inputTwo').val());
        return answer ;
    } // multiplies the fields
    else if (modifier === "/") {
        answer = Number($('#inputOne').val()) / Number($('#inputTwo').val());
        return answer ;
    } else {
        alert("Please select a modifier!!!");
    } // End of If chain, returns alert if modifier is not selected
} // End of combinedDeal

function thirdEye(calcHistory) {
    let serverCalc = {
        input1: calcHistory.input1,
        input2: calcHistory.input2,
        modifier: calcHistory.modifier,
        answer: combinedDeal()
    }
    if (modifier === '' || $('#inputOne').val() === '' || $('#inputTwo').val() === '' ) {
        alert('Please ensure all fields are filled out!');
        return ;
    } else {

    }
}