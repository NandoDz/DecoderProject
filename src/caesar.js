// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift == 0 || shift < -25 || shift > 25) {
      return false;
    }
    const alpha = [
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
    let results = [];

    const code = input.toLowerCase();
    const size = code.length;

    if (encode == false) {
      for (let i = 0; i < size; i++) {
        if (code[i] == " ") {
          results.push(" ");
          continue;
        }
        if (!alpha.includes(code[i])) {
          results.push(code[i]);
          continue;
        }
        for (let j = 0; j < alpha.length; j++) {
          if (code[i] == alpha[j]) {
            let change = j - shift;
            if (change < 0) {
              results.push(alpha[26 + change]);
            } else {
              results.push(alpha[change]);
            }
          }
        }
      }
    }

    if (encode == true) {
      for (let i = 0; i < size; i++) {
        if (code[i] == " ") {
          results.push(" ");
          continue;
        }
        if (!alpha.includes(code[i])) {
          results.push(code[i]);
          continue;
        }
        for (let j = 0; j < alpha.length; j++) {
          if (code[i] == alpha[j]) {
            let change = (j + shift) % 26;
            results.push(alpha[change]);
          }
        }
      }
    }
    let newString = "";
    for (let letters of results) {
      newString += letters;
    }
    return newString;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
