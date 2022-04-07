const reverseString = function(str) {
let splitString = str.split("");
let reversedArray = splitString.reverse();
let reversedString = reversedArray.join("");

return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
