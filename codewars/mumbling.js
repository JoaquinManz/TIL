// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
	// your code
    return s.split("").map((char, i) => {
      return char.toUpperCase() + char.toLowerCase().repeat(i)
    }).join("-")
}

// split the string into an array of characters, then create a new array with map, where we return the uppercased character and the lowercased character repeated i times.
// join the array with a dash.