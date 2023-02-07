// https://www.algoexpert.io/questions/two-number-sum


function twoNumberSum(array, targetSum) {
    // Write your code here.
  
    // sum = num1 + num2 10 = 3 + 7
    // num2 = sum - num1 7 = 10 - 3 
    // num1 = array[i]
  
    for (let i = 0; i < array.length; i++) {
      let potentialNum = targetSum - array[i] // 7 = 10 - 3 
  
      if (array.includes(potentialNum) && potentialNum != array[i]){
        return [potentialNum , array[i]]
      }
    }
  
    return []
  }
  
// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
  