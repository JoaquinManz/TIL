// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// https://www.codewars.com/kata/54da539698b8a2ad76000228


function isValidWalk(walk) {
  //insert brilliant code here
  // check if walk length is different from 10, then return false
  if(walk.length !== 10) return false;
  // create counters for north, south, east, west
  let ns = 0;
  let ew = 0;
  
  // loop through walk array 
  for(let dir of walk) {
    // if direction is n, e increment counters
    // if direction is s, w decrement counters
    if(dir === 'n') ns++;
    if(dir === 's') ns--;
    if(dir === 'e') ew++;
    if(dir === 'w') ew--;
  }
  // return if counters are equal to 0
  return ns === 0 && ew === 0;
}