/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

// going to use Math.floor to round down to smallest #
// multiply .5 by time
//return whole thing

function litres(time) {
    return Math.floor((time * .5))
    
  }

  /*
  Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
*/

// write function
// return string hello world
function greet() {
    return "hello world!";
    }
