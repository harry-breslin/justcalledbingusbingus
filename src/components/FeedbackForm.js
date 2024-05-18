// src/components/FeedbackForm.js
import React, { useState } from 'react';
import QuestionList from './QuestionList';
import Summary from './Summary';

const FeedbackForm = () => {
  const questions = [
    { id: 1, text: 'How do you rate our service?' },
    { id: 2, text: 'Any suggestions for improvement?' },
    { id: 3, text: 'Would you recommend us to a friend?' },
  ];

  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleFinish = () => {
    setIsFinished(true);
  };

  return (
    <div>
      {!isFinished ? (
        <QuestionList
          questions={questions}
          answers={answers}
          onAnswerChange={handleAnswerChange}
          onFinish={handleFinish}
        />
      ) : (
        <Summary answers={answers} />
      )}
    </div>
  );
};

export default FeedbackForm;
