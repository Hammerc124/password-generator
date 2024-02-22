// Assignment Code
var generateBtn = document.querySelector("#generate");
// added funtion to create password.
function getPassword() {
    // different characters allowed in the password
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
    var numeric = "0123456789";
    var symbols = "!@#$%^&*()_-+=<>?";
    var mulitSelect = "";
    var randomKey = "";
// 
    var keylength = prompt(
        "Your password must be between 8 to 128 characters, enter your desired length."
    );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);