
import React, { useState, useEffect } from 'react';
import Question from './Question';

const API_URL = 'https://opentdb.com/api.php?amount=1';
console.log(API_URL);

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const question = data.results[0].question;
        const correctAnswer = data.results[0].correct_answer;
        setCurrentQuestion({ question, correctAnswer });
      })
      .catch((error) => console.error('Error fetching question:', error));
  };

  const handleAnswerSubmit = (userAnswer) => {
    const isCorrect = userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();

    alert(isCorrect ? 'Correct!' : 'Incorrect!');
    fetchQuestion();
  };

  return (
    <div>
      {currentQuestion ? (
        <Question question={currentQuestion.question} onSubmitAnswer={handleAnswerSubmit} />
      ) : (
        <p>Loading question.......</p>
      )}
    </div>
  );
};

export default App;
