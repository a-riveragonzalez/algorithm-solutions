// https://www.algoexpert.io/questions/binary-search

function binarySearch(array, target) {
    // Write your code here.
    let left = 0;
    let right = array.length - 1; 
    
  
    while (left <= right) {
      let middle = Math.floor((right + left) / 2) 
      let potentialMatch = array[middle]
  
      if (potentialMatch === target) {
        return middle
      } else if (potentialMatch > target) { // 45 > 33
        right = middle - 1
      } else { // 21 < 33
        left = middle + 1
      }
    }
  
    return -1
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;