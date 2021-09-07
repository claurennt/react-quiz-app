import { NavLink } from 'react-router-dom';
import React from 'react';
import { useQuestionsContext } from '../Context/QuestionsContext';
import DifficultyButton from '../components/DifficultyButton';
import './Home.css';

const Home = () => {
  const { difficulty } = useQuestionsContext();

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

      <DifficultyButton level='easy' data-test='component-level-button' />
      <DifficultyButton level='medium' data-test='component-level-button' />
      <DifficultyButton level='hard' data-test='component-level-button' />

      {difficulty && (
        <NavLink className='begin-button' to={`/play/1`}>
          BEGIN
        </NavLink>
      )}
    </>
  );
};

export default Home;
