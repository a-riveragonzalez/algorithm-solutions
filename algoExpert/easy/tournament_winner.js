// https://www.algoexpert.io/questions/tournament-winner

function tournamentWinner(competitions, results) {
    // Write your code here.
    // make hash map 
    let hashmap = new Map();
  
    // ["html" , 3]
    // ["C#", 6]
    // ["python" , 3]
    
    for (let i = 0; i < competitions.length; i++) {
      
      if (results[i]){
        // if the key already exists, update it
        if (hashmap.has(competitions[i][0])){
          // get current score
          let homeTeamPoints = hashmap.get(competitions[i][0]);
          // add 3 points to score
          let newHomePoints = homeTeamPoints + 3; 
          // set new score
          hashmap.set(competitions[i][0], newHomePoints)
        } else {
          // it doesn't exist yet, so set a new one
          hashmap.set(competitions[i][0], 3)
        }
      } else {
        if (hashmap.has(competitions[i][1])){
          // get current score
          let awayTeamPoints = hashmap.get(competitions[i][1]);
          // add 3 points to score
          let newAwayPoints = awayTeamPoints + 3; 
          // set new score
          hashmap.set(competitions[i][1], newAwayPoints)
        } else {
          // it doesn't exist yet, so set a new one
          hashmap.set(competitions[i][1], 3)
        }
      }
    }
  
    // find the max value (or the winner)
    const max = Math.max(...hashmap.values())
    // max = 6
  
    // find the key of that value and print it 
    for (let [key , value] of hashmap) {
      if (value === max) {
        return key
      }
    }
    
  }
  
  // O(2N)
  // 
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;