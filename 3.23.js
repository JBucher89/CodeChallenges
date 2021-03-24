
/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?


function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

*/


// function greet(name){ 
//   if(name === "Johnny"){
//     return "Hello, my love!";
//     }else {
//       return "Hello, " + name + "!"; 
//     }
  
// }


function greet(name){
    return name === "Johnny" ? 'Hello, my love!' : 'Hello, ' + name + "!"
  }



  /*
  A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/

// if else
// 2 bullets per dragon = dragons * 2
// if bullets are greater than dragons * 2 return true
//otherwise return false

function hero(bullets, dragons){
    if ((bullets) >= dragons * 2){
      return true
    }else{
      return false
    }
    }
    


    // Best Practice

    function hero(bullets, dragons){
        return bullets >= dragons * 2
      }