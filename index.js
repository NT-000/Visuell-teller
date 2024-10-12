/*
var number = 5; //int
var floatnumber = 5.5; //kommaseparert tall
var text = "en liten tekstbit"; // string
var enkeltTegn = 'a' // char
var booleans = true; // booleans
*/
let counter = document.getElementById('counter');
let countIncrease = document.getElementById("countPlus");
let countDecrease = document.getElementById("countMinus");
let count = 0;


function fIncrease() {
    count ++;
    counter.innerHTML = count;
}

function fDecrease() {
    count --;
    counter.innerHTML = count;
}
