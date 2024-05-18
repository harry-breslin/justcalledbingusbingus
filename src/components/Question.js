// src/components/Question.js
import React from 'react';
import './Question.css';

const Question = ({ question, answer, onAnswerChange }) => {
  return (
    <div className="question-container">
      <h3>{question.text}</h3>
      <input
        type="text"
        value={answer}
        onChange={(e) => onAnswerChange(question.id, e.target.value)}
      />
    </div>
  );
};

export default Question;
