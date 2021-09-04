const SelectAnswer = ({ option, submit }) => {
  return (
    <>
      <button
        className='option-button'
        value={option}
        onClick={(e) => submit(e)}
      >
        {option}
      </button>
    </>
  );
};

export default SelectAnswer;
