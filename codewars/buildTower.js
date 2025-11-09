// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

//https://www.codewars.com/kata/576757b1df89ecf5bd00073b


function towerBuilder(nFloors) {
  // initialize a tower array
  let tower = []

  // calculate the area of the towers base
  let towerBase = (nFloors * 2) - 1
  
  // loop through the tower array 
  for(let i = 1; i <= nFloors; i++) {
    // calculate the number of spaces and asterisks
    const numAsterisks = (i * 2) - 1;
    const numSpaces = (towerBase - numAsterisks) / 2;
    // use repeat method to create spaces and floor
    const spaces = " ".repeat(numSpaces);
    const asterisks = "*".repeat(numAsterisks);
    // concatenate the spaces and floor
    const floor = spaces + asterisks + spaces;
    // push the floor to the tower array
    tower.push(floor)
  }
  return tower;
}

// This one is pretty dificult to accomplish, but it's a good exercise, really puts you to test.