import React from 'react';
import License from './License';
import ProgressBar from './ProgressBar';

function StepContent({ step, onQuestionAnswered }) {
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
          <License onQuestionAnswered={onQuestionAnswered} />
        </>
      );
    case 3:
      return (
        <>
          <h2>Step 3: Installation</h2>
          <p>The installation process is in progress. Please wait...</p>
          <ProgressBar />
		  <p> .</p>
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