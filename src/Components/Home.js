import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import QuestionsContext from '../Context/QuestionsContext';

import './Home.css';

const Home = () => {
  const {
    difficulty: { difficulty, setDifficulty },
  } = useContext(QuestionsContext);

  //function to select difficulty level of questions and update the state in the parent
  const chooseDifficultyLevel = (e) => {
    console.log(e.currentTarget);
    setDifficulty(e.target.innerText.toLowerCase());
  };

  return (
    <>
      <h1 className='text'>
        <strong>Welcome to the Trivia Challenge!</strong>
      </h1>
      <h2 className='text'>
        You will be presented with 10 True or False questions.
      </h2>
      <h2 className='text'>Can you score 100%?</h2>
      <h3>Choose your level:</h3>

      <button
        className='level-button'
        onClick={(e) => chooseDifficultyLevel(e)}
      >
        Easy
      </button>
      <button
        className='level-button'
        onClick={(e) => chooseDifficultyLevel(e)}
      >
        Medium
      </button>
      <button
        className='level-button'
        onClick={(e) => chooseDifficultyLevel(e)}
      >
        Hard
      </button>

      {difficulty && (
        <NavLink className='home-button' to={`/play/0`}>
          BEGIN
        </NavLink>
      )}
    </>
  );
};

export default Home;
