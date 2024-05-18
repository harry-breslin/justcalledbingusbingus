import React, { useState, useEffect } from 'react';
import licenseText from './LicenseTextString.js';

function License({ onQuestionAnswered }) {
  const [accepted, setAccepted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setButtonEnabled(true);
    }
  }, [countdown]);

  const handleAnswerChange = (value) => {
    if (value === '10') {
        alert('Correct 😃');
        onQuestionAnswered(); /* correct answer so enable Next button */
      } else if (value === 'question') {
        alert('That\'s the question bro 😐');
      } else {
        alert('Incorrect 😡');
      }
  };

  const numbers = Array.from({length: 15}, (_, i) => i + 1);

  numbers.sort(() => Math.random() - 0.5);

  return (
    <div>
      <textarea className="license-text" readOnly value={licenseText} />
      <div className="license-buttons">
        <button className="button primary license-button" disabled={!buttonEnabled} onClick={() => setAccepted(true)}>
          {buttonEnabled ? 'Accept License' : `Accept License (${countdown})`}
        </button>
        {accepted && <button className="button primary license-button" onClick={() => setConfirmed(true)}>Are you sure?</button>}
        {confirmed &&
            <select onChange={(e) => handleAnswerChange(e.target.value)}>
                <option value="question">How many clauses of the license agreement are there?</option>
                {numbers.map((number) => 
                  <option key={number} value={number}>{number}</option>
                )}
            </select>
        }
      </div>
    </div>
  );
}

export default License;