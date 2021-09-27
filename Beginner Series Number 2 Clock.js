// Beginner Series #2 Clock
/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

// P (rep) (are h, m, s, always going to be positive?) (are they always going to be a whole number?)
// R (eturns) (is the return always going to be positive?) (is it always going to be a whole number?)
// E (xamples) (1,1,1),3661000) (0,0,0),0) (1,0,1),3601000)
// P (seudo) 

// find how many milliseconds are in an hour, a minute, a seconds
// add how many are in an hour to minutes and to seconds
// return the sum of all

function past(h, m, s){
    //#Happy Coding! ^_^
    return ((h * 3600000)+(m*60000)+(s* 1000))  
  }


// Other solutions

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }

// using arrow function
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

