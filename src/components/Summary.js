// src/components/Summary.js
import React from 'react';
import './Summary.css';

const Summary = ({ answers }) => {
  return (
    <div className="summary-container">
      <h2>Summary of your answers</h2>
      <ul>
        {Object.keys(answers).map((questionId) => (
          <li key={questionId}>
            Question {questionId}: {answers[questionId]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
