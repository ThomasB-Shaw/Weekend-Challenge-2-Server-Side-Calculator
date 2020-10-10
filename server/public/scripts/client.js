console.log('Hello from JS');


$(document).ready(onReady);

let modifier = "";
currentAnswer = 0 ;

function onReady() {
    $('#plusBtn').on('click', plusClick);
    // $('#minusBtn').on('click', minusClick);
    // $('#multiBtn').on('click', multiClick);
    // $('#divideBtn').on('click', divideClick);
    $('#equalBtn').on('click', submitCalculation);
    // $('#clearBtn').on('click', clearClick);
}


// you left off on the below function

function combinedDeal() {
    let answer = 0;
    if(modifier === "+"){
        // answer = input1 + input2
        answer = Number($('#inputOne').val()) + Number($('#inputOne').val())
        return answer ;
    } // adds input fields
    else if (modifier === "-") {
        answer = input1 - input2
    } // subtracts input fields
    else if (modifier === "*") {
        answer = input1 * input2
    } // multiplies the fields
    else if (modifier === "/") {
        answer = input1 / input2
    }
} // End of combinedDeal

function submitCalculation(){
    let newCalculation = {
        input1: $('#inputOne').val(),
        input2: $('#inputOne').val(),
        answer: combinedDeal()
    }
    console.log(newCalculation);
    $('#answerField').append(`<h1> ${newCalculation.answer} </h1>`);
    return newCalculation;
}

function plusClick() {
    modifier = '+'
} // end of plusClick Function 