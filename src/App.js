import React, { useState } from 'react';
import './App.css';

const LOCKER_CODE = "DORM-BOX-8921";

const DIALOGUE_SEQUENCE = [
  { character: "BATMAN", text: "Yes you might be wondering what this is , but its sort of early commemoration related to you, well assuming you're not here in august , so bruce wayne here has decided to pick suitable gifts for a goofy but an admirable to be dentist like yourself", sprite:process.env.PUBLIC_URL + "/63-638700_batman-the-animated-series.png" },
  { character: "ROBIN", text: "thats out of the script ,wtf , its meant to be a birthday gift , try again bruce ~~ , I mean Batman", sprite:process.env.PUBLIC_URL + "/robin-batman-nightwing-superhero-superhero-robin-png-picture-adfd21ac9551dcd80d63942004f37e10.png" },
  { character: "BATMAN", text: "Ahem okay okay , so thank you for being a peak buddy so far , and although your birthday might be something far off , id want to say happy 27th birthday in advance :))) ", sprite: process.env.PUBLIC_URL + "/batman-the-man-who-laughs-joker-internet-meme-batman-7e1b1dfeb20fc4a4ab87b1071ec7e9aa.png" },
  { character: "ROBIN", text: "Anyways tell her whats up next , what do we do now , omg you suck", sprite:process.env.PUBLIC_URL + "/robin-batman-nightwing-superhero-superhero-robin-png-picture-adfd21ac9551dcd80d63942004f37e10.png" },
{ character: "BATMAN", text: "Pipe tf down Robin , Anyways jit , you would have to head downstairs or wherever you are when you'd read this to the amazon locker with the code that is shown next when you click continue , and you will get your stuff, if theres any issues contact the big man himself you have his phone number too , have a good one", sprite:process.env.PUBLIC_URL + "/63-638700_batman-the-animated-series.png" }];

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
        <div className="reveal-frame">
          <h1 className="success-text system-boot">DECRYPTION COMPLETE</h1>
          <div className="code-box scramble-effect">
            <p>PACKAGE LOCATION ID:</p>
            <h2 className="final-code">{LOCKER_CODE}</h2>
          </div>
          <p className="footer-text system-boot">PROTOCOL TERMINATED</p>
        </div>
        )}
    </div>
  );
} 

export default App;