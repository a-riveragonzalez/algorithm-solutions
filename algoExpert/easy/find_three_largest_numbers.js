// https://www.algoexpert.io/questions/find-three-largest-numbers

function findThreeLargestNumbers(array) {
    // Write your code here.
    let largestArray = new Array(3) // [ _ , _ , _ ]
  
    for (let i = 0; i < array.length; i++) {
      if (!largestArray[2] || array[i] >= largestArray[2]) {
        largestArray.shift() // removes first element
        largestArray.push(array[i]) // adds to end of array
      } else if (!largestArray[1] || array[i] >= largestArray[1]) {
        largestArray.shift()
        largestArray.splice(1, 0, array[i]) // adds to index 1 of array, deletes 0 elements
      } else if (!largestArray[0] || array[i] >= largestArray[0]) {
        largestArray.shift()
        largestArray.unshift(array[i]) // adds to beginning of array
      }
    }
  
    return largestArray
  }
  
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;