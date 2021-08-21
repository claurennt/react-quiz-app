import QuestionForm from '../components/QuestionForm';
import { useContext } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import QuestionsContext from '../context/QuestionsContext';

import decodeSpecialCharInString from '../utils/decodeSpecialCharInString';
import './Question.css';

const Question = () => {
  const {
    questions,
    answers: { answers, setAnswers },
  } = useContext(QuestionsContext);
  console.log(questions);

  //retrieve the id from the url to match the question to display
  const { id } = useParams();

  let history = useHistory();

  // retrieve the object properties needed from the question at the index matching the param of the url
  const { question, correct_answer, category } = questions[Number(id - 1)];

  //create question id number for the question card
  const questionId = Number(id);

  //save the question in a variable after decoding the special characters if present
  const decodedQuestion = decodeSpecialCharInString(question);

  //   function to submit the answer and update the state
  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    // create new answer object to store it in the state
    const newAnswer = {
      question: decodedQuestion,
      answer: e.target.id,
      isCorrect: e.target.id === correct_answer ? true : false,
    };
    console.log(correct_answer, newAnswer.answer);
    // populate the state with the new answer and keep the previous state
    setAnswers(answers ? [...answers, newAnswer] : newAnswer);

    // redirect to the next question after 1 second
    setTimeout(() => {
      questionId < 10
        ? history.push(`/play/${questionId + 1}`)
        : history.push(`/game/results`);
    }, 2000);
  };
  return (
    <>
      {question && (
        <>
          <QuestionForm
            category={category}
            question={decodedQuestion}
            handleSubmit={handleSubmitAnswer}
            questionId={questionId}
          />
        </>
      )}
    </>
  );
};

export default Question;
