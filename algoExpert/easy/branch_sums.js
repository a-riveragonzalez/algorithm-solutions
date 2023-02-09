// https://www.algoexpert.io/questions/branch-sums

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
    let sums = []
    calculateBranchSums(root, 0, sums)
    
    return sums
  }
  
  function calculateBranchSums(node, workingSum, sums) {  
    // find new workingSum
    if (!node) {
      return
    }
      
    let newWorkingSum = workingSum + node.value;
  
    if (!node.right && !node.left) {
      sums.push(newWorkingSum)
      return
    }
    
    calculateBranchSums(node.left, newWorkingSum, sums) 
    calculateBranchSums(node.right, newWorkingSum, sums) 
  }
    
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  