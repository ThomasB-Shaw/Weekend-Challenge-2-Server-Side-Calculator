



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
    getHistory();
} // End of onReady function

// Runs the calculation, taking inputs and calculating out with the combinedDeal function
function submitCalculation(){
    let newCalculation = {
        input1: $('#inputOne').val(),
        input2: $('#inputTwo').val(),
        modifier: modifier,
        // answer: combinedDeal()
    }; // End of newCalculation object
    if (modifier === '' || $('#inputOne').val() === '' || $('#inputTwo').val() === '' ) {
        alert('Please ensure all fields are filled out!');
        return ;
    } // End of if check, returns alert if invalid
    else {
        $.ajax({
            method: 'POST',
            url: '/math',
            data: newCalculation
            
        }).then(function(response){
            console.log('response: ', response);
            let apAnswer = response.answer;
            $('#answerField').text(`${apAnswer}`);
            getHistory();
        }).catch(function(error){
            alert(error);
        }); // End of post to server
    modifier = '';
    return newCalculation;
    } // end of Else
}


// Cluster of button clicks that change the global modifier which will later be used to complete the calculation
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

// Two button click functions, one to run submitCalculation 
function equalsClick() {
    submitCalculation();
} // end of plusClick Function 
function clearClick() {
    $('#inputOne').val('');
    $('#inputTwo').val('');
    modifier = '' ;
} // end of plusClick Function 

// function appends info from a module to the DOM, must be used with a GET request
function appendHistoryDOM(dataToAppend){
    el = $('.historyList');
    el.empty();
    for (let i = 0; i < dataToAppend.length; i++) {
        el.append(`<li class="history">
        ${dataToAppend[i].inputA}
        ${dataToAppend[i].modifier}
        ${dataToAppend[i].inputB}
        =
        ${dataToAppend[i].answer}
        </li>`);
    } // End of for loop checking CalcHistory to append to DOM
} // end of appendHistoryDOM


//Get cache info from calcHistory, then appends it to the DOM
function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/math'
    }).then(function(response){
        console.log('response', response);
        appendHistoryDOM(response);
    });
} // End of getHistory