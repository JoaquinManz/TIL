// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
    // create a const result and initialize it to {}
  const result = {}
  
  // iterate over the string
  for (let char of string) {
    // if the char is already in the result, increment it
    if (result[char]) {
      result[char]++;
    } else {
        // if the char is not in the result, add it with a value of 1
      result[char] = 1;
    }
  }
  
  return result;
}