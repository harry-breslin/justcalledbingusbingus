import React from 'react';
import './Summary.css';

const Summary = ({ answers }) => {
  // Convert the object into an array of question-answer pairs
  const answerPairs = Object.entries(answers);

  return (
    <div className="summary-container">
      <h2>Feedback Summary</h2>
      <ul>
        {answerPairs.map(([questionId, { question, answer }]) => (
          <li key={questionId}>
            <strong>{question}</strong><br></br>{answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
