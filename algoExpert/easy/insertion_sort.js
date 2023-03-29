// https://www.algoexpert.io/questions/insertion-sort

function insertionSort(array) {
  // [8, 5, 2, 9, 5, 6, 3]
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    // starts at 1 b/c the first element is "sorted"
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      // 5 < 8
      // swap them
      let temp = array[j - 1]; // 8
      array[j - 1] = array[j]; // 8 to 5
      array[j] = temp; // 5 to 8

      j -= 1;
    }
  }

  return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
