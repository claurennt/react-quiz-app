const SelectAnswer = ({ option }) => {
  return (
    <>
      <input type='radio' id={option} name='choice' />
      <label className='select-option' for={option}>
        {option}
      </label>
      <br />
    </>
  );
};

export default SelectAnswer;
