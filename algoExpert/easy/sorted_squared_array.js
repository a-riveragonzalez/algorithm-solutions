// https://www.algoexpert.io/questions/sorted-squared-array

function sortedSquaredArray(array) {
    // Write your code here.
  
    // question : can there be negative values? answer : yes 
    
    let newArray = [];
    let sortedArray = [];
  
    // this will create a new array with the squares of the original array
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]*array[i])
    }
  
    newArray.sort(function(a, b) {
    return a - b;
    });
  
    // [9 , 4 , 1]
  
    // this will sort the newArray 
    // for (let i = 0; i < newArray.length; i++) {
    //   let counter = 0;
      
    //   let num1 = newArray[counter];
    //   let num2 = newArray[i+1];
  
    //   if (num1 < num2) {
        
    //   }
      
    // }
    
    return newArray;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;