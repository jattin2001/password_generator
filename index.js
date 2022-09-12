const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordEl1 = document.getElementById("password-el1");
const passwordEl2 = document.getElementById("password-el2");
const passwordLengthEl = document.getElementById("passwordLength");
const symbolEl = document.getElementById("symbols");
const numbersEl = document.getElementById("numbers");
const mixedArray = characters.filter((char) => char);
const numbersLessArray = characters.filter((char) => !(char >= 0 && char <= 9));
const symbolsLessArray = characters.filter(() => characters.splice(62));
const symAndNumLessArray = characters.filter(() => characters.splice(52));

let passwordLength = passwordLengthEl.value;

passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;

});


function lengthCheck() {
  if (passwordLength > 32 || passwordLength < 6) {
      passwordLengthEl.value = 8
      passwordLength = 8
    alert("password must be between 6 and 32");
  }
};


function copyDivToClipboard(passwordId) {
  var range = document.createRange();
  range.selectNode(document.getElementById(passwordId));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  alert("Copied the text: " + document.getElementById(passwordId).textContent);
  window.getSelection().removeAllRanges();// to deselect
}





function generatePassword() {
  let passwordArray1 = [];
  let passwordArray2 = [];
  passwordEl1.textContent = "";
  passwordEl2.textContent = "";

  for (let i = 0; i < passwordLength; i++) {
    if (numbersEl.checked === false && symbolEl.checked === true) {
      const randomNum1 = Math.floor(Math.random() * numbersLessArray.length);
      const randomNum2 = Math.floor(Math.random() * numbersLessArray.length);
      passwordArray1.push(numbersLessArray[randomNum1]);
      passwordArray2.push(numbersLessArray[randomNum2]);
    } else if (symbolEl.checked === false && numbersEl.checked === true) {
      const randomNum1 = Math.floor(Math.random() * symbolsLessArray.length);
      const randomNum2 = Math.floor(Math.random() * symbolsLessArray.length);
      passwordArray1.push(symbolsLessArray[randomNum1]);
      passwordArray2.push(symbolsLessArray[randomNum2]);
    } else if (symbolEl.checked === false && numbersEl.checked === false) {
      const randomNum1 = Math.floor(Math.random() * symAndNumLessArray.length);
      const randomNum2 = Math.floor(Math.random() * symAndNumLessArray.length);
      passwordArray1.push(symAndNumLessArray[randomNum1]);
      passwordArray2.push(symAndNumLessArray[randomNum2]);
    } else if (symbolEl.checked === true && numbersEl.checked === true) {
      const randomNum1 = Math.floor(Math.random() * mixedArray.length);
      const randomNum2 = Math.floor(Math.random() * mixedArray.length);
      passwordArray1.push(mixedArray[randomNum1]);
      passwordArray2.push(mixedArray[randomNum2]);
    }
    passwordEl1.textContent += passwordArray1[i];
    passwordEl2.textContent += passwordArray2[i];
  }
}
