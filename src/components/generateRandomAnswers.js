// src/utils/generateRandomAnswers.js
export const generateRandomAnswers = (questions) => {
    const randomAnswers = {};
    questions.forEach((question) => {
      randomAnswers[question.id] = generateRandomAnswer();
    });
    return randomAnswers;
  };
  
  const generateRandomAnswer = () => {
    const randomStrings = [
      'Yes, absolutely!',
      'No, not really.',
      'It was great!',
      'Could be better.',
      'I loved it!',
      'It was okay.',
      'Needs improvement.',
      'Fantastic!',
      'Not satisfied.',
      'Highly recommend!',
    ];
    return randomStrings[Math.floor(Math.random() * randomStrings.length)];
  };
  