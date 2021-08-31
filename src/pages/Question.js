import QuestionForm from '../components/QuestionForm';
import { useContext } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import QuestionsContext from '../Context/QuestionsContext';

import decodeSpecialCharInString from '../utils/decodeSpecialCharInString';
import answerExists from '../utils/answerExists';
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
  // console.log(answerExists(answers, questionId));
  //   function to submit the answer and update the state
  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    // create new answer object to store it in the state
    const newAnswer = {
      id: questionId,
      question: decodedQuestion,
      answer: e.target.value,
      isCorrect: e.target.value === correct_answer ? true : false,
    };

    // check if the answers array already contains the answerId we are trying to add,alert the user if it does exist, exit the function
    if (answers && answerExists(answers, newAnswer.id)) {
      alert('You have already answered this question!');
      return false;
      // populate the state with the new answer and keep the previous state
    } else setAnswers(answers ? [...answers, newAnswer] : newAnswer);

    // redirect to the next question after 1 second
    setTimeout(() => {
      questionId < 10
        ? history.push(`/play/${questionId + 1}`)
        : history.push(`/game/results`);
    }, 700);
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
