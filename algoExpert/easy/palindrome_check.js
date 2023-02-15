//https://www.algoexpert.io/questions/palindrome-check

function isPalindrome(string) {
  // Write your code here.
  // r,a,c,e,c,a,r
  // meow
  console.log(string)
  const stringArray = string.split("")
  console.log(Math.ceil(7 / 2))

  for (let i = 0; i < (stringArray.length / 2); i++) {
    if (stringArray[i] !== stringArray[stringArray.length-1-i]){
      return false
    }
  }

  return true
  
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
