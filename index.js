// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter 1 has the variable count within the function, while counter 2 has it ouside the function
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter 1 uses a closure because it has a child function nested inside the parent function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 code would be preferable if you wanted to create multiple private variables that could use the counter and have a counter that accumulates.
 * 
 * counter2 would be better if you wanted to reset at 0 every time.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return Math.floor(Math.random() * 3);

}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// function finalScore(inning, number){
//   for(let i = 0; i < number; i++)
//   let homeScore = inning() * Math.round(Math.random()*number);
//   let awayScore = inning() * Math.round(Math.random()*number);
//   let score = {
//     "Home": `${homeScore}`,
//     "Away": `${awayScore}`,
//   }
//   return score;
// }  
// console.log(finalScore(inning, 9));

function finalScore(cb, number){
  let finalScore = {
    "Home": 0,
    "Away": 0,
  }
  for(let i = 0; i < number; i++){
    // if(i % 2 === 0){
      finalScore.Home = finalScore.Home += cb();
    // }else{
      finalScore.Away = finalScore.Away += cb();
      console.log(finalScore.Away);
    // }
  }
  return finalScore;
}
console.log(finalScore(inning, 5));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function numberToOrdinal(n) {
  var j = n % 10;
       k = n % 100;
 
   if (j == 0 && n == 0) {
       return 0;
 }
 
   if (j == n && k != 11) {
       return n + "st";
   }
   if (j == 2 && k != 12) {
       return n + "nd";
   }
   if (j == 3 && k != 13) {
       return n + "rd";
   }
   return n + "th";
}
function scoreboard(callback, num){
  let finalScore = {
    "Home": 0,
    "Away": 0,
  }
  for(let i = 0; i < num; i++){
    // if(i % 2 === 0){
      finalScore.Home = finalScore.Home += callback();
      console.log(`${numberToOrdinal(i)} inning: ${finalScore.Away} - ${finalScore.Home}`);
      finalScore.Away = finalScore.Away += callback();
    // }
  }
  return finalScore;
}
console.log(scoreboard(inning, 5));



// function getInningScore(inning, number){
//   let homeTeam = [];
//   homeTeam.push(inning());  
// }
// getInningScore(inning(), 5)
// console.log(getInningScore());

// function scoreboard(num,cb) {

//   return function getInningScore(){

//     console.log( 
//     `1st inning: awayTeam - homeTeam
//     2nd inning: awayTeam - homeTeam
//     3rd inning: awayTeam - homeTeam
//     4th inning: awayTeam - homeTeam
//     5th inning: awayTeam - homeTeam
//     6th inning: awayTeam - homeTeam
//     7th inning: awayTeam - homeTeam
//     8th inning: awayTeam - homeTeam
//     9th inning: awayTeam - homeTeam`)

//     return function inning(){

//     }
//   }
// }

// function inning(repeat){
//   var inningCount = 1

  function getInningScore(inning, number){
    let awayTeam = inning()*number; 
    let homeTeam = inning()*number;
    console.log(inning(number))

    function scoreboard(){

    }
  }
// }

// let homeTeam = gettingInningScore();
  // return `1st inning: awayTeam - homeTeam
  // 2nd inning: awayTeam - homeTeam
  // 3rd inning: awayTeam - homeTeam
  // 4th inning: awayTeam - homeTeam
  // 5th inning: awayTeam - homeTeam
  // 6th inning: awayTeam - homeTeam
  // 7th inning: awayTeam - homeTeam
  // 8th inning: awayTeam - homeTeam
  // 9th inning: awayTeam - homeTeam