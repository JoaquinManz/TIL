// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// at first I wanted to solve this without regex, since I never used it, doing something like this: 
if ((pin.length === 4 || pin.length === 6) && !isNaN(pin)) {
    return true
  } else {
    return false
  }

// the problem is that this does not work, since if the pin contains empty spaces (like "    ") it will return true, even if it's not a valid pin code.
// I could solve this by adding more conditions, but it would be a lot of code.

// So I did some research and found this regex: 

function validatePIN (pin) {
  //return true or false
  
  // what this regex does is that it checks if pin is 4 or 6 digits long exactly.
  return /^\d{4}$|^\d{6}$/.test(pin)
}

// I think I have to learn more about regex, it's a bit confusing for me.