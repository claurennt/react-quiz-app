import { useContext } from 'react';
import QuestionsContext from '../Context/QuestionsContext';

const DifficultyButton = ({ level }) => {
  const {
    difficulty: { setDifficulty },
  } = useContext(QuestionsContext);

  const handleClick = () => {
    setDifficulty(level);
  };

  return (
    <>
      {/* change difficulty state based on prop*/}
      <button className='level-button' onClick={() => handleClick()}>
        {level} {/* display difficulty level based on prop */}
      </button>
    </>
  );
};

export default DifficultyButton;
