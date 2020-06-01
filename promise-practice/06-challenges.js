
// simple code challenges

// average of 3
function averageOfThree(num1, num2, num3) {
    if (typeof(arguments) !== 'number') return 'Input must be an integer';
    return (num1 + num2 + num3) / 2;
  }



  console.log(averageOfThree(12, 18, -45));

//   either string included returns boolean indicating if either string is in sentence
function eitherStringIncluded(sentence, str1, str2) {
    if (sentence.includes(str1) || sentence.includes(str2)) {
      return true;
    }
    return false;
}


console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); // true
console.log(eitherStringIncluded("Question?", "Answer", "?")); // true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); // false
console.log(eitherStringIncluded("Dance party!", "?", "dance")); // true


// returns true if that string is located inside of the array, if the string is not inside of the array, the function should return false
function wordWithinArray(array, word) {
  if (array.indexOf(word) === -1) {
    return false;
      }
  return true;
}

console.log(wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")); // true
console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "camel")); // true
console.log(wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")); // false
console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "panther")); // false
