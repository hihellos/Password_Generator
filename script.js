// Assignment Code
var generateBtn = document.querySelector("#generate");

var choseUpperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var choseLowerCase = "quertyuiopasdfghjklzxcvbnm".split("");
var choseNumbers = "1234567890".split("");
var choseSpecial = "!#$%&*+<=>?@/[]^_`|~".split(""); 

// User Prompt
alert("Welcome to your password generator! Please select your password requirements in the next few prompts. Then click Generate New Password to see your result. You can continue clicking to generate a new random password as many times as you would like!")

function generatePassword() {
  
  var myArray = [];
  var userNewPassword = [];

  var howMany = prompt("How many characters would you like your password to be? Choose length between 8-128 below:");
  if (parseInt(howMany) < 8 || parseInt(howMany) > 128) {
    console.log("Password must be between 8-128 characters.")
    alert("Password must be between 8-128 characters.");
    return location.reload();
    
    }

  var uUpper = confirm("Do you want to include uppercase letters?");
  var uLower = confirm("Do you want to include lowercase letters?");
  var num = confirm("Do you want to include numbers?");
  var char = confirm("Do you want to include special characters?");

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