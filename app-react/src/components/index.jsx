import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime/runtime'
import { FaMicrophoneAlt, FaStopCircle } from 'react-icons/fa';
import { AiOutlineClear } from 'react-icons/ai';
import { SiAudiomack } from 'react-icons/si';




const Dictaphone = ({ funTransferTextReviewtoParent, cildIsRecord }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (listening){
      cildIsRecord(true)
    }else{ cildIsRecord(false)}
  }, [listening]);
  
  useEffect(()=>{
    funTransferTextReviewtoParent(transcript)
  },[transcript, resetTranscript])
  

  if (!browserSupportsSpeechRecognition) {
    return <span>Браузер не поддерживает распознавание речи.</span>;
  }

  return (
    <div className='mb-2'>
      <p>{listening ? 'Прослушивание.........' : 'Надиктовать'}</p>

      {listening && <div className='box'>{transcript}</div>}
      {
        listening ? (
          <>
            <div className='button ml-2' onClick={SpeechRecognition.stopListening}><FaStopCircle color='red' size={22} /></div>
          </>
        ) : (
          <>
            <div className='button ml-2' onClick={() => {
              SpeechRecognition.startListening({ language: 'ru-Ru' }); 
              
            }}> <FaMicrophoneAlt size={20} color='green' /></div>
          </>
        )
      }
      <div className='button ml-2' onClick={resetTranscript}><AiOutlineClear color='blue' size={20} /><SiAudiomack color='red' /></div>
       
      
    </div>
  );
};
export default Dictaphone;