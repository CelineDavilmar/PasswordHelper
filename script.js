// Assignment code here

  //userChoices();


function generatePassword() {
  //Collecting userInut
    let userInput = window.prompt("Please enter the desired length of the password. Only input a number between 8 - 128");

    for (let i = 0; i < userInput.length; i++){
      if ((userInput >= 8) && (userInput <= 128)){
      
      }else {

         window.alert("Please input a number between 8 - 128.");
         generatePassword();
      }
    }
    CharacterOption();

    function CharacterOption() {
    let charOption = window.prompt("Do you want to include special characters? Input yes or no");
    
          switch (charOption) {
            case "yes" || "Yes":
            window.alert("Okay will generate password that is " + userInput + " numbers long with special characters included");
              break;
            case "no" || "No":
            window.alert("Okay will not include special characters and will make the password " + userInput + " numbers long");
              break;
            default :
            window.alert("Please only input yes or no");
            CharacterOption();
          }
        };

          for (let i = 0; i < userInput; i++){
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
          };
  
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
