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
      'Yes, also I think bingus bingus bot should have won Hackiethon!',
      'It was great!',
      'I loved it!',
      'It was okay.',
      'Fantastic!',
      'Highly recommend!',
    ];
    return randomStrings[Math.floor(Math.random() * randomStrings.length)];
  };
  