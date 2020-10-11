console.log('Hello from JS');


$(document).ready(onReady);

let modifier = "";
currentAnswer = 0 ;

function onReady() {
    $('#plusBtn').on('click', plusClick);
    $('#minusBtn').on('click', minusClick);
    $('#multiBtn').on('click', multiClick);
    $('#divideBtn').on('click', divideClick);
    $('#equalBtn').on('click', submitCalculation);
    $('#clearBtn').on('click', clearClick);
} // End of onReady function


// you left off on the below function

function combinedDeal() {
    let answer = 0;
    if(modifier === "+"){
        // answer = input1 + input2
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
    }
} // End of combinedDeal

function submitCalculation(){
    let newCalculation = {
        input1: $('#inputOne').val(),
        input2: $('#inputTwo').val(),
        answer: combinedDeal()
    }; // End of newCalculation object
    if (modifier === '' || newCalculation.input1 === '' || newCalculation.input2 === '' || newClaculation.answer === '' ) {
        alert('Please ensure all fields are filled out!');
        return ;
    } // End of if check, returns alert if invalid
    else {

    console.log(newCalculation);
    $('#answerField').text(`${newCalculation.answer}`);
    modifier = '';
    return newCalculation;
    } // end of Else
}

function plusClick() {
    modifier = '+' ;
    console.log(modifier);
} // end of plusClick Function 
function minusClick() {
    modifier = '-' ;
    console.log(modifier);
} // end of plusClick Function 
function multiClick() {
    modifier = '*' ;
    console.log(modifier);
} // end of plusClick Function 
function divideClick() {
    modifier = '/' ;
    console.log(modifier);
} // end of plusClick Function 


function equalsClick() {
    submitCalculation();
} // end of plusClick Function 
function clearClick() {
    console.log('click');
    $('#inputOne').val('');
    $('#inputTwo').val('');
    modifier = '' ;
} // end of plusClick Function 