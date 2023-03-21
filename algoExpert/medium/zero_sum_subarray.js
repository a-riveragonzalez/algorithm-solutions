// https://www.algoexpert.io/questions/zero-sum-subarray

function zeroSumSubarray(nums) {
    // Write your code here.
    let sums = [0]
    let currentSum = 0
  
    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i]
      if (sums.includes(currentSum)){
        return true
      }
      sums.push(currentSum)
    }
  
    return false;
  }
  
  // Do not edit the line below.
  exports.zeroSumSubarray = zeroSumSubarray;