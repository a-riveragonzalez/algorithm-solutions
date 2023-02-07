// https://www.algoexpert.io/questions/non-constructible-change

function nonConstructibleChange(coins) {
    // Write your code here.
  
    if(!coins.length) return 1
  
    // sort array
    let sortedCoins = coins.sort(function (a, b) {return a - b}) 
    // ex [1, 1, 2, 3, 5, 7, 22]
  
    let change = 0;
    
    for (let i = 0; i < coins.length; i++) {
      let num1 = sortedCoins[i]
      
      if (num1 > (change + 1)) {
        break
      } else {
        change = change + num1
      }
    }
    
    return change + 1 
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;
  