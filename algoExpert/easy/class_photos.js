// https://www.algoexpert.io/questions/class-photos

function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
    let backRedRowPointer = 0;
    let backBlueRowPointer = 0;
  
    redShirtHeights.sort((a,b) => {return a-b})
    blueShirtHeights.sort((a,b) => {return a-b})
    
    for (let i = 0; i < redShirtHeights.length; i++) {
      if (redShirtHeights[i] > blueShirtHeights[i]) {
        backRedRowPointer++
      }
      if (blueShirtHeights[i] > redShirtHeights[i]) {
        backBlueRowPointer++
      }
    }
  
    if (backBlueRowPointer === blueShirtHeights.length || backRedRowPointer === redShirtHeights.length) {
      return true;
    } else {
      return false;
    }
  }
  
  // Do not edit the line below.
  exports.classPhotos = classPhotos;