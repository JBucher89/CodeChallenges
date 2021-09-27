// Count of positives / sum of negatives

/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// P (arameters) (whole numbers?) (guaranteed negative numbers?) 
// R (eturns) (does the returned array need to be a new array?) (is the first el always going to be positive?)
// E (xamples) ([10, 20, 45, -1 ,3 , -6] = [6, -7])
// P (seudo) (are we allowed to use .length?) (are we allowed to use .reduce?)


function countPositivesSumNegatives(input) {
    // return empty array if undefined or null
   if (input == null || input.length == 0){
       return [];
   }
    // declare positive and negative variables
    let positiveNums = 0;
    let negativeNums = 0;   
    // loop through array
    // if value in array is positive add 1 to positiveNums
    // if value is negative add it to other negatives and put in negativeNums
    for (let i =0; i < input.length; i++){
        if(input[i] > 0)
        ++ positiveNums;
        else
        negativeNums += input[i]
    }


    // push new elements to new array
   
    return [positiveNums, negativeNums];
    
    
}




// Other ways to do this would be to use reduce

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    }, [0, 0]);
  }

// Using forEach

function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) return [];
    var sum = 0, count = 0;
    input.forEach(function(el){ if (el > 0) count++; else sum+=el});
    return [count, sum];
  }