import React from 'react';

function StepContent({ step }) {
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
}

export default StepContent;