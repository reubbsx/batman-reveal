import React, { useState } from 'react';
import './App.css';

const LOCKER_CODE = "DORM-BOX-8921";

const DIALOGUE_SEQUENCE = [
  { character: "BATMAN", text: "The encrypted channel is secure.", sprite: "/63-638700_batman-the-animated-series.png" },
  { character: "ROBIN", text: "I've bypassed the dorm security grid. The package is isolated.", sprite: "/robin-batman-nightwing-superhero-superhero-robin-png-picture-adfd21ac9551dcd80d63942004f37e10.png" },
  { character: "BATMAN", text: "Good. Listen closely. We are transmitting the decryption key now.", sprite: "/batman-the-man-who-laughs-joker-internet-meme-batman-7e1b1dfeb20fc4a4ab87b1071ec7e9aa.png" }
];

function App() {
  const [status, setStatus] = useState('LOCKED'); 
  const [dialogueIndex, setDialogueIndex] = useState(0);

  const initiateSequence = () => setStatus('DIALOGUE');

  const advanceDialogue = () => {
    if (dialogueIndex < DIALOGUE_SEQUENCE.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    } else {
      setStatus('REVEALED');
    }
  };

  return (
    <div className="bat-terminal">
      <div className="scan-line"></div>
      
      {status === 'LOCKED' && (
        <div className="center-frame">
          <h1 className="glitch-text">WAYNETECH SECURE COMMS</h1>
          <button className="decrypt-btn" onClick={initiateSequence}>
            [ DECRYPT MESSAGE ]
          </button>
        </div>
      )}

      {status === 'DIALOGUE' && (
        <div className="visual-novel-frame" onClick={advanceDialogue}>
          <img 
            src={DIALOGUE_SEQUENCE[dialogueIndex].sprite} 
            alt="character" 
            className="character-sprite"
          />
          <div className="dialogue-box">
            <div className="character-name">{DIALOGUE_SEQUENCE[dialogueIndex].character}</div>
            <div className="character-text">{DIALOGUE_SEQUENCE[dialogueIndex].text}</div>
            <div className="continue-prompt">Click to continue...</div>
          </div>
        </div>
      )}

      {status === 'REVEALED' && (
        <div className="center-frame">
          <h1 className="success-text">DECRYPTION COMPLETE</h1>
          <div className="code-box">
            <h2>{LOCKER_CODE}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;