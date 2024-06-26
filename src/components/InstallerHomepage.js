import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InstallerHomepage.css';
import FooterButtons from './FooterButtons';
import StepContent from './StepContent';
import licenseAudio from './license_tts.mp3';

function InstallerHomepage() {
    const navigate = useNavigate();
    
    const [step, setStep] = useState(1);
    const [swap, setSwap] = useState(false);
    const [finalQuestionAnswered, setQuestionAnswered] = useState(false);
    const [swappingEnabled, setSwappingEnabled] = useState(false);
    
    useEffect(() => {
        if (step === 2) {
            setQuestionAnswered(false);
            const audio = new Audio(licenseAudio);
            audio.play();
        }
    }, [step]);

    const handleQuestionAnswered = () => {
      setQuestionAnswered(true);
      setSwappingEnabled(true); /* permanently lol */
    };

    function generateRandomString(length) {
        var randomString = '';
        for (let i = 0; i < length; i++) {
          randomString += Math.random().toString(36).substring(2, 10);
        }
        return randomString;
      }

  const nextStep = () => {
    if (step === 3) {
      //for (let i = 0; i < 5; i++) {
      //  alert(`ERROR: ${generateRandomString(30)}`);
      //}
	  alert(`ERROR: The installation was not completed!`);
	  alert(`The installation must now be restarted.`);
	  alert(`Press OK to restart.`);
    }

    if (step < 4) {
      setStep(step + 1);
    } else { /* finish button clicked */
      for (let i = 0; i < 5; i++) {
        alert(`Press the OK button to navigate to the feedback form` + `.`.repeat(i));
      }
      navigate('/feedback-form'); /* navigate to feedback form page */
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleMouseEnter = () => {
    if (swappingEnabled) {
        setSwap(!swap);
    }
  };

  return (
    <div className="container installer-homepage">
      <header className="header">
        <h1>Welcome to the Installation Wizard</h1>
      </header>
      <main className="main-content">
        <div className="step-indicator">
          <div className={`step ${step === 1 ? 'active' : ''}`}>1. Welcome</div>
          <div className={`step ${step === 2 ? 'active' : ''}`}>2. License Agreement</div>
          <div className={`step ${step === 3 ? 'active' : ''}`}>3. Installation</div>
          <div className={`step ${step === 4 ? 'active' : ''}`}>4. Completion</div>
        </div>
        <div className="content">
          <StepContent step={step} onQuestionAnswered={handleQuestionAnswered} />
        </div>
      </main>
      <footer className="footer">
        <FooterButtons swap={swap} nextStep={nextStep} prevStep={prevStep} step={step} handleMouseEnter={handleMouseEnter} finalQuestionAnswered={finalQuestionAnswered} />
      </footer>
    </div>
  );
}

export default InstallerHomepage;
