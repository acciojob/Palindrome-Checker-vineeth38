// complete the given function

function palindrome(str){
// Convert the input string to lowercase
  str = str.toLowerCase();

  // Remove all non-alphanumeric characters from the string
  str = str.replace(/[^a-z0-9]/g, '');

  // Compare the original string with its reverse
  return str === str.split('').reverse().join('');
}
console.log(palindrome("racecar")); // Output: true
console.log(palindrome("RaceCar")); // Output: true
console.log(palindrome("raceCAR")); // Output: true
module.exports = palindrome
