import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import QuestionsContext from '../context/QuestionsContext';
import DifficultyButton from '../components/DifficultyButton';
import './Home.css';

const Home = () => {
  const {
    difficulty: { difficulty },
  } = useContext(QuestionsContext);

  //function to select difficulty level of questions and update the state in the parent

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

      <DifficultyButton level='easy' />
      <DifficultyButton level='medium' />
      <DifficultyButton level='hard' />

      {difficulty && (
        <NavLink className='begin-button' to={`/play/0`}>
          BEGIN
        </NavLink>
      )}
    </>
  );
};

export default Home;
