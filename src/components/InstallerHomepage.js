import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InstallerHomepage.css';
import FooterButtons from './FooterButtons';
import StepContent from './StepContent';

function InstallerHomepage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [swap, setSwap] = useState(false);

  const nextStep = () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    alert(`Random string: ${randomString}`);
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate('/feedback-form'); /* navigate to feedback form page */
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleMouseEnter = () => {
    setSwap(!swap);
  };

  return (
    <div className="container">
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
          <StepContent step={step} />
        </div>
      </main>
      <footer className="footer">
        <FooterButtons swap={swap} nextStep={nextStep} prevStep={prevStep} step={step} handleMouseEnter={handleMouseEnter} />
      </footer>
    </div>
  );
}

export default InstallerHomepage;
