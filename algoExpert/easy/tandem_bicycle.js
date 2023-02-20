// https://www.algoexpert.io/questions/tandem-bicycle

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    let total = 0
    
    if (fastest){
      console.log("go fast")
      
      redShirtSpeeds.sort((a,b) => {return a-b}) // sorted small to big [2, 3, 5, 5, 9]
      blueShirtSpeeds.sort((a,b) => {return b-a}) // sorted big to small [7, 6, 3, 2, 1]
  
      for (let i = 0; i < redShirtSpeeds.length; i++) {
        if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
          total = total + redShirtSpeeds[i]
        } else {
          total = total + blueShirtSpeeds[i]
        }
      }
      
    } else {
      console.log("go slow")
      redShirtSpeeds.sort((a,b) => {return a-b}) // sorted small to big [2, 3, 5, 5, 9]
      blueShirtSpeeds.sort((a,b) => {return a-b}) // sorted small to big [1, 2, 3, 6, 7]
        
      for (let i = 0; i < redShirtSpeeds.length; i++) {
        if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
          total = total + redShirtSpeeds[i]
        } else {
          total = total + blueShirtSpeeds[i]
        }
      }
    }
    
    return total
  }
  
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;
  