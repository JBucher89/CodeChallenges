/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/

// use filter()
//return length

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter( num => num === true).length
    }


    /*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

FUNDAMENTALS
 */

  // function bmi(weight, height) {
//   let userBMI = weight / height **2
//   console.log(userBMI)
// //   return "";
//   if (userBMI <= 18.5){
//   return "Underweight"
//   }else if(userBMI <= 25){
//     return "Normal"
//   }else if(userBMI <= 30){
//   return "Overweight"
//   }else if(userBMI > 30){
//   return "Obese"
//   }
// }

function bmi(weight, height){
    let userBMI = weight / height **2
  return userBMI <= 18.5 ? "Underweight"
      : userBMI <= 25 ? "Normal"
      : userBMI <= 30 ? "Overweight"
      : "Obese"
  }