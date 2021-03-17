// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 
// create an array of numbers
// let randomArray = [1, 2,15,13,32,24,64,79,223,420,69]
//  create a function
function oddNumberArrayFinder(arr){
    // return a new array (return lets us know we should have our second array inside our function)
    let returnedArray = []
    arr.forEach((item, i) => {
        if (item % 2 !== 0){
            returnedArray.push(item)
        }
    });
    return returnedArray
}
console.log(oddNumberArrayFinder([1, 2,15,13,32,24,64,79,223,420,69])) 