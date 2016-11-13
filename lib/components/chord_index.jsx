import React from 'react';

const Chord = ({ chordName, clickChord }) => {
  return(
    <div onClick={clickChord} className="chord-item">
      {chordName}
    </div>
  )
};

const ChordIndex = ({ sequence, clickChord }) => {
  const chords = sequence.map ((chord, i) => {
    return (<Chord chordName={chord.chordName} clickChord={clickChord} key={i}/>)
  });

  return(
    <div className="chord-index">
      {chords}
    </div>
  );
};

export default ChordIndex;
