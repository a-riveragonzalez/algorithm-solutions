// https://www.algoexpert.io/questions/selection-sort

function selectionSort(array) {
  // Write your code here.
  let currentIndex = 0;

  while (currentIndex < array.length - 1) {
    let smallestIndex = currentIndex;

    // this is finding the smallest number left
    for (let i = currentIndex + 1; i < array.length; i++) {
      if (array[smallestIndex] > array[i]) {
        smallestIndex = i;
      }
    }

    // swap the smallest number to the spot of current Index
    const temp = array[smallestIndex];
    array[smallestIndex] = array[currentIndex];
    array[currentIndex] = temp;

    // increment current index
    currentIndex++;
  }

  return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
