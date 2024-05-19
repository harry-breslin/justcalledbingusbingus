import React from 'react';
import './Summary.css';

const Summary = ({ answers }) => {
  // Convert the object into an array of question-answer pairs
  const answerPairs = Object.entries(answers);

  return (
    <div className="summary-container">
      <h2>Feedback Summary</h2>
	  Thanks for your honest feedback, below is a copy of your responses:
      <div className="answer-scroll-container">
        <ul className="answer-list">
          {answerPairs.map(([questionId, { question, answer }]) => (
            <li key={questionId}>
              <strong>{question}</strong><br></br> {answer}
            </li>
          ))}
        </ul>
      </div>
	  <button><h2><b>
	  <a href="https://youtu.be/dQw4w9WgXcQ">Submit</a></b></h2>
		</button>
    </div>
  );
};

export default Summary;
