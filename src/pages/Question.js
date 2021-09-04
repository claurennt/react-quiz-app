import QuestionForm from '../components/QuestionForm';
import { useContext, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import getFromLocalStorage from '../utils/getFromLocalStorage';
import QuestionsContext from '../Context/QuestionsContext';
import saveToLocalStorage from '../utils/saveToLocalStorage';

import decodeSpecialCharInString from '../utils/decodeSpecialCharInString';
import answerExists from '../utils/answerExists';
import './Question.css';
import showNextPage from '../utils/showNextPage';

const Question = () => {
  const {
    questions: { questions },
    answers: { answers, setAnswers },
  } = useContext(QuestionsContext);

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

    /* check if the answers array already contains the answerId we are trying to add,
    alert the user if it does exist, redirect automatically to next question*/
    if (answers && answerExists(answers, newAnswer.id)) {
      alert('You have already answered this question!');
      setTimeout(() => {
        showNextPage(id, history);
      }, 500);
      return false;
      // populate the state with the new answer and keep the previous state and go to next question
    } else {
      const storedAnswers = getFromLocalStorage('answers-storage', []);
      storedAnswers.push(newAnswer);
      saveToLocalStorage('answers-storage', storedAnswers);
      setAnswers(answers ? [...answers, newAnswer] : newAnswer);

      // redirect to the next question after 500 ms
      setTimeout(() => {
        showNextPage(questionId, history);
      }, 500);
    }
  };

  useEffect(() => {
    if (history.action === 'POP') {
      const stored = getFromLocalStorage('answers-storage', []);
      console.log('stored', stored);
      saveToLocalStorage('answers-storage', stored);
      const s = getFromLocalStorage('answers-storage', []);
      console.log(s);
    }
  }, [history.action]);

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
