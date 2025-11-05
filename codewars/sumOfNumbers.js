//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b)
{
   //Good luck!
  if (a === b) return a;
  
  //find max and min numbers between a and b
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  
  //initialize sum to 0
  let sum = 0;
  
  //loop through all numbers between min and max
  for (let i = min; i <= max; i++) {
      sum += i;
    }
  
  return sum;
}
