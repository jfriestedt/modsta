import Keys from './keys';

class Chord {
  constructor (chordName, index, parentChord, numeral, quality, callbacks) {
    this.chordName = chordName;
    this.index = index;
    this.parentChord = parentChord;
    this.numeral = numeral;
    this.quality = quality;
    this.callbacks = callbacks;
  }

  getPossibleKeys () {
    const possibleKeys = [];

    for (var key in Keys) {
      if (Keys.hasOwnProperty(key)) {
        if (Keys[key].includes(this.chordName) &&
            Keys[key].includes(this.parentChord.chordName)) {
          possibleKeys.push(key);
        }
      }
    }

    return possibleKeys;
  }
  
}
