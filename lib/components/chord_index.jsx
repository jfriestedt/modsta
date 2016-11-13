import React from 'react';

const Chord = ({ chordName, clickChord, parent }) => {
  let branchToChild = parent ? "branch" : ""
  return(
    <div className="chord-item-container">
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
             changedKey={chord.key !== chord.parentChord.key}
             key={i}/>)
  });

  return(
    <div className="chord-index">
      {chords}
    </div>
  );
};

export default ChordIndex;
