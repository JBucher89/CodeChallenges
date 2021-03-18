/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

// loop through string
// identify vowels
// add the number to vowelsCount
// Return vowelsCount

function getCount(str) {
    var vowelsCount = 0;
    for (let i = 0; i < str.length; i++){
    if (str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "o" || st.charAt(i) === "u"){
    vowelsCount++;
      }
    }
    return vowelsCount;
        
  }

  
  
  /* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

//Figure out what function can determine smallest
// since Math.min doesnt like arrays use the spread ...
// return smallest

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = Math.min(... args)   
    return smallest
    }
  }

  // Best practice is
  class SmallestIntegerFinder {
      findSmallestInt(args){
          return Math.min(... args)
      }
  }

