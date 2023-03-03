// https://www.algoexpert.io/questions/bubble-sort

function bubbleSort(array) {
    // Write your code here.
    let isSorted = false;
    let counter = 0 // this is to not check last element for each loop
  
    while (!isSorted) {
      isSorted = true; // as long as we don't change it to false, loop will end
      
      for (let i = 0; i < array.length - 1 - counter; i++) {
        if (array[i] > array[i+1]) {
          // swap these 2 numbers
          const temp = array[i+1]
          array[i+1] = array[i]
          array[i] = temp
          
          isSorted = false; 
        }
      }
      counter++
    }
    return array 
  }
  
  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;