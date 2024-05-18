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
        { id: 111, text: 'What’s your favourite coding-related pun or joke?' },
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

        const unrelatedQuestions = [
          { id: 136, text: 'If you could have any superpower, what would it be and why?' },
          { id: 137, text: 'What\'s the most unusual thing you\'ve ever eaten?' },
          { id: 138, text: 'If you could visit any place in the world, where would it be?' },
          { id: 139, text: 'What\'s your favourite season and why?' },
          { id: 140, text: 'If you could time travel, would you go to the past or the future?' },
          { id: 141, text: 'What\'s your favourite board game?' },
          { id: 142, text: 'If you were a fruit, which one would you be and why?' },
          { id: 143, text: 'What\'s the last book you read and loved?' },
          { id: 144, text: 'What\'s your favourite hobby outside of work or school?' },
          { id: 145, text: 'If you could have dinner with any historical figure, who would it be?' },
          { id: 146, text: 'What\'s the weirdest dream you\'ve ever had?' },
          { id: 147, text: 'If you were a colour, which one would you be and why?' },
          { id: 148, text: 'What\'s your favourite way to spend a rainy day?' },
          { id: 149, text: 'If you could instantly learn any skill, what would it be?' },
          { id: 150, text: 'What\'s your favourite ice cream flavour?' },
          { id: 151, text: 'If you were an animal, which one would you be and why?' },
          { id: 152, text: 'What\'s the most interesting place you\'ve ever visited?' },
          { id: 153, text: 'If you could be any fictional character for a day, who would you choose?' },
          { id: 154, text: 'What\'s your favourite type of music to listen to while relaxing?' },
          { id: 155, text: 'If you could live in any time period, which one would you choose and why?' },
          { id: 156, text: 'What\'s your go-to comfort food?' },
          { id: 157, text: 'If you could swap lives with anyone for a day, who would it be?' },
          { id: 158, text: 'What\'s your favourite movie of all time?' },
          { id: 159, text: 'If you could speak any language fluently, which one would you choose?' },
          { id: 160, text: 'What\'s the most memorable concert you\'ve ever attended?' },
          { id: 161, text: 'If you had to describe yourself in three words, what would they be?' },
          { id: 162, text: 'What\'s your favourite outdoor activity?' },
          { id: 163, text: 'If you could only eat one type of cuisine for the rest of your life, what would it be?' },
          { id: 164, text: 'What\'s your favourite holiday destination?' },
          { id: 165, text: 'If you could have any job in the world, what would it be?' },
          { id: 166, text: 'What\'s the best gift you\'ve ever received?' },
          { id: 167, text: 'If you were a superhero, what would your name be?' },
          { id: 168, text: 'What\'s your favourite way to unwind after a long day?' },
          { id: 169, text: 'If you could be any age for a week, what age would you be and why?' },
          { id: 170, text: 'What\'s the strangest talent you have?' },
          { id: 171, text: 'If you could have any animal as a pet, what would it be?' },
          { id: 172, text: 'What\'s your favourite cartoon character?' },
          { id: 173, text: 'If you could change one thing about the world, what would it be?' },
          { id: 174, text: 'What\'s your favourite dessert?' },
          { id: 175, text: 'If you could live in any country, which one would it be and why?' },
          { id: 176, text: 'What\'s your favourite quote or saying?' },
          { id: 177, text: 'If you could have any car, which one would you choose?' },
          { id: 178, text: 'What\'s your favourite way to spend a weekend?' },
          { id: 179, text: 'If you could meet any celebrity, who would it be?' },
          { id: 180, text: 'What\'s your favourite type of weather?' },
          { id: 181, text: 'If you could play any musical instrument, which one would you choose?' },
          { id: 182, text: 'What\'s your favourite memory from childhood?' },
          { id: 183, text: 'If you could be a famous athlete, what sport would you play?' },
          { id: 184, text: 'What\'s your favourite thing to do on a lazy Sunday?' },
          { id: 185, text: 'If you could invent something, what would it be?' },
        
        
  ];

        
  

  const relevantRandomQuestions = relevantQuestions.sort(() => 0.5 - Math.random()).slice(0, 4);
  const funRandomQuestions = funQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
  const unrelatedRandomQuestions = unrelatedQuestions.sort(() => 0.5 - Math.random()).slice(0, 20);
  const generatedQuestions = [...relevantRandomQuestions, ...funRandomQuestions, ...unrelatedRandomQuestions];

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

    const generatedAnswers = {};
    generatedQuestions.forEach(question => {
      const { id, text } = question;
      let answer;
      switch (id) {
        case 1:
            answer = "The overall organization of HackMelbourne is exceptional.";
            break;
        case 2:
            answer = "Yes, the club's schedule of activities is clear and well-communicated.";
            break;
        case 3:
            answer = "The membership registration process is smooth and efficient.";
            break;
        case 4:
            answer = "The venues for club activities are always well-prepared and equipped.";
            break;
        case 5:
            answer = "The accessibility of the club’s event locations is satisfactory.";
            break;
        case 6:
            answer = "I find HackMelbourne's workshops and events highly relevant and engaging.";
            break;
        case 7:
            answer = "The quality of speakers and mentors provided by the club is excellent.";
            break;
        case 8:
            answer = "HackMelbourne's activities consistently meet my expectations in terms of content and engagement.";
            break;
        case 9:
            answer = "I am highly satisfied with the hackathon challenges organized by the club.";
            break;
        case 10:
            answer = "The themes of the club’s events are diverse and interesting.";
            break;
        case 11:
            answer = "The food and beverages provided at club events are of high quality.";
            break;
        case 12:
            answer = "Networking opportunities at club events are sufficient and beneficial.";
            break;
        case 13:
            answer = "Technical support and resources at club events are readily available.";
            break;
        case 14:
            answer = "The workspaces and seating arrangements provided by the club are comfortable.";
            break;
        case 15:
            answer = "Rest areas and relaxation zones at club events are adequate.";
            break;
        case 16:
            answer = "I feel welcomed and included in HackMelbourne’s activities.";
            break;
        case 17:
            answer = "Team formation activities effectively help in finding a team for club events.";
            break;
        case 18:
            answer = "The diversity of participants in HackMelbourne’s activities is commendable.";
            break;
        case 19:
            answer = "HackMelbourne is inclusive and supportive of all its members.";
            break;
        case 20:
            answer = "Communication and interaction with HackMelbourne's staff and volunteers are excellent.";
            break;
        case 21:
            answer = "I have gained valuable skills and knowledge through HackMelbourne’s activities.";
            break;
        case 22:
            answer = "I find HackMelbourne very useful for my personal and professional development.";
            break;
        case 23:
            answer = "The learning resources provided by the club are helpful.";
            break;
        case 24:
            answer = "The feedback and guidance received from the club’s mentors are valuable.";
            break;
        case 25:
            answer = "I am highly likely to apply the skills I’ve learned through the club in future projects.";
            break;
        case 26:
            answer = "I am highly satisfied with the outcome of the projects I’ve worked on through HackMelbourne.";
            break;
        case 27:
            answer = "HackMelbourne has helped me in building my portfolio or resume.";
            break;
        case 28:
            answer = "I am highly likely to recommend HackMelbourne to my friends or colleagues.";
            break;
        case 29:
            answer = "I have made valuable connections through HackMelbourne that might help me in my career.";
            break;
        case 30:
            answer = "I am highly likely to participate in future activities organized by HackMelbourne.";
            break;
        case 31:
            answer = "I heard about HackMelbourne from a friend.";
            break;
        case 32:
            answer = "Communication and updates provided by the club are timely and informative.";
            break;
        case 33:
            answer = "Any challenges or issues I've faced have been promptly addressed by HackMelbourne.";
            break;
        case 34:
            answer = "The highlight of my experience with HackMelbourne was collaborating with passionate individuals.";
            break;
        case 35:
            answer = "I suggest organizing more networking events to enhance member interaction.";
            break;
        case 36:
            answer = "The sense of community and camaraderie is what I enjoy most about being a member of HackMelbourne.";
            break;
        case 37:
            answer = "There's room for improvement in streamlining internal communication within the club.";
            break;
        case 38:
            answer = "Overall, I'm extremely satisfied with my experience with HackMelbourne.";
            break;
        case 101:
          answer = "If HackMelbourne were an animal, it would be a koala - friendly and adaptable.";
          break;
        case 102:
          answer = "If I could have any celebrity join HackMelbourne for a day, it would be Elon Musk - for his innovative ideas.";
          break;
        case 103:
          answer = "The funniest team name I've encountered at a hackathon is '404: Team Name Not Found'.";
          break;
        case 104:
          answer = "If HackMelbourne were a movie, it would be a sci-fi adventure - full of creativity and exploration.";
          break;
        case 105:
          answer = "My favorite meme to use when coding gets tough is the 'This is Fine' dog.";
          break;
        case 106:
          answer = "If I had to write code using only one hand, I'd rely on keyboard shortcuts and voice commands.";
          break;  
          case 107:
            answer = "I'd love to bring a hackathon to the Marvel Cinematic Universe - imagine coding alongside Tony Stark!";
            break;
          case 108:
            answer = "HackMelbourne's signature dance move would be called the HackHop - a blend of coding and grooving.";
            break;
          case 109:
            answer = "My go-to comfort food during an intense coding session is a classic bowl of macaroni and cheese.";
            break;
          case 110:
            answer = "I'd create an emoji of a coding wizard, representing the magic of programming.";
            break;
          case 111:
            answer = "My favorite coding-related pun is 'Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.'";
            break;
          case 112:
            answer = "I'd include elements like gears and binary code to represent innovation and technology in HackMelbourne's logo.";
            break;
          case 113:
            answer = "The quirkiest habit I've developed while coding is talking to myself as if I'm explaining the code to someone else.";
            break;
          case 114:
            answer = "HackMelbourne's reality TV show would be called 'Code Quest' - following members on their coding adventures.";
            break;
          case 115:
            answer = "My favorite way to procrastinate when I should be coding is watching coding tutorial videos on YouTube.";
            break;
          case 116:
            answer = "I'd invent a holographic coding assistant that projects code snippets in the air for easier visualization.";
            break;
          case 117:
            answer = "I'd instantly master Python for its versatility and readability.";
            break;
          case 118:
            answer = "The coolest hackathon project I've ever seen was a virtual reality game that helps people overcome phobias.";
            break;
          case 119:
            answer = "I'd create an app to automatically generate playlists based on the user's current mood and activities.";
            break;
          case 120:
            answer = "My favorite 'nerdy' movie to watch is 'The Matrix' - it always inspires me to think outside the box.";
            break;
          case 121:
            answer = "If I could only use one IDE for the rest of my life, it would be Visual Studio Code - it's lightweight and highly customizable.";
            break;
          case 122:
            answer = "I'd put in a Raspberry Pi, a 3D printer, and a VR headset to represent the current tech scene in HackMelbourne's time capsule.";
            break;
          case 123:
            answer = "My favorite coding-related quote is 'The only way to do great work is to love what you do.' - Steve Jobs";
            break;
          case 124:
            answer = "My coding style in three words: structured, efficient, and innovative.";
            break;
          case 125:
            answer = "The most creative hackathon project idea I've had involved using augmented reality to teach coding concepts to children.";
            break;
          case 126:
            answer = "I'd love to host a hackathon on a remote tropical island - coding by the beach sounds like paradise!";
            break;
          case 127:
            answer = "The strangest thing I've coded was a program that generates random haikus based on weather patterns.";
            break;
          case 128:
            answer = "I'd choose Alan Turing as a mentor, and we'd work on advancing artificial intelligence together.";
            break;
          case 129:
            answer = "My favorite non-tech hobby is playing the guitar - it's a great way to unwind after a coding session.";
            break;
          case 130:
            answer = "HackMelbourne's theme song would be 'We Will Rock You' by Queen - representing the club's energy and enthusiasm.";
            break;
          case 131:
            answer = "The most unusual inspiration I've had for a project came from a dream about flying robots.";
            break;
          case 132:
            answer = "If HackMelbourne were a superhero, it would have the superpower of infinite creativity.";
            break;
          case 133:
            answer = "HackMelbourne would be a gentle breeze - refreshing and invigorating, yet calming.";
            break;
          case 134:
            answer = "If HackMelbourne were a flavor of ice cream, it would be a mix of innovation swirl and collaboration crunch.";
            break;
          case 135:
            answer = "If HackMelbourne were a fictional character, it would be Sherlock Holmes - analytical, curious, and always solving problems.";
            break;


        default:
          answer = "bingus";
      }
      // Store the answer for the question
      generatedAnswers[id] = { question: text, answer };
    });
  
    // Set the specific answers and mark the form as finished
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
