function isPalindrome(word) {
  // Write your algorithm here
  let n = word.length
  for(let i = 0; i < n / 2; i++){
    if(word[n - 1] != word[i]) return false
    n--
  }

  return true
}

/* 
  Add your pseudocode here
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
