// Assignment Code
var generateBtn = document.querySelector("#generate");
var choseUpperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var choseLowerCase = "quertyuiopasdfghjklzxcvbnm".split("");
var choseNumbers = "1234567890".split("");
var choseSpecial = "!#$%&*+<=>?@/[]^_`|~".split(""); 

// User Prompt
var passLength = prompt("How many characters would you like your password to be? Choose length between 8-128 below:");
var userUpper = confirm("Do you want to include uppercase letters?");
var userLower = confirm("Do you want to include lowercase letters?");
var userNumbs = confirm("Do you want to include numbers?");
var userSpecial = confirm("Do you want to include special characters?");

function generatePassword(howMany, uUpper, uLower, num, char) {
  var myArray = [];
  var userNewPassword = [];

  if (howMany <= 8 && howMany >=128) {
    alert("Password must be between 8-128 characters.");
    return location.reload();
  }
    if (uUpper === true) {
      for (var i = 0; i < choseUpperCase.length; i++) {
        myArray.push(userUpper[i]);
      }
    }
    if (uLower === true) {
      for (var i =0; i < choseLowerCase.length; i++) {
        myArray.push(userLower[i]);
      }
    }
    if (num === true) {
      for (var i = 0; i < choseNumbers.length; i++) {
        myArray.push(userNumbs);
      }
    }
    if (char === true) {
      for (var i = 0; i < choseSpecial.length; i++) {
        myArray.push(userSpecial);
      }
    }
    for (var i = 0; i < howMany.length; i++) {
      var randomNum = Math.floor(Math.random() * myArray.length);
      console.log(myArray);
      userNewPassword.push(myArray[randomNum]);
    }
  
  return userNewPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passLength, userUpper, userLower, userNumbs, userSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);