import Select from './Select';

const QuestionForm = ({ category, question, handleSubmit, questionId }) => {
  return (
    <div className='question-wrapper'>
      <h3>This question is about: {category}</h3>
      <div className='question-card'>
        <form>
          <h4>
            <em>{question}</em>
          </h4>
          <Select option='True' submit={handleSubmit} />
          <Select option='False' submit={handleSubmit} />
        </form>
      </div>
      <p>{questionId} of 10</p>
    </div>
  );
};

export default QuestionForm;
