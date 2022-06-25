// Assignment Code

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

//everything above is not by me.

//characters array
var characters = {
  upperCase : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  lowerCase : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  number : ['0','1','2','3','4','5','6','7','8','9'],
  specialCase : ['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '`', '{', '|', '}', '~'],
}

//generatePassword function
function generatePassword(){
  // character limit prompt
  var passlength = window.prompt("How many characters in your password?");
  // reprompt if not within restricitons
  while (passlength < 8 || passlength > 128){
    if (passlength == null) break;
    window.alert("Password must be between 8 and 128 characters long!");
    passlength =window.prompt("How many characters in your password?");
    console.log(passlength);
  } 
// confirmation for included restrictions
if (passlength == null){
} else {
  var uppercon = confirm("Do you want to include uppercase?");
  var lowercon = confirm("Do you want to include lowercase?");
  var numcon = confirm("Do you want to include numbers?");
  var specialcon = confirm("Do you want to include special characters?");
  if(!uppercon && !lowercon && !numcon && !specialcon){
      alert("You need to include at least one condition");
    } 
  }
  // var pw = []

  // if (uppercon) {
  //   pw = pw.concat(characters.upperCase);
  // }
  // if (lowercon){
  //   pw = pw.concat(characters.lowerCase);
  // }
  // if (numcon){
  //   pw = pw.concat(characters.number);
  // }
  // if (specialcon){
  //   pw = pw.concat(characters.specialCase);
  // }
  
  // var complete = ""
  
  // for (var i=0; i < passlength; i++){
  //   complete = complete + pw[Math.floor(Math.random() *pw.length)]
  // }
  
  // return complete;
  // }
console.log(uppercon);
console.log(lowercon);
console.log(numcon);
console.log(specialcon);
var conArr = [uppercon , lowercon , numcon , specialcon]

var useArr = Object.keys(characters);

console.log(useArr);

for (var i = useArr.length - 1; i >= 0; i--){
  if (conArr[i] == 0){
    useArr.splice(i,1)
  }
}

console.log(useArr);
var complete = ""

for (var i=0; i < passlength; i++){
  var accessArr = useArr[Math.floor(Math.random() *useArr.length)];
  var pending = accessArr[Math.floor(Math.random() *accessArr.length)];
  console.log(accessArr);
  console.log(pending);
  complete = complete + pending;
  console.log(complete);
}

return complete;  //returns to writePassword function
}


//character limit prompt



//number, yes/no asnwers for password length and conditions
//number will be for looped and yes/no will be "if else" statement;