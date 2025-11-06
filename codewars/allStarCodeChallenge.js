// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
//https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter){  
  //initialize count to 0
  let count = 0;
  //for loop to iterate through each character in the string
  for (let char of str) {
    // check if char is equal to letter
    if (char === letter) {
        //if it is, increment count
      count++;
    }
  }
  
  return count;
}