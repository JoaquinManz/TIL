// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// https://www.codewars.com/kata/5a023c426975981341000014

function otherAngle(a, b) {
  
  let thirdAngle = 180 - (a + b);
  return thirdAngle;
}

// could also be written in one line as: return 180 - (a + b);