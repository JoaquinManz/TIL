// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// This is my first solution: 

function countSheeps(sheep) {
  // TODO
  let countingSheep = 0
  
    for(let s of sheep) {
      if (s === true) {
        countingSheep++
      }
    }
    return countingSheep
  }

// However, it's not efficient at all.

// It's better to use .filter and .length:

function countSheeps2(sheep) {
    return sheep.filter(s => s === true).length;
}