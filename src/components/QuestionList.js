
import React, { useState } from 'react';
import Question from './Question';
import './QuestionList.css';

const QuestionList = ({ questions, answers, onAnswerChange, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
	  if (document.getElementById("amongus").value == "") {
		  alert("No feedback detected!")
	  } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
	  document.getElementById("amongus").value = "";
	  }
    } else {
      onFinish();
    }
  };

  return (
    <div className="question-list-container">
      <Question
        question={questions[currentQuestionIndex]}
        answer={answers[questions[currentQuestionIndex].id] || ''}
        onAnswerChange={onAnswerChange}
      />
      <button onClick={handleNext}>
        {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
      </button>
    </div>
  );
};

export default QuestionList;
