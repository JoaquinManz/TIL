// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

// https://www.codewars.com/kata/57a55c8b72292d057b000594

function reverse(string){
  //your code here
  return string.split(" ").reverse().join(" ")
}

// was able to solve it all alone, I like using split and reverse, its fun