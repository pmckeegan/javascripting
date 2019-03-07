var words = ["ground", "control", "to", "major", "tom"];

var map = function(array, funct) {
 newArray = [];
 for (i in array) {
  newArray[i] = funct(array[i])
}
return (newArray);
};

var result1 = map(words, function(word) {
  return word.length;
});
console.log(result1);

var result2 = map(words, function(word) {
  return word.toUpperCase();
});
console.log(result2);

var result3 = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(result3);