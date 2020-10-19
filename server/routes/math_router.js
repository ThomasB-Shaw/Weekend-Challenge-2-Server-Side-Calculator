const express = require('express');
const router = express.Router();
const calcHistory = require('../modules/history.js');




// Get Route
router.get('/', (req, res) => {
    res.send(calcHistory);
    console.log(calcHistory);
});

//Post Route
router.post('/', (req, res) => {
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
    res.send(answerObject);
    return answerObject;
});


module.exports = router;