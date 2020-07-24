// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt Choices & User Input
var passLength = prompt("Choose a password length between 8-18. Enter desired character length below:");
var upperLet = prompt("Do you want to include uppercase letters?");
var lowerLet = prompt("Do you want to include lowercase letters?");
var numbers = prompt("Do you want to include numbers?");
var specChar = prompt("Do you want to include special characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

document.getElementById("generate").onclick = function() {requestInput};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);