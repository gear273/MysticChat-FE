import React, { useState } from 'react';
import axios from 'axios';
import './QuestionBox.css';

function QuestionBox({ isThinking, setIsThinking }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsThinking(true); 
        try {
          const response = await axios.post('http://localhost:5000/tarot', {
            question
          });
          setAnswer(response.data.response); // Cambio: utilizar 'response' en lugar de 'result'
        } catch (error) {
          console.error(error);
          setAnswer("Error al obtener respuesta.");
        }
        setQuestion('');
        setIsThinking(false);
      };

    return (
        <div className="container">
            <textarea
                className="question-textarea"
                placeholder="Write your question..."
                value={question}
                onChange={handleQuestionChange}
            />
            <button className="submit-button" type="submit" onClick={handleSubmit}>
                Submit your question
            </button>
            <textarea
                className="answer-textarea"
                readOnly
                value={isThinking ? 'AI Tarot is moving cards..' : answer}
            />
        </div>
    );
    
}

export default QuestionBox;







