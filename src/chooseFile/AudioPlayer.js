import React, { useState } from 'react';

const AudioPlayer = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [audioRef, setAudioRef] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePlayPause = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <audio ref={(audio) => setAudioRef(audio)}controls>
            <source src={URL.createObjectURL(selectedFile)} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
