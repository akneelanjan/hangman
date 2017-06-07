import React from 'react';

let output;
let ouch = "Ouch! ";
const Hangman = (props) => {
  if(!props.incorrectPicks)
    output = "You have 6 tries!";
  if(props.incorrectPicks > 0)
    output = ouch.repeat(props.incorrectPicks);
  if(props.incorrectPicks > 5)
    output = "AWW, YOU KILLED ME!";
  return (
    <div className='hangman'>
      {output}
    </div>
  );
};

export default Hangman;
