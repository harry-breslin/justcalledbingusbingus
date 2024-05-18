import React from 'react';
import './Summary.css';

const Summary = ({ answers }) => {
  // Convert the object into an array of question-answer pairs
  const answerPairs = Object.entries(answers);

  return (
    <div className="summary-container">
      <h2>Feedback Summary</h2>
      <div className="answer-scroll-container">
        <ul className="answer-list">
          {answerPairs.map(([questionId, { question, answer }]) => (
            <li key={questionId}>
              <strong>{question}</strong>: {answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Summary;
