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
  }
}
