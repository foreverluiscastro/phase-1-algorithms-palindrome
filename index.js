function isPalindrome(word) {
  // Write your algorithm here
  const splitString = word.split("")
  const reverseArray = splitString.reverse()
  const reverseString = reverseArray.join("")
  console.log(reverseString)
  if (reverseString === word) return true
  return false
}

console.log(isPalindrome("word"))

/* 
  Add your pseudocode here
  
  reverse the string
  check if the original string matches the reversed string
  if so, return true otherwise return false
*/

/*
  Add written explanation of your solution here
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
