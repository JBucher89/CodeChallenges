/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

// look up summation formula
//return solution of summation formula
var summation = function (num) {
    return (num * (num + 1)) / 2;
  }


/*
Simple, remove the spaces from the string, then return the resultant string.

FUNDAMENTALSSTRINGSARRAYS
*/

// look up the method for removing white space
// use replace
// return new string
function noSpace(x){
    return  x.replace(/ /g, "")
    }



