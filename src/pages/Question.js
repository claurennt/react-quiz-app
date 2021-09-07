import QuestionForm from '../components/QuestionForm';

import { useParams, useHistory } from 'react-router-dom';

import { useQuestionsContext } from '../Context/QuestionsContext';

import getFromLocalStorage from '../utils/getFromLocalStorage';
import pushToLocalStorage from '../utils/pushToLocalStorage';
import decodeSpecialCharInString from '../utils/decodeSpecialCharInString';
import answerExists from '../utils/answerExists';
import showNextPage from '../utils/showNextPage';

import { useAlert } from 'react-alert';
import './Question.css';

const Question = () => {
  const { questions, answers, setAnswers } = useQuestionsContext();

  const alert = useAlert();

  let history = useHistory();

  const { id } = useParams();

  const storedQuestions = getFromLocalStorage('questions-storage', []);

  // retrieve the object properties needed from the questions/storedQuestion at the index matching the param of the url
  const { question, correct_answer, category } =
    questions[Number(id - 1)] || storedQuestions[Number(id - 1)];

  //create question id number for the question card
  const questionId = Number(id);

  //save the question in a variable after decoding the special characters if present
  const decodedQuestion = decodeSpecialCharInString(question);

  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    // create new answer object to store it in the state
    const newAnswer = {
      id: questionId,
      question: decodedQuestion,
      answer: e.target.value,
      isCorrect: e.target.value === correct_answer ? true : false,
    };

    /* check if the answers array already contains the answerId we are trying to add,
    alert the user if it does exist, redirect automatically to next question*/
    if (answers && answerExists(answers, questionId)) {
      alert.show('You have already answered this question!');
      setTimeout(() => {
        showNextPage(id, history);
      }, 2000);
      return false;

      // push the new Answer to local storage, populate the state with the new answer and go to next question
    } else {
      pushToLocalStorage('answers-storage', newAnswer);
      setAnswers(answers ? [...answers, newAnswer] : newAnswer);
      setTimeout(() => {
        showNextPage(questionId, history);
      }, 500);
    }
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
