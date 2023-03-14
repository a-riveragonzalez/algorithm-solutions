// https://www.algoexpert.io/questions/move-element-to-end

function moveElementToEnd(array, toMove) {
    // Write your code here.
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    
    for (let i = 0; i < array.length; i++) {    
      if (array[rightPointer] === toMove){
        // remove from array, then push it to end 
        array.splice(rightPointer, 1)
        array.push(toMove)
      }
  
      if (array[leftPointer] === toMove) {
        // splice it to end
        array.splice(leftPointer, 1)
        array.push(toMove)
      }
  
      leftPointer++
      rightPointer--
    }
  
    return array;
  }
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  