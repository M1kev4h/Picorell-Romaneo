import './Microphone.css';
import { microphonesvg } from './microphonesvg';
import { useState, useEffect } from 'react';
import { createRecognition } from '../../MicrophoneLogic/Microphone';

export const Microphone = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const recog = createRecognition();
    setRecognition(recog);
  }, []);

  const handleClick = () => {
    if (!recognition) return;
    if (isListening) recognition.stop();
    else recognition.start();

    setIsListening(!isListening);
  };

  return (
    <button
      id="btnMicrophone"
      className={`round-btn ${isListening ? 'active' : ''}`}
      onClick={handleClick}
    >
      {microphonesvg()}
    </button>
  );
};

