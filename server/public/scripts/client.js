console.log('Hello from JS');


$(document).ready(onReady);

function onReady() {
    $('#plusBtn').on('click', plusClick);
    // $('#minusBtn').on('click', minusClick);
    // $('#multiBtn').on('click', multiClick);
    // $('#divideBtn').on('click', divideClick);
    // $('#equalsBtn').on('click', equalsClick);
    // $('#clearBtn').on('click', clearClick);
}


function plusClick() {
    console.log('click')
}