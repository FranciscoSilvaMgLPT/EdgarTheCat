import React, { useState } from 'react';

function Music() {
        const [muted, setMuted] = useState(false);
        const audioRef = React.useRef(null);
        const toggleMute = () => {
          const audio = audioRef.current;
          audio.muted = !muted;
          setMuted(!muted);
        };
      
  return (
    <div>
      <h2>Ca cat cacat cacat cacat!!  Catcat catcat!!</h2>
      <audio autoPlay ref={audioRef}>
        <source src="src/assets/cats.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <button onClick={toggleMute}>{muted ? '🔊' : '🔇'}</button>
    </div>
  );
}

export default Music;