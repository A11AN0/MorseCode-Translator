//Will simply convert a single letter/number to morse code
export class LettersAndNumbersToMorse {
  constructor(letterOrNumber) {
    this.letterOrNumber = letterOrNumber;
  }

  //Used regex & string length to verify that only 1 letter, number, comma, fullstop, exclamation or question-mark is inputted
  get isLetterOrNumber() {
    const input = this.letterOrNumber.toString().toLowerCase();
    if (input.length != 1 || !input.match(/[a-z0-9!.,?]/g)) return false;
    return true;
  }
}
