// Assignment code here
function generatePassword() {

  //Collecting userInut for desired password length
    let userInput = window.prompt("Please enter the desired length of the password. Only input a number between 8 - 128");
    console.log(userInput);

    for (let i = 0; i < userInput.length; i++){
      if ((userInput >= 8) && (userInput <= 128)){
      
      }else{
        window.alert("Please input a number between 8 - 128.");
        generatePassword();
      }
    };

    characterOption1();
    characterOption2();
    characterOption3();
    
    var charOption1;
    var charOption2;
    var charOption3;
    var pwresult = "";

    //Collecting userInut for special characters option
    function characterOption1() {
      charOption1 = window.prompt("Do you want to include special characters? Input yes or no");
    
          switch (charOption1) {
            case "yes" || "Yes":
              break;
            case "no" || "No":
              break;
            default :
            window.alert("Please only input yes or no");
            characterOption1();
          }
          return charOption1;
        };
        
    //Collecting userInut for upper case & lowercase characters option
    function characterOption2() {
      charOption2 = window.prompt("Do you want to include upper case & lowercase characters? Input yes or no");
          
          switch (charOption2) {
            case "yes" || "Yes":
              break;
            case "no" || "No":
              break;
            default :
            window.alert("Please only input yes or no");
            characterOption2();
          }
          return charOption2;
    };
    
    //Collecting userInut for numeric characters option
    function characterOption3() {
      charOption3 = window.prompt("Do you want to include numeric characters? Input yes or no");
          
          switch (charOption3) {
            case "yes" || "Yes":
              break;
            case "no" || "No":
              break;
            default :
            window.alert("Please only input yes or no");
            characterOption3();
          }
          return charOption3;
        };

        function requestedPassword() {
          let userNum = parseInt(userInput);

            // Yes to special, upper & lower, and numeric
          if ((charOption1 === ("yes" || "Yes")) && (charOption2 === ("yes" || "Yes")) && (charOption3 === ("yes" || "Yes"))){
            var chars1 = "5127693804lgmindopkqrcstuhvfawxeyjz!@#$%^&*()ELMCNIODPQFRASKTJUVHWXGYBZ";
            for (var i = 0; i <= userNum-1; i++){
              var randomNumber1 = Math.floor(Math.random() * chars1.length);
              return pwresult += chars1.substring(randomNumber1, randomNumber1 +userNum);
             };

            // Yes to special
          } else if ((charOption1 === ("yes" || "Yes")) && (charOption2 === ("no" || "No")) &&  (charOption3 === ("no" || "No"))) {
            var chars2 = "!@#$%^&*()";
            for (let i = 0; i <= userNum-1; i++){
              var randomNumber2 = Math.floor(Math.random() * chars2.length);
              return pwresult += chars2.substring(randomNumber2, randomNumber2 +userNum);
             };

            // Yes to upper & lower
          }else if ((charOption1 === ("no" || "No")) && (charOption2 === ("yes" || "Yes")) &&  (charOption3 === ("no" || "No"))) {
            var chars3 = "lgmindopkqrcstuhvfawxeyjzELMCNIODPQFRASKTJUVHWXGYBZ";
            for (let i = 0; i <= userNum-1; i++){
              var randomNumber3 = Math.floor(Math.random() * chars3.length);
              return pwresult += chars3.substring(randomNumber3, randomNumber3 +userNum);
             };
            
            // Yes to numeric
          }else if ((charOption1 === ("no" || "No")) && (charOption2 === ("no" || "No")) &&  (charOption3 === ("yes" || "Yes"))) {
            var chars4 = "5127693804";
            for (let i = 0; i <= userNum-1; i++){
              var randomNumber4 = Math.floor(Math.random() * chars4.length);
              return pwresult += chars4.substring(randomNumber4, randomNumber4 +userNum);
             };

            // Yes to special, and upper & lower
          } else if ((charOption1 === ("yes" || "Yes")) && (charOption2 === ("yes" || "Yes")) &&  (charOption3 === ("no" || "No"))) {
            var chars5 = "lgmindopkqrcstuhvfawxeyjzELMCNIODPQFRASKTJUVHWXGYBZ!@#$%^&*()";
            for (let i = 0; i <= userNum-1; i++){
              var randomNumber5 = Math.floor(Math.random() * chars5.length);
              return pwresult += chars5.substring(randomNumber5, randomNumber5 +userNum);
             };

            // Yes to special and numeric
          } else if ((charOption1 === ("yes" || "Yes")) && (charOption2 === ("no" || "No")) &&  (charOption3 === ("yes" || "Yes"))) {
            var chars6 = "5127693804!@#$%^&*()";
            for (let i = 0; i <= userNum-1; i++){
              var randomNumber6 = Math.floor(Math.random() * chars6.length);
              return pwresult += chars6.substring(randomNumber6, randomNumber6 +userNum);
             };

            // Yes to upper & lower and numeric
          } else if ( (charOption1 === ("no" || "No")) && (charOption2 === ("yes" || "Yes")) &&  (charOption3 === ("yes" || "Yes"))){
            var chars7 = "5127693804lgmindopkqrcstuhvfawxeyjzELMCNIODPQFRASKTJUVHWXGYBZ";
            for (let i = 0; i <= userNum-1; i++){
              var randomNumber7 = Math.floor(Math.random() * chars7.length);
              return pwresult += chars7.substring(randomNumber7, randomNumber7 +userNum);
             };

            // No to all
          }else {
             
            let result = window.confirm("you have not selected any specifications, would you like to try again and generate a random password? Please only select yes or no.");
            
            switch (result) {
              case true:
                generatePassword();
                break;

              case false:
                window.alert("You have chosen not to generate a random password. Good Bye.");
                break;
            }
          }
        };
        
        return requestedPassword();
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
