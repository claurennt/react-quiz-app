const SelectAnswer = ({ option, submit }) => {
  return (
    <>
      <button
        className="option-button"
        value={option}
        onClick={(e) => submit(e)}
        name="answer"
      >
        {option}
      </button>
    </>
  );
};

export default SelectAnswer;
