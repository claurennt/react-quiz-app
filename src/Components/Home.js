import { useContext } from 'react';
import QuestionsContext from '../Context/QuestionsContext';
import { Switch, Route, Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <>
      <h1 className='text'>
        <strong>Welcome to the Trivia Challenge!</strong>
      </h1>
      <h2 className='text'>
        You will be presented with 10 True or False questions.
      </h2>
      <h2 className='text'>Can you score 100%?</h2>
      <Link to='/play'>BEGIN</Link>
    </>
  );
};

export default Home;
