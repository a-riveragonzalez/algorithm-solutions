// https://www.algoexpert.io/questions/caesar-cipher-encryptor

function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("") // 26, 0 - 25
    let newKey = key % 26 // remainder of 26 
    let cipher = [];
  
    for (let i = 0; i < string.length; i++) {
      let currentIndex = alpha.indexOf(string[i])
      let newIndex = currentIndex + newKey 
  
      if (newIndex > 25) {
        let wrappedIndex = newIndex - 26
        cipher.push(alpha[wrappedIndex])
      } else {
        cipher.push(alpha[newIndex])
      }
    }
  
    return cipher.join("")
    // Time = O(n)
    // Space = O(n)
  }
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;