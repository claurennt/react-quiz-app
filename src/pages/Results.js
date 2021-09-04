import { useContext } from 'react';
import QuestionsContext from '../Context/QuestionsContext';
import AnswerResult from '../components/AnswerResult';
import getFromLocalStorage from '../utils/getFromLocalStorage';
import './Results.css';

import { useHistory } from 'react-router-dom';

const Results = () => {
  const history = useHistory();

  const {
    answers: { setAnswers },
  } = useContext(QuestionsContext);

  const storedAnswers = getFromLocalStorage('answers-storage');

  //retrieve number of correctly answered questions
  const numberCorrectAnswers = storedAnswers.filter(
    (answer) => answer.isCorrect === true
  ).length;

  // clear the answers state on play againa and redirect to homepage
  const handlePlayAgain = () => {
    // set answers state to null
    setAnswers();

    //clear local storage
    localStorage.removeItem('answers-storage');
    localStorage.removeItem('questions-storage');
    history.push('/');
  };

  return (
    <div className='result-answer-wrapper'>
      <h2>You scored {numberCorrectAnswers} out of 10</h2>
      {storedAnswers &&
        storedAnswers.map((answer, index) => {
          return <AnswerResult answer={answer} key={index} />;
        })}

      <button className='begin-button' onClick={() => handlePlayAgain()}>
        PLAY AGAIN?
      </button>
    </div>
  );
};

export default Results;
