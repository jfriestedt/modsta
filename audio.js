let ctx = new AudioContext();

const frequencies = {
  'c': 261.6,
  'db': 277.2,
  'd': 293.7,
  'eb': 311.1,
  'e': 329.6,
  'f': 349.2,
  'gb': 370.0,
  'g': 392.0,
  'ab': 415.3,
  'a': 440.0,
  'bb': 466.2,
  'b': 493.9
};

module.exports = {
  playChords: function(chords){
    let duration = 1;
    chords.forEach((chord, idx) => {
      setTimeout(() => {
        this.play(chord, duration);
      }, (duration * idx * 1000));
    });
  },
  play: function(chord, duration){
    let root = chord.toLowerCase();
    let chordTones = [root];
    let noteNames = Object.keys(frequencies);
    let rootIdx = (noteNames.indexOf(root.toLowerCase()));
    let third;
    
    if (chord.toLowerCase() === chord){
      //minor
      third = noteNames[(noteNames.indexOf(root) + 3) % 12];
    }
    else {
      third = noteNames[(noteNames.indexOf(root) + 4) % 12];
    }
    let fifth = noteNames[((rootIdx + 7) % 12)];
    chordTones.push(third, fifth);
    chordTones.forEach(function(tone){
      let osc = ctx.createOscillator();
      osc.frequency.value = frequencies[tone];
      osc.type = 'sawtooth';
      osc.start();
      osc.connect(ctx.destination);
      osc.stop(ctx.currentTime + 1);
    });
  }
};
  
