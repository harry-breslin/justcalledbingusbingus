// src/components/FeedbackForm.js
import React, { useState } from 'react';
import QuestionList from './QuestionList';
import Summary from './Summary';
import { generateRandomAnswers } from './generateRandomAnswers';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const questions = [
    { id: 1, text: 'How do you rate our service?' },
    { id: 2, text: 'Any suggestions for improvement?' },
    { id: 3, text: 'Would you recommend us to a friend?' },
  ];

  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [randomAnswers, setRandomAnswers] = useState({});

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleFinish = () => {
    const generatedAnswers = generateRandomAnswers(questions);
    setRandomAnswers(generatedAnswers);
    setIsFinished(true);
  };

  return (
    <div className="feedback-form-container">
      {!isFinished ? (
        <QuestionList
          questions={questions}
          answers={answers}
          onAnswerChange={handleAnswerChange}
          onFinish={handleFinish}
        />
      ) : (
        <Summary answers={randomAnswers} />
      )}
    </div>
  );
};

export default FeedbackForm;
