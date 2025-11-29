// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

// https://www.codewars.com/kata/570a6a46455d08ff8d001002

function noBoringZeros(n) {
  // your code
  return Number(n.toString().replace(/0+$/, ''))
}

// this regex will remove all zeros at the end of the string