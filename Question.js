
import React, { useState } from 'react';
import './index.css'
const Question = ({ question, onSubmitAnswer }) => {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    onSubmitAnswer(answer);
  };

  return (
    <div className='common-css'>
      <h2 >Quiz</h2>
      <p>{question}</p>
      <input type="text" value={answer} onChange={handleInputChange} />
      <button  onClick={handleSubmit} className='btn-css'>Submit</button>
    </div>
  );
};

export default Question;
