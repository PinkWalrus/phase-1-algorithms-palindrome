function isPalindrome(word) {
  // find the length of the string
  const length = word.length;

  // loop through half of the string
  for (let i = 0; i < length / 2; i++) {
    // check if first and last string are the same
    if (word[i] !== word[length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}

/* 
  Add your pseudocode here
*/

/*

function receives one argument (string)

find length of string

check if first half === last half

return false if string !== palindrome
return true if string === palindrome

*/

/*
  Add written explanation of your solution here

  A palindrome reads the same when forward and backward. When you divide a word/sequence in half, you can compare the two like a mirror image.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
