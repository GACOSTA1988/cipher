var sentencePrompt = prompt("Enter a sentence.");
// console.log(sentencePrompt);
var reversedString;
var upperCaseString;
console.log("Pre function: " + reversedString)
var capitalizedFirstAndLast = function(){
  var newString = sentencePrompt[0] + sentencePrompt.slice(-1);
  // console.log("First Letter " + sentencePrompt[0]);
  // console.log("Last Letter: " + sentencePrompt.slice(-1));
  console.log("Before Capilization: " + newString);
  upperCaseString = newString.toUpperCase();
  console.log("After Capilization: " + upperCaseString);
}

var  reversedFirstAndLast = function(){
  reversedString = upperCaseString.split("").reverse().join("");
  console.log("Reversed: " + reversedString);
}

var fullString = function(){
  capitalizedFirstAndLast();
  reversedFirstAndLast();
  console.log(sentencePrompt + reversedString);
};
fullString();
