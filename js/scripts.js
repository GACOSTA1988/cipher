var sentencePrompt = prompt("Enter a sentence.");
// console.log(sentencePrompt);
var reversedString;
var upperCaseString;
var fullCipher;
console.log("Pre function: " + reversedString)
var capitalizedFirstAndLast = function(){
  var newString = sentencePrompt[0] + sentencePrompt.slice(-1);
  // console.log("First Letter " + sentencePrompt[0]);
  // console.log("Last Letter: " + sentencePrompt.slice(-1));
  console.log("Before Capilization: " + newString);
  upperCaseString = newString.toUpperCase();
  console.log("After Capilization: " + upperCaseString);
}

var reversedFirstAndLast = function(){
  reversedString = upperCaseString.split("").reverse().join("");
  console.log("Reversed: " + reversedString);
}

var fullString = function(){
  capitalizedFirstAndLast();
  reversedFirstAndLast();
  fullCipher = (sentencePrompt + reversedString);
  console.log(fullCipher);
};
fullString();


var fourthFunction = function(){
//Count the number of letters in sentencePrompt
  var sentenceLength = sentencePrompt.length;
  console.log("Sentence Length: " + sentencePrompt.length);
//Divide by two (may need to round down)
  var sentenceHalfNumber = Math.round(sentenceLength / 2);
  console.log("Sentence half: " + sentenceHalfNumber);
//Output the letter at this index
  splitPrompt = sentencePrompt.split("");
//Concatenate this letter at the beginning of the original sentencePrompt
  console.log((splitPrompt[sentenceHalfNumber]) + fullCipher);
}
fourthFunction();
