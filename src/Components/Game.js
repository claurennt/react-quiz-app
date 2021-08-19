import { useContext } from 'react';
import QuestionsContext from '../Context/QuestionsContext';
import { useParams, useHistory } from 'react-router-dom';

const Game = () => {
  const {
    questions,
    answers: { answers, setAnswers },
  } = useContext(QuestionsContext);

  //retrieve the id from the url to match the question displayed
  const { id } = useParams();
  let history = useHistory();
  //  save the question object in the array at the index matching the url paramin a variable
  const questionToDisplay = questions[Number(id)];
  questionToDisplay &&
    console.log(questionToDisplay.question.includes('&quot'));
  //   function to submit the answer and update the state
  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    // create new answer object to store it in the state
    const newAnswer = {
      question: questionToDisplay.question,
      answer: e.target.id,
      isCorrect:
        e.target.id === questionToDisplay.correct_answer ? true : false,
    };

    // populate the state with the new answer and keep the previous state
    setAnswers(answers ? [...answers, newAnswer] : newAnswer);

    // redirect to the next question after 1 second
    setTimeout(() => {
      history.push(`/play/${Number(id) + 1}`);
    }, 2000);
  };

  return (
    <>
      {questionToDisplay && (
        <form onClick={handleAnswerSubmit}>
          <h3>This question is about: {questionToDisplay.category}</h3>
          <h4>{questionToDisplay.question}</h4>
          <input type='radio' id='true' name='choice' />
          <label for='true'>True</label>
          <br />
          <input type='radio' id='false' name='choice' />
          <label for='false'>False</label>
          <br />
        </form>
      )}
    </>
  );
};

export default Game;
