var sentencePrompt = prompt("Enter a sentence.");
// console.log(sentencePrompt);
var reversedString;
console.log("Pre function: " + reversedString)
var reversedCapitals = function(){
  var newString = sentencePrompt[0] + sentencePrompt.slice(-1);
  // console.log("First Letter " + sentencePrompt[0]);
  // console.log("Last Letter: " + sentencePrompt.slice(-1));
  console.log("Before : " + newString);
  var upperCaseString = newString.toUpperCase()
  console.log("After : " + upperCaseString);
  reversedString = upperCaseString.split("").reverse().join("");
  console.log("Reversed: " + reversedString)
  // var typeOf = typeof(reversedString);
  // console.log(typeOf);
}
reversedCapitals();
