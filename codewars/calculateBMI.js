// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
  let bodyMassIndex = weight / (height ** 2);
  
  if (bodyMassIndex <= 18.5) return "Underweight";
  if (bodyMassIndex <= 25) return "Normal";
  if (bodyMassIndex <= 30) return "Overweight";
  if (bodyMassIndex > 30) return "Obese";
}