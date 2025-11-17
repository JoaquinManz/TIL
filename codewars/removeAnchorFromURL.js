// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

function removeUrlAnchor(url){
  // TODO: complete
  return url.split("#")[0]
}

// split the url at the anchor tag, and return the first part of the array 