// https://www.algoexpert.io/questions/remove-duplicates-from-linked-list

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let currentNode = linkedList;
    let nextDifferentNode = currentNode.next
  
    while(currentNode !== null) {  
      nextDifferentNode = currentNode.next // this is for the pointer 
      
      while (nextDifferentNode !== null && nextDifferentNode.value === currentNode.value) {
        nextDifferentNode = nextDifferentNode.next // every time the nodes match, the pointer moves forward one
      }
  
      currentNode.next = nextDifferentNode // this removes all the nodes inbetween current to nextDifferent
      currentNode = nextDifferentNode // this changes the current node to the next 
    }
    
    return linkedList;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  