function validatePIN(pin) {
  // Check if the PIN is either 4 or 6 characters long and consists only of digits.
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Fix the typo

  if (pin.length === 4 || pin.length === 6) {
    // Use the every method to check all characters in the pin
    return pin.split("").every((el) => digits.includes(el));
  }

  return false;
}
function validatePIN(pin) {
  //return true or false
  var n = pin.length;
  if (n != 4 && n != 6) return false;
  for (var i in pin) if (pin[i] > "9" || pin[i] < "0") return false;
  return true;
}
