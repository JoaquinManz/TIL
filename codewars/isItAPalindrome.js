// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
  // your code here
  const lowercase = x.toLowerCase();
  const reversed = lowercase.split("").reverse().join("")
  
  return lowercase === reversed;
}

// I started by converting the string to lowercase and then reversing it.
// Then I joined the reversed string back together and compared it to the original string.
// I also used the split method to split the string into an array of characters.

// I think this is the most straightforward way to solve this problem.