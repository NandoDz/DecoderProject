// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
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

  function substitution(input, alphabet, encode = true) {
    let indexOfOriginals = [];
    let results = [];

    if (!input || !alphabet) return false;
    // if the params dont meet expectations return false
    if (alphabet.length != 26) return false;

    // this is a check for repeating letters
    let letter = alphabet[0];
    let count = 0;
    for (let letters of alphabet) {
      if (letters == letter) {
        count++;
      }
    }
    if (count >= 2) return false;
    ////////////////////////////////////////
    //encode

    const code = input.toLowerCase();
    const size = code.length;

    if (encode == true) {
      for (let i = 0; i < size; i++) {
        if (code[i] == " ") indexOfOriginals.push(99); // code for space
        for (let j = 0; j < alpha.length; j++) {
          if (code.charAt(i) == alpha[j]) {
            indexOfOriginals.push(alpha.indexOf(alpha[j]));
          } // cycle through the input
        } // indentify the indices of the letters in the regular alphabet
      } // construct an array of the indices
    }

    if (encode == false) {
      for (let i = 0; i < size; i++) {
        if (code[i] == " ") indexOfOriginals.push(99); // code for space
        for (let j = 0; j < alphabet.length; j++) {
          if (code.charAt(i) == alphabet[j]) {
            indexOfOriginals.push(alphabet.indexOf(alpha[j]));
          } // cycle through the input
        } // indentify the indices of the letters in the coded alphabet
      } // construct an array of the indices
    }

    console.log(indexOfOriginals); // array of indices

    for (let value of indexOfOriginals) {
      if (value == 99) {
        results.push(" ");
        continue; // if your coded message had a space this
        //  will handle the case and move on to the next value
      }
      let index = value;
      results.push(alphabet[index]); //push the correct letter to results
    }

    let newString = "";
    for (let letters of results) {
      newString += letters;
    }
    console.log(input);
    console.log(code);
    console.log(alphabet);
    return newString;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
