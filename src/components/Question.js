// src/components/Question.js
import React from 'react';
import './Question.css';

const Question = ({ question, answer, onAnswerChange }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAnswerChange(e.target.value);
    }
  };

  return (
    <div className="question-container">
      <h3>{question.text}</h3>
      <input
        type="text"
        //value={answer}
        //onKeyDown={handleKeyDown}
        //onChange={(e) => onAnswerChange(e.target.value)}
      />
    </div>
  );
};

export default Question;
