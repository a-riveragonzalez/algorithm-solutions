// https://www.algoexpert.io/questions/validate-subsequence

function isValidSubsequence(array, sequence) {
    // Write your code here.
  
    // keep track of what index we are in sequence
    let seqLocation = 0; 
  
   // loop through array and check if element = sequence element in order
    for (let i = 0; i < array.length; i++) {
      if (array[i] === sequence[seqLocation]) {
         seqLocation++; 
      }
    }
  
    if (seqLocation === sequence.length) {
      return true 
    } else {
      return false 
    }
  
    // time = O(N) where N is the length of array
    // space = O(1) constant time because we are not storing anything extra 
    
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;