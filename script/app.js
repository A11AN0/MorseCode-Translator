/*Will simply convert a single letter/number to morse code, OR vice versa, iT cAn dO bOtH */
export class singleCharacterConverter {
  constructor(character) {
    this.character = character.toString().toLowerCase();
    this.morseCodeDictionary = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
      1: ".----",
      2: "..---",
      3: "...--",
      4: "....-",
      5: ".....",
      6: "-....",
      7: "--...",
      8: "---..",
      9: "----.",
      0: "-----",
      ".": ".-.-.-",
      "?": "..--..",
      "!": "-.-.--",
      ",": ".-.-.-",
      " ": "/",
    };
  }

  /* Much easier to use an array of object keys to see if a letter input for conversion, 
  is within the morseCodeDictionary */
  get isLetterOrNumber() {
    const input = this.character;
    return Object.keys(this.morseCodeDictionary).includes(input);
  }

  /* Will now make a getter which when supplied a letter/number/symbol validated by 
  isLetterOrNumber, will return a single morse code using switch cases/or objects */
  get getSingleMorseCode() {
    const input = this.character;
    if (this.isLetterOrNumber) return this.morseCodeDictionary[input];
    return "";
  }

  /*This getter will now check to see if the morse code input is valid, and can be converted*/
  get isMorseCode() {
    const input = this.character;
    return Object.values(this.morseCodeDictionary).includes(input);
  }

  /*This will return the letter/key which matches the inputted morse code, if it is valid */
  get getSingleLetterOrNumber() {
    const input = this.character;
    const keyArray = Object.keys(this.morseCodeDictionary);
    const valueArray = Object.values(this.morseCodeDictionary);
    const keyIndex = valueArray.indexOf(input);
    if (this.isMorseCode) return keyArray[keyIndex];
    return "";
  }
}

/* A translator class which will convert a sentence of valid symbols/morse code
To run jest tests, from this directory just use the command npm test app.test.js :)  */
export class translator {
  constructor(
    sentence /*Will read from the input box each time and keep updating */
  ) {
    this.sentence = sentence;
  }

  get getToMorse() {
    const alphabetArray = this.sentence.split("");
    return alphabetArray
      .map((letter) => new singleCharacterConverter(letter).getSingleMorseCode)
      .filter((entry) => entry.trim() != "")
      .join(" ");
  }

  /*in order to convert morse code, the input should have a blank space between every morse code in a word, 
  however spaces between words are represented by the forward /, e.g. '. .. ...' = '123' but '1 / 2 / 3' = '1 2 3' */
  get getToAlphabet() {
    const morseArray = this.sentence.split(" ");
    return morseArray
      .map((code) => new singleCharacterConverter(code).getSingleLetterOrNumber)
      .join("");
  }
}
