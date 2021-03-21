/*
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

// use parseInt
// return parseInt()
let stringToNumber = function(str){
    return parseInt(str)
    
  }

  /*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"
  */

  // declare variable 
  // set variable to indexOf
  // return variable in template literal

  function findNeedle(haystack) {
    let found = haystack.indexOf("needle")
    return `found the needle at position ${found}` 
  }

  /*
  Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
*/

// declare empty array
// loop through array multiplying
// push new array into empty
// return new array

function maps(x){
    let y = [];
    
    for (var i = 0; i < x.length; i++){  
      y.push(x[i] * 2)
    }
    return y;
  }

/* Best Practice
function maps(x){
  return x.map(n => n * 2);
} 
*/