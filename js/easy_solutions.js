"use strict";

function isEqual(num1, num2) {  // Also return false if either number is a "string"
    return Number.isInteger(num1, num2) && num1 === num2;
}

// Write a function that converts hours into seconds.
function howManySeconds(hours) {
    return hours * 3600;
}

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
    return str1.length === str2.length;
}

