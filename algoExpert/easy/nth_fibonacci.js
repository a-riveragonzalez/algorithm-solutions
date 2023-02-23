// https://www.algoexpert.io/questions/nth-fibonacci

function getNthFib(n) {
    // Write your code here.
    if (n === 2) {
      return 1;
    } else if (n === 1) {
      return 0; 
    } else {
      return getNthFib(n-1) + getNthFib(n-2)
    }
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  