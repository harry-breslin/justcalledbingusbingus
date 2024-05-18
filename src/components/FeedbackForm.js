// src/components/FeedbackForm.js
import React, { useState } from 'react';
import QuestionList from './QuestionList';
import Summary from './Summary';
import { generateRandomAnswers } from './generateRandomAnswers';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const relevantQuestions = [
        { id: 1, text: 'How would you rate the overall organization of HackMelbourne?' },
        { id: 2, text: 'Is the club\'s schedule of activities clear and well-communicated?' },
        { id: 3, text: 'How would you rate the membership registration process?' },
        { id: 4, text: 'Are the venues for club activities adequately prepared and equipped?' },
        { id: 5, text: 'How would you rate the accessibility of the club’s event locations?' },
        { id: 6, text: 'How relevant and engaging do you find HackMelbourne\'s workshops and events?' },
        { id: 7, text: 'How would you rate the quality of the speakers and mentors provided by the club?' },
        { id: 8, text: 'Do HackMelbourne\'s activities meet your expectations in terms of content and engagement?' },
        { id: 9, text: 'How satisfied are you with the hackathon challenges organized by the club?' },
        { id: 10, text: 'Are the themes of the club’s events diverse and interesting?' },
        { id: 11, text: 'How would you rate the food and beverages provided at club events?' },
        { id: 12, text: 'Are the networking opportunities at club events sufficient and beneficial?' },
        { id: 13, text: 'How would you rate the availability of technical support and resources at club events?' },
        { id: 14, text: 'How comfortable are the workspaces and seating arrangements provided by the club?' },
        { id: 15, text: 'Are the rest areas and relaxation zones at club events adequate?' },
        { id: 16, text: 'Do you feel welcomed and included in HackMelbourne’s activities?' },
        { id: 17, text: 'Are the team formation activities effective in helping you find a team for club events?' },
        { id: 18, text: 'How would you rate the diversity of participants in HackMelbourne’s activities in terms of background and expertise?' },
        { id: 19, text: 'Do you feel that HackMelbourne is inclusive and supportive of all its members?' },
        { id: 20, text: 'How satisfied are you with the communication and interaction with HackMelbourne\'s staff and volunteers?' },
        { id: 21, text: 'Have you gained new skills or knowledge through HackMelbourne’s activities?' },
        { id: 22, text: 'How useful do you find HackMelbourne for your personal or professional development?' },
        { id: 23, text: 'Are the learning resources provided by the club (e.g., tutorials, documentation) helpful?' },
        { id: 24, text: 'How would you rate the feedback and guidance received from the club’s mentors?' },
        { id: 25, text: 'How likely are you to apply the skills you’ve learned through the club in future projects?' },
        { id: 26, text: 'How satisfied are you with the outcome of the projects you’ve worked on through HackMelbourne?' },
        { id: 27, text: 'Has HackMelbourne helped you in building your portfolio or resume?' },
        { id: 28, text: 'How likely are you to recommend HackMelbourne to your friends or colleagues?' },
        { id: 29, text: 'Have you made valuable connections through HackMelbourne that might help you in your career?' },
        { id: 30, text: 'How likely are you to participate in future activities organized by HackMelbourne?' },
        { id: 31, text: 'How did you hear about HackMelbourne?' },
        { id: 32, text: 'How would you rate the communication and updates provided by the club?' },
        { id: 33, text: 'Are there any challenges or issues you’ve faced that have not been addressed by HackMelbourne?' },
        { id: 34, text: 'What has been the highlight of your experience with HackMelbourne?' },
        { id: 35, text: 'Do you have any suggestions for improving HackMelbourne’s activities and events?' },
        { id: 36, text: 'What do you enjoy most about being a member of HackMelbourne?' },
        { id: 37, text: 'What could be improved within the club?' },
        { id: 38, text: 'Do you have any additional comments or feedback about your experience with HackMelbourne?' },
      ];
    
      const funQuestions = [
        { id: 101, text: 'If HackMelbourne were an animal, what animal would it be and why?' },
        { id: 102, text: 'If you could have any celebrity join HackMelbourne for a day, who would it be and why?' },
        { id: 103, text: 'What’s the funniest or most memorable team name you\'ve encountered at a hackathon?' },
        { id: 104, text: 'If HackMelbourne were a movie, what genre would it be?' },
        { id: 105, text: 'What’s your favourite meme or GIF to use when coding gets tough?' },
        { id: 106, text: 'If you had to write code using only one hand, what strategies would you use?' },
        { id: 107, text: 'What fictional universe would you like to bring a hackathon to?' },
        { id: 108, text: 'If HackMelbourne had a signature dance move, what would it be called?' },
        { id: 109, text: 'What’s your go-to comfort food during an intense coding session?' },
        { id: 110, text: 'If you could create a new emoji, what would it look like and what would it represent?' },
        { id: 111, text: 'What"s your favourite coding-related pun or joke?' },
        { id: 112, text: 'If you had to design a new logo for HackMelbourne, what elements would you include?' },
        { id: 113, text: 'What’s the quirkiest habit you’ve developed while coding?' },
        { id: 114, text: 'If HackMelbourne had its own reality TV show, what would it be called?' },
        { id: 115, text: 'What’s your favourite way to procrastinate when you should be coding?' },
        { id: 116, text: 'If you could invent a new tech gadget, what would it do?' },
        { id: 117, text: 'If you could instantly master any programming language, which one would you choose?' },
        { id: 118, text: 'What’s the coolest hackathon project you’ve ever seen?' },
        { id: 119, text: 'If you could create an app to solve one everyday problem, what would it be?' },
        { id: 120, text: 'What’s your favourite "nerdy" movie or TV show to watch?' },
        { id: 121, text: 'If you could only use one IDE or text editor for the rest of your life, which one would it be?' },
        { id: 122, text: 'If HackMelbourne had a time capsule, what would you put in it to represent the current tech scene?' },
        { id: 123, text: 'What’s your favourite coding-related quote or mantra?' },
        { id: 124, text: 'If you had to describe your coding style in three words, what would they be?' },
        { id: 125, text: 'What’s the most creative hackathon project idea you’ve ever had?' },
        { id: 126, text: 'If you could host a hackathon in any location (real or fictional), where would it be?' },
        { id: 127, text: 'What’s the strangest thing you’ve coded or programmed?' },
        { id: 128, text: 'If you could have a coding session with any historical figure, who would it be and what would you work on?' },
        { id: 129, text: 'What’s your favourite non-tech hobby or activity?' },
        { id: 130, text: 'If HackMelbourne had a theme song, what song would it be?' },
        { id: 131, text: 'What’s the most unusual inspiration you’ve had for a project?' },
        { id: 132, text: 'If HackMelbourne were a superhero, what superpower would it have?' },
        { id: 133, text: 'If HackMelbourne were a type of weather, what would it be and why?' },
        { id: 134, text: 'If HackMelbourne were a flavour of ice cream, what flavour would it be?' },
        { id: 135, text: 'If HackMelbourne were a fictional character, who would it be and why?' },

        
  ];

  const relevantRandomQuestions = relevantQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
  const funRandomQuestions = funQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
  const generatedQuestions = [...relevantRandomQuestions, ...funRandomQuestions];

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
    const relevantRandomQuestions = relevantQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
    const funRandomQuestions = funQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    const generatedQuestions = [...relevantRandomQuestions, ...funRandomQuestions];
    const generatedAnswers = generateRandomAnswers(generatedQuestions);
    setRandomAnswers(generatedAnswers);
    setIsFinished(true);
  };
  
  return (
    <div className="feedback-form-container">
      {!isFinished ? (
        <QuestionList
          questions={generatedQuestions}
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
