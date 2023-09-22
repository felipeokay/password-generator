// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; "abcdefghijklmnopqrstuvwxyz0123456789";

}

// What will be displayed to user
var prompt = window.prompt("Choose the number of character in your password (8-128)");
if (prompt < 8) {
  window.alert("Your password must be at least 8 characters.")
  return
}
if (prompt > 128) {
  window.alert("Your password must be less than 128 characters.")
  return
}


var promptUppercase = window.confirm("Would you like to include upper case letters in your password?")
var promptSpecialcharacters = window.confirm("Would you like to include any special characters in your password?")


// Creating a min and max for user experience when generating password
function display() {
  displayPassword.textcontent = result;

}
if (promptUppercase === true && promptSpecialcharacters === true) {
  for (let i = 0; i < prompt; i++) {
    var math4 = Math.floor(Math.random() * allCharacters.length);
    result += allCharacters[math4];
  }
}
else if (promptUppercase === true) {
  for (let i = 0; i < prompt; i++) {
    var math3 = Math.floor(Math.random() * allLetters.length);
    result += allLetters[math3];
  }
}
else if (promptSpecialCharacters === true) {
  for (let i = 0; i < prompt; i++) {
    var math2 = Math.floor(Math.random() * allSpecialcharacters.length);
    result += allSpecialcharacters[math2];
  }
else {
  for (let i = 0; i < prompt; i++) {
    var math1 = Math.floor(Math.random() * lowerCase.length);
    result += lowerCase[math1];
  }
}
display()

}

console.log(result);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
