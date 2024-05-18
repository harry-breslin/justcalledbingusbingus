import React, { useState } from 'react';
import './InstallerHomepage.css';

function InstallerHomepage() {
  const [step, setStep] = useState(1);
  const [swap, setSwap] = useState(false);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
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

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Step 1: Welcome</h2>
            <p>Thank you for choosing our software. Click "Next" to continue with the installation process.</p>
          </>
        );
      case 2:
        return (
          <>
            <h2>Step 2: License Agreement</h2>
            <p>Please read and accept the license agreement to proceed.</p>
            <textarea className="license-text" readOnly>
              [Insert License Agreement Here]
            </textarea>
          </>
        );
      case 3:
        return (
          <>
            <h2>Step 3: Installation</h2>
            <p>The installation process is in progress. Please wait...</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2>Step 4: Completion</h2>
            <p>The installation is complete. Click "Finish" to exit the installer.</p>
          </>
        );
      default:
        return null;
    }
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
          {renderContent()}
        </div>
      </main>
      <footer className="footer">
        {swap ? (
          <>
            <div className="button-container" onMouseEnter={handleMouseEnter}>
              <button
                className="button left-button"
                onClick={prevStep}
                disabled={step === 1}
              >
                Back
              </button>
            </div>
            <div className="button-container" onMouseEnter={handleMouseEnter}>
              <button
                className="button primary right-button"
                onClick={nextStep}
              >
                {step === 4 ? 'Finish' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="button-container" onMouseEnter={handleMouseEnter}>
              <button
                className="button primary right-button"
                onClick={nextStep}
              >
                {step === 4 ? 'Finish' : 'Next'}
              </button>
            </div>
            <div className="button-container" onMouseEnter={handleMouseEnter}>
              <button
                className="button left-button"
                onClick={prevStep}
                disabled={step === 1}
              >
                Back
              </button>
            </div>
          </>
        )}
      </footer>
    </div>
  );
}

export default InstallerHomepage;
