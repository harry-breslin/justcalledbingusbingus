import React from 'react';

function FooterButtons({ swap, nextStep, prevStep, step, handleMouseEnter }) {
  const backButtonContent = (
    <button
      className="button left-button"
      onClick={prevStep}
      disabled={step === 1}
      onMouseEnter={handleMouseEnter}
    >
      Back
    </button>
  );

  const nextButtonContent = (
    <button
      className="button primary right-button"
      onClick={nextStep}
      onMouseEnter={handleMouseEnter}
    >
      {step === 4 ? 'Finish' : 'Next'}
    </button>
  );

  return (
    <>
      <div className="button-container">
        {swap ? nextButtonContent : backButtonContent}
      </div>
      <div className="button-container">
        {swap ? backButtonContent : nextButtonContent}
      </div>
    </>
  );
}

export default FooterButtons;