//Will simply convert a single letter/number to morse code
export class singleLettersAndNumbersToMorse {
  constructor(letterOrNumber) {
    this.letterOrNumber = letterOrNumber.toString().toLowerCase(); //converts valid input to string and lowercase (if not already)
  }

  //Used regex & string length to verify that only 1 letter, number, comma, fullstop, exclamation or question-mark is inputted
  get isLetterOrNumber() {
    const input = this.letterOrNumber;
    if (input.length != 1 || !input.match(/[a-z0-9!.,?]/g)) return false;
    return true;
  }

  //Will now make a getter which when supplied a letter/number/symbol validated by isLetterOrNumber, will return a single morse code using switch cases/or objects
  get getSingleMorseCode() {
    const morseCodeDictionary = {
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

    if (!this.isLetterOrNumber) return null;
    return morseCodeDictionary[this.letterOrNumber];
  }
}
