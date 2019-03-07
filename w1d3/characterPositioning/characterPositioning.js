function countingLetters(sentence){
  var joinedSentence = sentence.split(" ").join("");
  //return (joinedSentence);


  var letterCounter = {};
  // var currentPosition = [];

  for (i = 0; i < joinedSentence.length; i++){

    var currentLetter = (joinedSentence[i]);
    if (!letterCounter[currentLetter]){
        letterCounter[currentLetter] = [i];

    } else {
     letterCounter[currentLetter].push(i);
 }

//console.log("count for ", currentLetter, "is ", letterCounter[currentLetter]);
}
return letterCounter;
}
console.log(countingLetters("lighthouse in the house"));
