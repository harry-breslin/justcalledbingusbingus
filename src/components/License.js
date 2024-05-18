import React, { useState } from 'react';

function License({ onQuestionAnswered }) {
  const [accepted, setAccepted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  return (
    <div>
      <textarea className="license-text" readOnly>
        [Insert License Agreement Here]
      </textarea>
      {!accepted && <button onClick={() => setAccepted(true)}>Accept Terms and Conditions</button>}
      {accepted && !confirmed && <button onClick={() => setConfirmed(true)}>Did you really?</button>}
      {confirmed && !questionAnswered && <button onClick={() => setQuestionAnswered(true)}>Question about the license</button>}
      {questionAnswered && <button onClick={onQuestionAnswered}>Next</button>}
    </div>
  );
}

export default License;