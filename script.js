// Assignment Code
var generateBtn = document.querySelector("#generate");
// added funtion to create password.
function getPassword() {
    // different characters allowed in the password
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
    var numeric = "0123456789";
    var symbols = "!@#$%^&*_-+=<>?";
    var mulitSelect = "";
    var randomKey = "";
// 
    var keylength = prompt(
        "Your password must be between 8 to 128 characters, enter your desired length."
    );
}

// return window for passwords not set in criteria
if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
    alert("your password does not meet the criteria. Password must be between 8 to 128 characters. Please try again!");
    return;
// added confirm option to prompts allowing user to select what types of characters are in their password
} else {
    var upperAlpha = confirm("Do you want to include UPPERCASE characters in the password? Click confirm.");
    var lowerCase = confirm("Do you want to include lowercase characters in the password? Click confirm.");
    var numericOptions = confirm("Do you want to include numbers in the password? Click confirm");
    var specialSymbols = confirm("Do you want special characters(<!$&) in the password? Click confirm");
} 

if (upperAlpha) {multiSelect += uppercaseABC;}
if (lowerAlpha) {multiSelect += lowecaseABC;}
if (numericOptions) {multiSelect += symbols;}
if (specialSymbols) {multiSelect += symbols;}


















































// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);