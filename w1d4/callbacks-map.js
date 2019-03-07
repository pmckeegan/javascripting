var words = ["ground", "control", "to", "major", "tom"];

var map = function(array, funct) {
 newArray = [];
 for (i in array) {
  newArray[i] = funct(array[i])
}
return (newArray);
};

map(words, function(word) {
  return word.length;
});
//console.log(newArray);

map(words, function(word) {
  return word.toUpperCase();
});
console.log(newArray);

map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(newArray);