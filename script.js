"use strict";

document.addEventListener("DOMContentLoaded", init);

let array;
let i;

function init() {
    console.log("init");

    array = [];
    i = 0;

    counter();
}

function counter() {

    //next number
    i++;

    //add to array
    array.unshift(i);
    console.log(array);

    //max items: 9
    if (array.length >= 9) {
        array.pop()
    }

    setTimeout(counter, 900)
}