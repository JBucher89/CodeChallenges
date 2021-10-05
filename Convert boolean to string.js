// Convert a boolean to a string
// Implement a function which convert the given boolean value into its string representation.

//Note: Only valid inputs will be given.
// P = only booleans will be inputs
// R = only strings will be returned
// E = I: false; R: "false"
// P = 
function booleanToString(b){
    // take input and convert to strings
    // return input as strings
    return b.toString()
  }

  

  // using conditional logic
  function booleanToString(b){
    if(b === true){
      return "true";
    }else{
      return "false";
    }
  }

  // using template literal
  function booleanToString(b){
    return `${b}`
  }