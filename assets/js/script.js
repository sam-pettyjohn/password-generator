// Assignment code here

var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arraySpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", ",", ".", "/", "<", ">", "?"];

var promptLength = "";
var promptLowercase
var promptUppercase
var promptNumerical
var promptSpecial

function generatePassword() {
  var promptLength = parseInt(prompt("Welcome! Please select a password length between 8 and 128 characters."));
  
  while(promptLength <= 7 || promptLength >= 129) {
    alert("Generated passwords must be between 8 and 128 characters in length. Please try again.");
    var promptLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
  }
  alert("Generated password will have " + promptLength + " characters.");
  var promptLowercase = confirm("Should password include lowercase letters? Example: asdf");
  var promptUppercase = confirm("Okay. Should password uppercase letters? Example: ASDF");
  var promptNumerical = confirm("Understood. Should password include numerical characters? Example: 1, 2, 3, 4");
  var promptSpecial = confirm("Got it. Finally, should password include special characters? Example: !, @, #, $");

  while(!promptLowercase && !promptUppercase && !promptNumerical && !promptSpecial) {
    alert("Generated password must include at least one parameter. Please try again.");
    var promptLowercase = confirm("Should password include lowercase letters? Example: asdf");
    var promptUppercase = confirm("Okay. Should password include uppercase letters? Example: ASDF");
    var promptNumerical = confirm("Understood. Should password include numerical characters? Example: 1, 2, 3, 4");
    var promptSpecial = confirm("Got it. Finally, should password include special characters? Example: !, @, #, $");
  }

  var list = []

  if (promptLowercase) {
    list = list.concat(arrayLower)
  } if (promptUppercase) {
    list = list.concat(arrayUpper)
  } if (promptNumerical) {
    list = list.concat(arrayNumber)
  } if (promptSpecial) {
    list = list.concat(arraySpecial)
  }

    var genPass = ""
    
    for (var i=0; i < promptLength; i++) {
      genPass = genPass + list[Math.floor(Math.random() * list.length)];
      console.log(genPass)
    } return genPass
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);