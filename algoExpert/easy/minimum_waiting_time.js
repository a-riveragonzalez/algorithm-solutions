function minimumWaitingTime(queries) {
    // Write your code here.
    //sort the array smallest to largest
    queries.sort((a, b) => {return a-b})
    // ex [1, 2, 2, 3, 6]
    console.log(queries)
  
    let total = 0; 
    let queriesLeft = 0; 
  
    for (let i = 1; i < queries.length; i++) {
      queriesLeft = (queries.length - i ) * queries[i -1]
      total = total + queriesLeft
      console.log(total)
    }
  
    return total;
  }
  
  // Do not edit the line below.
  exports.minimumWaitingTime = minimumWaitingTime;