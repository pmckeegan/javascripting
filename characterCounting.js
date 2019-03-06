
function countingLetters(sentence){
  var joinedSentence = sentence.split(" ").join("");
  //return (joinedSentence);

  var letterCounter = {};

  for (i = 0; i < joinedSentence.length; i++){

    var currentLetter = (joinedSentence[i]);
    if (!letterCounter[currentLetter]){
      letterCounter[currentLetter] = 1
    } else {
      letterCounter[currentLetter]++
    }
//console.log("count for ", currentLetter, "is ", letterCounter[currentLetter]);
}
return letterCounter;
}
console.log(countingLetters("lighthouse in the house"));