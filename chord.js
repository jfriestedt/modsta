import Keys from './keys';
import Cadences from './cadences';

class Chord {
  constructor (chordName, index, parentChord, numeral, quality, key, callbacks) {
    this.chordName = chordName;
    this.index = index;
    this.parentChord = parentChord;
    this.numeral = numeral;
    this.quality = quality;
    this.callbacks = callbacks;
    this.key = key;
  }
  
  generateChildren() {
    let children = [];
    // let parentKey = this.parentChord ? this.parentChord.key : null;
    let isPivot;
    let keys = this.getPossibleKeys();
    for (let i = 0; i < keys.length; i++){
      let key = keys[i];
      let scale = Keys[key];
      let numeral = scale.indexOf(this.chordName) + 1;
      let childrenNumerals = Cadences[numeral];
      for (let i = 0; i < childrenNumerals.length; i++){
        let childNumeral = childrenNumerals[i];
        let childChordName = scale[childNumeral - 1];
        let index = this.index + 1;
        let quality = childChordName.toLowerCase() === childChordName ? "minor" : "major";
        let child = new Chord(childChordName, index, this, childNumeral, quality, key, []);
        children.push(child);
      }
    }
    return children;
  }

  getPossibleKeys () {
    const possibleKeys = [];

    if (this.parentChord) {
      for (var key in Keys) {
        if (Keys.hasOwnProperty(key)) {
          if (Keys[key].includes(this.chordName) &&
          Keys[key].includes(this.parentChord.chordName)) {
            possibleKeys.push(key);
          }
        }
      }
      return possibleKeys;
    } else {
      return [this.key];
    }
  }
  
  
  
}

window.Chord = Chord;
window.Keys = Keys;
