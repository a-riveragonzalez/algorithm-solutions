// https://www.algoexpert.io/questions/find-closest-value-in-bst

function findClosestValueInBst(tree, target) {
  // Write your code here.

  // if (!this.root) return false;
  
  let closest = null; 
  let closestRange = Infinity;
  let current = tree; 
  let found = null;

  while (current !== null) {
    // first check if the root is closer than closest
    if (Math.abs(current.value - target) <= closestRange) {
      closestRange = Math.abs(current.value - target)
      closest = current.value;
    }

    if (closestRange===0) {
      break;
    }

    if (current.value < target) {
      // go left
      current = current.right
    } else if (current.value > target) {
      // go right
      current = current.left
    } 
  }

  return closest; 
  
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;