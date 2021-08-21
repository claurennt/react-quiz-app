import Select from './Select';

const QuestionForm = ({ category, question, handleSubmit, questionId }) => {
  return (
    <>
      <h3>This question is about: {category}</h3>
      <div className='question-card'>
        <form onClick={(e) => handleSubmit(e)}>
          <h4>
            <em>{question}</em>
          </h4>
          <Select option='True' />
          <Select option='False' />
        </form>
      </div>
      <p>{questionId} of 10</p>
    </>
  );
};

export default QuestionForm;
