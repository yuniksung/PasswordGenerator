  
// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices = [];

character =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "+" ];;
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function getRandomChart(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomChar = arr[randomIndex]
  return randomChar;
}


// Generate function start
function generatePassword() {
  var result = [];
  enter = parseInt(window.prompt("Please pick a password length between 8 and 128 characters."));
  if (!enter) {alert("This needs a value");}

    else if (enter < 8 || enter > 128) {
     enter = paresInt(prompt("You must choose between 8 to 128"));
  // continue asking
   } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

  // If user did not choose any of the options
  if (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
    choices = alert("Sorry, this cannot generate password. Please try again");
  }
  if (confirmNumber) {
    choices = choices.concat(numbers);
  }
  if (confirmCharacter) {
    choices = choices.concat(character);
  }
  if (confirmLowercase) {
    choices = choices.concat(letters);
  }
  if (confirmUppercase) {
    choices = choices.concat(capitalLetters);
  }
  for (var i = 0; i < enter; i++) {
    var randomChar = getRandomChart(choices);
    result.push(randomChar);
  }
  choices = [];
  return result.join()
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordArr = password.split(",");
  var newPassword = "";
  for (i = 0; i < passwordArr.length; i++) {
    newPassword = newPassword + passwordArr[i];
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
}
generateBtn.addEventListener("click", writePassword);
console.log(passwordArr);
