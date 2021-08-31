import { useContext } from 'react';
import QuestionsContext from '../Context/QuestionsContext';

const DifficultyButton = ({ level }) => {
  const {
    difficulty: { setDifficulty },
  } = useContext(QuestionsContext);

  return (
    <>
      {/* change difficulty state based on prop*/}
      <button className='level-button' onClick={() => setDifficulty(level)}>
        {level} {/* display difficulty level based on prop */}
      </button>
    </>
  );
};

export default DifficultyButton;
