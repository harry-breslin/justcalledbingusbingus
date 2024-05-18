import React, { useState } from 'react';

function License({ onQuestionAnswered }) {
  const [accepted, setAccepted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleAnswerChange = (value) => {
    if (value === 'answer1') {
        alert('Correct 😃');
        onQuestionAnswered(); /* correct answer so enable Next button */
      } else if (value === 'question') {
        alert('That\'s the question bro 😐');
      } else {
        alert('Incorrect 😡');
      }
  };

  return (
    <div>
      <textarea className="license-text" readOnly>
        [Insert License Agreement Here]
      </textarea>
      <div className="license-buttons">
        <button className="button primary license-button" onClick={() => setAccepted(true)}>Accept License</button>
        {accepted && <button className="button primary license-button" onClick={() => setConfirmed(true)}>Are you sure?</button>}
        {confirmed &&
            <select onChange={(e) => handleAnswerChange(e.target.value)}>
                <option value="question">Select an answer</option>
                <option value="answer1">Answer 1</option>
                <option value="answer2">Answer 2</option>
                <option value="answer3">Answer 3</option>
            </select>
        }
      </div>
    </div>
  );
}

export default License;