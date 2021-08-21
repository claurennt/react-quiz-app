import Select from '../components/Select';

import useQuestion from './useQuestion';

const Question = () => {
  const { decodedQuestion, category, question, handleSubmitAnswer } =
    useQuestion();

  return (
    <>
      {question && (
        <form onClick={(e) => handleSubmitAnswer(e)}>
          <h3>This question is about: {category}</h3>
          <h4>{decodedQuestion}</h4>
          <Select option='true' />
          <Select option='false' />
        </form>
      )}
    </>
  );
};

export default Question;
