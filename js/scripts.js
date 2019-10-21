var sentencePrompt = prompt("Enter a sentence.");
console.log(sentencePrompt);
var reversedCapitals = function(){
  console.log("First Letter " + sentencePrompt[0]);
  console.log("Last Letter: " + sentencePrompt.slice(-1));
}
reversedCapitals();
