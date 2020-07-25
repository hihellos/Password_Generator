var generateBtn = document.querySelector("#generate");

var choseUpperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var choseLowerCase = "quertyuiopasdfghjklzxcvbnm".split("");
var choseNumbers = "1234567890".split("");
var choseSpecial = "!#$%&*+<=>?@/[]^_`|~".split(""); 

alert("Welcome to your new favorite password generator. Please click Generate New Password to get started, then select your password requirements in the following prompts. Enjoy!")

function generatePassword() {
  
  var myArray = [];
  var userNewPassword = [];

  var howMany = prompt("How many characters would you like your password to be? Choose length between 8-128 below:");
  if (parseInt(howMany) < 8 || parseInt(howMany) > 128) {
    alert("Please choose a number for a password length between 8-128 characters. Time to start over!");
    return location.reload();
    } 
    
  if (howMany === "" || howMany === null) {
    alert("Please choose a number for a password length between 8-128 characters. Time to start over!");
    return location.reload();
  }

  var uUpper = confirm("Do you want to include uppercase letters?");
  var uLower = confirm("Do you want to include lowercase letters?");
  var num = confirm("Do you want to include numbers?");
  var char = confirm("Do you want to include special characters?");

  if (uUpper == "" && uLower == "" && num == "" && char == "") {
    alert("Please choose at lease one character type for your password. Time to start over!");
    return location.reload();
  }

  console.log(typeof howMany)

    if (uUpper === true) {
      for (var i = 0; i < choseUpperCase.length; i++) {
        myArray.push(choseUpperCase[i]);
      }
    }
    if (uLower === true) {
      for (var i =0; i < choseLowerCase.length; i++) {
        myArray.push(choseLowerCase[i]);
      }
    }
    if (num === true) {
      for (var i = 0; i < choseNumbers.length; i++) {
        myArray.push(choseNumbers[i]);
      }
    }
    if (char === true) {
      for (var i = 0; i < choseSpecial.length; i++) {
        myArray.push(choseSpecial[i]);
      }
    }
    for (var i = 0; i < howMany; i++) {
      var randomNum = Math.floor(Math.random() * myArray.length);
      userNewPassword.push(myArray[randomNum]);
      console.log(myArray);
    }
  
  return userNewPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to Generate New Password button
generateBtn.addEventListener("click", writePassword);