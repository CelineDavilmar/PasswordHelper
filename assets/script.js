// Assignment code here
function generatePassword() {

  //Collecting userInut for desired password length
    let userInput = window.prompt("Please enter the desired length of the password. Only input a number between 8 - 128");

    for (let i = 0; i < userInput.length; i++){
      if ((userInput >= 8) && (userInput <= 128)){
      
      }else {

         window.alert("Please input a number between 8 - 128.");
         generatePassword();
      }
    }
    CharacterOption1();
    CharacterOption2();
    CharacterOption3();

    //Collecting userInut for special characters option
    function CharacterOption1() {
      let charOption1 = window.prompt("Do you want to include special characters? Input yes or no");
    
          switch (charOption1) {
            case "yes" || "Yes":
            window.alert("Okay will generate password that is " + userInput + " numbers long with special characters included");
              break;
            case "no" || "No":
            window.alert("Okay will not include special characters and will make the password " + userInput + " numbers long");
              break;
            default :
            window.alert("Please only input yes or no");
            CharacterOption1();
          }
        };
    
    //Collecting userInut for upper case & lowercase characters option
    function CharacterOption2() {
      let charOption2 = window.prompt("Do you want to include upper case & lowercase characters? Input yes or no");
          
          switch (charOption2) {
            case "yes" || "Yes":
            window.alert("Okay will generate password that is " + userInput + " numbers long with upper case & lowercase characters included");
              break;
            case "no" || "No":
            window.alert("Okay will not include upper case & lowercase characters and will make the password " + userInput + " numbers long");
              break;
            default :
            window.alert("Please only input yes or no");
            CharacterOption2();
          }
    };

    //Collecting userInut for numeric characters option
    function CharacterOption3() {
      let charOption3 = window.prompt("Do you want to include numeric characters? Input yes or no");
          
          switch (charOption3) {
            case "yes" || "Yes":
            window.alert("Okay will generate password that is " + userInput + " numbers long with numeric characters included");
              break;
            case "no" || "No":
            window.alert("Okay will not include numeric characters and will make the password " + userInput + " numbers long");
              break;
            default :
            window.alert("Please only input yes or no");
            CharacterOption3();
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
