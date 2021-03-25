/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

// create function that takes in 3 args
// use switch to determine case
// return solution of case

function basicOp(operation, value1, value2)
{
 switch (operation){
     case '+':
       return value1 + value2;
     case '-':
       return value1 - value2;
     case '*':
       return value1 * value2;
     case '/':
       return value1 / value2;
     default:
       return 0;
 }
}

// Best Practice
// using ternary
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}


/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// declare sum
// use method that applys to all items in array (forEach)
// add sum to num^2
// return num


function squareSum(num){
    let sum = 0;
    num.forEach(num =>{
      sum += (num * num)
    })
  return sum
  }


  // best practices
  function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }