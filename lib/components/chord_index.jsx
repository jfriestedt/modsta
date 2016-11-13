import React from 'react';
import { sample } from 'lodash';

const Chord = ({ chordName, clickChord, parent, keyChanged }) => {
  const colors = ["tomato", "lightblue", "darkgreen", "lightgray", "pink", "yellow", "purple"];
  let branchToChild = parent ? "branch" : "";
  let newColor = "tomato";
  if(keyChanged) {
    newColor = sample(colors);
  }

  return(
    <div className="chord-item-container" style={{color: newColor}}>
      <div className={branchToChild}></div>
      <div onClick={clickChord} className="chord-item">
        {chordName}
      </div>
    </div>
  )
};

const ChordIndex = ({ sequence, clickChord }) => {
  const chords = sequence.map ((chord, i) => {
    return (
      <Chord chordName={chord.chordName}
             clickChord={clickChord}
             parent={chord.parentChord}
             keyChanged={chord.parentChord ? chord.key !== chord.parentChord.key : false}
             key={i}/>
    )
  });

  return(
    <div className="chord-index">
      {chords}
    </div>
  );
};

export default ChordIndex;
