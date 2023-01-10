'use strict'

let today = new Date();
let yearCurrent = today.getFullYear();
let yearPrev = (yearCurrent - 1);
document.getElementById("previous-year").innerHTML = yearPrev;
document.getElementById("current-year").innerHTML = yearCurrent;