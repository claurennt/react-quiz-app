const SelectAnswer = ({ option }) => {
  return (
    <>
      <button className='option-button' value={option}>
        {option}
      </button>
    </>
  );
};

export default SelectAnswer;
