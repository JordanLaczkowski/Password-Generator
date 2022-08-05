// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const upperCase = [
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

const lowerCase = [
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

const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = [
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

var specialCharSelection;
var upperCaseSelection;
var lowerCaseSelection;
var numberSelection;
var lengthPrompt;
var specialCharactersPrompt;
var upperCasePrompt;
var lowerCasePrompt;
var numericPrompt;
var count = 0;
var password = "";

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", function myFunction() {
  writePassword();
});

function generatePassword() {
  lengthPrompt = prompt("How many characters?");
  if (lengthPrompt < 8) {
    alert("Password needs to have at least 8 characters");
  } else if (lengthPrompt > 128) {
    alert("Password needs to be less the 128 characters");
  }

  specialCharactersPrompt = confirm(
    "Would you like to include special characters?"
  );
  if (specialCharactersPrompt) {
    count++;
    var specialCharIndex = Math.floor(specialCharacters.length * Math.random());
    specialCharSelection = specialCharacters[specialCharIndex];
    password = password.concat(specialCharSelection);
    console.log(password);
  }

  numericPrompt = confirm("Would you like any numbers?");
  if (numericPrompt) {
    count++;
    var numericIndex = Math.floor(numeric.length * Math.random());
    numberSelection = numeric[numericIndex];
    password = password.concat(numberSelection);
    console.log(password);
  }

  upperCasePrompt = confirm("Would you like to include upper case letters?");
  if (upperCasePrompt) {
    count++;
    var upperCaseIndex = Math.floor(numeric.length * Math.random());
    upperCaseSelection = upperCase[upperCaseIndex];
    password = password.concat(upperCaseSelection);
    console.log(password);
  }

  lowerCasePrompt = confirm("Would you like to include lower case letters?");
  if (lowerCasePrompt) {
    count++;
    var lowerCaseIndex = Math.floor(numeric.length * Math.random());
    lowerCaseSelection = lowerCase[lowerCaseIndex];
    password = password.concat(lowerCaseSelection);
    console.log(password);
  }

  if (
    !specialCharactersPrompt &&
    !numericPrompt &&
    !upperCasePrompt &&
    !lowerCasePrompt
  ) {
    alert(
      "You must select at least one of the following: Special Characters, Numeric Characters, Upper Case Characters, or Lower Case Characters"
    );
    return "Please Retry Generating a Password";
  }

  return fillRestOfPassword();
}

function fillRestOfPassword() {
  console.log(count);
  var numberOfCharactersNeeded = lengthPrompt - count;
  var characterArray = [];
  if (specialCharactersPrompt) {
    characterArray = characterArray.concat(specialCharacters);
  }
  if (numericPrompt) {
    characterArray = characterArray.concat(numeric);
  }
  if (upperCasePrompt) {
    characterArray = characterArray.concat(upperCase);
  }
  if (lowerCasePrompt) {
    characterArray = characterArray.concat(lowerCase);
  }

  for (i = 0; i < numberOfCharactersNeeded; i++) {
    var randomIndex = Math.floor(characterArray.length * Math.random());
    var randomCharacter = characterArray[randomIndex];
    password = password.concat(randomCharacter);
    console.log(password);
  }
  return password;
}
