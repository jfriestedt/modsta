let ctx = new AudioContext();

const frequencies = {
  'c': 261.63,
  'db': 554.37,
  'd': 523.25,
  'eb': 622.25,
  'e': 659.25,
  'f': 698.46,
  'gb': 739.99,
  'g': 783.99,
  'ab':830.61,
  'a': 880.00,
  'bb': 932.33,
  'b': 987.77
};

let play = function(chords){
  for (let i = 0; i < chords.length; i++){
    let root = chords[i];
    let chordTones = [root];
    let noteNames = Object.keys(frequencies);
    let rootIdx = (noteNames.indexOf(root.toLowerCase()));
    let thirdIdx;
    
    if (root.toLowerCase() === root){
      //minor
      thirdIdx = (noteNames.indexOf(root) + 3) % 12;
    }
    else {
      thirdIdx = (rootIdx + 3 % 12);
    }
    let fifthIdx = (rootIdx + 7 % 12);
    
    chordTones.push(thirdIdx, fifthIdx);
  }
};
