import { useContext } from 'react';
import QuestionsContext from '../Context/QuestionsContext';
import AnswerResult from '../components/AnswerResult';
import './Results.css';

import { useHistory } from 'react-router-dom';
const Results = () => {
  const history = useHistory();

  const {
    answers: { answers },
  } = useContext(QuestionsContext);
  console.log(answers);

  //retrieve number of correctly answered questions
  const numberCorrectAnswers = answers.filter(
    (answer) => answer.isCorrect === true
  ).length;

  return (
    <div className='result-answer-wrapper'>
      <h2>You scored {numberCorrectAnswers} out of 10</h2>
      {answers &&
        answers.map((answer, index) => {
          return <AnswerResult answer={answer} key={index} />;
        })}

      <button className='begin-button' onClick={() => history.push('/')}>
        PLAY AGAIN?
      </button>
    </div>
  );
};

export default Results;
