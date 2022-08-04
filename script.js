// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let specialCharacters = [
  "?",
  "!",
  ">",
  "<",
  "{",
  "}",
  "[",
  "]",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "'",
  ":",
  ";",
  ".",
  ",",
  "~",
  "`",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function myFunction() {
  writePassword();
});

function generatePassword() {
  var lengthPrompt = prompt("How many characters?");
  console.log(length);
  if (lengthPrompt < 8) {
    alert("Password needs to have at least 8 characters");
  } else if (lengthPrompt > 128) {
    alert("Password needs to be less the 128 characters");
  }
  var specialCharactersPrompt = confirm(
    "Would you like to include special characters?"
  );
  console.log(specialCharactersPrompt);
  if (specialCharactersPrompt) {
    var specialCharIndex = Math.floor(
      this.specialCharacters.length * Math.random()
    );
  }
  var numericPrompt = confirm("Would you like any numbers?");
  console.log(numeric);
  var upperCasePrompt = confirm(
    "Would you like to include special characters?"
  );
  console.log(upperCase);
  var lowerCasePrompt = confirm("Would you like any numbers?");
  console.log(lowerCase);
}

var computerChoice = options[Math.floor(options.length * Math.random())];

// //From internet
//  function genPassword() {
//     var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var passwordLength = 12;
//     var password = "";
//  for (var i = 0; i <= passwordLength; i++) {
//    var randomNumber = Math.floor(Math.random() * chars.length);
//    password += chars.substring(randomNumber, randomNumber +1);
//   }
//         document.getElementById("password").value = password;
//  }

// function copyPassword() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   document.execCommand("copy");
// }
