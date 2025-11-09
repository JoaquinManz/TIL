// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
  //...
  return new Set(str.toLowerCase()).size === str.toLowerCase().length
}

// I remembered that Set is basically an array with no duplicates. So I just turn the string given to lowercase and then check if the length of the array is the same as the length of the string.