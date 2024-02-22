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
} 




















































// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);