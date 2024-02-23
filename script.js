// Assignment Code
var generateBtn = document.querySelector("#generate");
// added funtion to create password.
function getPassword() {
    // different characters allowed in the password
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
    var numeric = "0123456789"
    var symbols = "!@#$%^&*_-+=<>?"
    var multiSelect = "";
    var randomKey = "";
// 
    var keyLength = prompt(
        "Your password must be between 8 to 128 characters, enter your desired length."
    );

// return window for passwords not set in criteria
if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
    alert("your password does not meet the criteria. Password must be between 8 to 128 characters. Please try again!");
    return;
// added prompts to better gauge what the user is looking for in their password.
} else {
    var upperAlpha = confirm("Do you want to include UPPERCASE characters in the password? Click confirm.");
    var lowerAlpha = confirm("Do you want to include lowercase characters in the password? Click confirm.");
    var numericOptions = confirm("Do you want to include numbers in the password? Click confirm.");
    var specialSymbols = confirm("Do you want special characters(<!$&) in the password? Click confirm.");
} 

if (upperAlpha) {multiSelect += uppercaseABC;}
if (lowerAlpha) {multiSelect += lowercaseABC;}
if (numericOptions) {multiSelect += numeric;}
if (specialSymbols) {multiSelect += symbols;}

// added loop to repeat if criteria isn't met that will end when password is created
for (i = 0; i < keyLength; i++) {
        randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
    }
    return(randomKey);
}

// Write password to the #password input
  var passwordText = document.querySelector("#password");
  function writePassword(randomKey) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = randomKey;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", function () {writePassword(getPassword()) });
