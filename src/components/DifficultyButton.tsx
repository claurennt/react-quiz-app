import React from "react";
import { useQuestionsContext } from "../Context/QuestionsContext";

const DifficultyButton = ({ level }) => {
  const { setDifficulty } = useQuestionsContext();

  const handleClick = () => {
    setDifficulty(level);
  };

  return (
    <>
      {/* change difficulty state based on prop*/}
      <button className="level-button" onClick={() => handleClick()}>
        {level} {/* display difficulty level based on prop */}
      </button>
    </>
  );
};

export default DifficultyButton;
