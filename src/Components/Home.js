import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
  let index = 0;
  return (
    <>
      <h1 className='text'>
        <strong>Welcome to the Trivia Challenge!</strong>
      </h1>
      <h2 className='text'>
        You will be presented with 10 True or False questions.
      </h2>
      <h2 className='text'>Can you score 100%?</h2>
      <NavLink className='begin-button' to={`/play/${index}`}>
        BEGIN
      </NavLink>
    </>
  );
};

export default Home;
