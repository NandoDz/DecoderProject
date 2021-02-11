// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    

    const alpha = [// regular alphabet
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
    const places = [ // this is the polybius sqaure represented as a single array.
      11,
      21,
      31,
      41,
      51,
      12,
      22,
      32,
      42,
      42,
      52,
      13,
      23,
      33,
      43,
      53,
      14,
      24,
      34,
      44,
      54,
      15,
      25,
      35,
      45,
      55,
    ];
    let results = []; // array to push a letter's 'place' in the polyibus square

    const code = input.toString().toLowerCase(); // to account for capital letters format all inputs into lowercased strings
    const size = code.length;

    if (encode == true) { // Encoding
      for (let i = 0; i < size; i++) { // cycle through every letter from input
        if (code[i] == " ") {
          results.push(" "); // push any spaces into the results array to account for spaces
        }
        for (let j = 0; j < alpha.length; j++) { // cycle through every letter in the alphabet to find the correspoding index
          if (code[i] == alpha[j]) {
            results.push(places[j]); // push from places array the index to results
          }
        }
      }
      console.log(results);

      let newString = "";
      for (let letters of results) {
        newString += letters;
      } // formatting output 

      return newString; //output 
    }

    let list = [];// an empty array needed for decoding 

    if (encode == false) { // decoding 

      let odd = input.split(" ").join(""); // removing spaces formatting input 
      if (odd.length % 2 != 0) {
        return false; // making sure the input is not odd 
      }
      
      for (let i = 0; i < size; i++) { // cycle through the input, incrementing i once
        if (code[i] == " ") {
          results.push(" "); // push any spaces 
          i++; // increment i to move on to number 
        }
        let num = code[i] + code[i + 1]; // make a pair of numbers
        results.push([num]); // push pair 
        i++;  // increment i to move on to next pair of numbers
      }

      

      for (let i = 0; i < results.length; i++) { // cycle through the array of number pairs
        if (results[i] == " ") {
          list.push(99); // push into list the code for a space
        }
        if(results[i] == 42){
          list.push(8);
          continue;
        }
        for (let j = 0; j < places.length; j++) {
          if (results[i] == places[j]) { // the number pair matches the code at the j index 
            list.push(places.indexOf(places[j]));
          }
        }
      }
      console.log(input)
      console.log(results)
      console.log(list)
      
      let words = "";
      for (let index of list) {
        if (index == 99) {
          words += " ";
          continue;
        }
        if (alpha[index] == "i") {
          words += "(i/j)";
          continue;
        } else {
          words += alpha[index];
        }
      }
      return words;
    }



    }
    
   

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
