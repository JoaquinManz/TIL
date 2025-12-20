// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

function roundToNext5(n){
  // ...
  return Math.ceil(n / 5) * 5
}

// I didn't know how to solve this one, I knew about math.ceil, but did some research and understood the math behind it.

// looking at other answers, I saw some people using a while loop to increment the number until it was a multiple of 5, which is a really intelligent way to do it.

// function roundToNext5(n){
//   while(n % 5 !== 0) n++;
//   return n;
// }