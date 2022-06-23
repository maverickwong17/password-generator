// Assignment Code

//characters array
var characters = {
  upperCase : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  lowerCase : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  specialCase:['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '`', '{', '|', '}', '~'],
  number: ['1','2','3','4','5','6','7','8','9','0']
}

//Get references to the generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePassword function
function generatePassword(){
  var passlength = window.prompt("How many characters in your password?");
  var conUpper
  var intLength = parseInt(passlength);
  var pending = 0
  var complete = ""

  for (var i=0; intLength > i; i++){
    pending = "a";
    complete = complete.concat(pending);
    console.log(complete);
  }

  return complete;
  }

  //number, yes/no asnwers for password length and conditions
  //number will be for looped and yes/no will be "if else" statements