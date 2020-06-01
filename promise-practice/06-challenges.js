
// simple code challenges

// average of 3
function averageOfThree(num1, num2, num3) {
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
