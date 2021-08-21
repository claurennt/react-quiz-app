const AnswerResult = ({ answer }) => {
  console.log(answer);
  return (
    <div>
      <p>
        {' '}
        <span className={answer.isCorrect ? 'correct' : 'false'}>
          {answer.isCorrect ? '+' : '-'}
        </span>
        {answer.question}
      </p>
    </div>
  );
};

export default AnswerResult;
