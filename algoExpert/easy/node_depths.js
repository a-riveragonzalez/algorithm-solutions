//https://www.algoexpert.io/questions/node-depths

function nodeDepths(root) {
    // Write your code here.  
    findNodeDepths(root, depth);
  
  }
  
  function findNodeDepths(node, workingDepth){
    let newWorkingDepth = workingDepth + 1
  
    if (!node.left && !node.right){
      return
    }
    
    
    
    findNodeDepths(node.left, newWorkingDepth)
    findNodeDepths(node.right, newWorkingDepth)
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;