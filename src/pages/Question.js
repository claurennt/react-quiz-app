import QuestionForm from '../components/QuestionForm';
import { useContext, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import QuestionsContext from '../Context/QuestionsContext';

import decodeSpecialCharInString from '../utils/decodeSpecialCharInString';
import answerExists from '../utils/answerExists';
import './Question.css';
import showNextPage from '../utils/showNextPage';

const Question = () => {
  const {
    questions: { questions, storedQuestions },
    answers: { answers, setAnswers },
  } = useContext(QuestionsContext);

  console.log(questions);
  let history = useHistory();

  //retrieve the id from the url to match the question to display

  const { id } = useParams();

  // retrieve the object properties needed from the questions/storedQuestion at the index matching the param of the url
  const { question, correct_answer, category } =
    storedQuestions[Number(id - 1)] || questions[Number(id - 1)];

  //create question id number for the question card
  const questionId = Number(id);
  let locationPath = `/play/${questionId}`;

  useEffect(() => {
    //if page gets refreshed we add the current page to the history stack, ans it gets automatically displayed
    history.listen((location, action) => {
      if (action === 'POP' && location.pathname === locationPath) {
        history.push(location.pathname);
      }
    });
  }, [history, locationPath]);

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
        showNextPage(questionId, history);
      }, 500);
      return false;
      // populate the state with the new answer and keep the previous state
    } else setAnswers(answers ? [...answers, newAnswer] : newAnswer);

    // redirect to the next question after 700 ms
    setTimeout(() => {
      showNextPage(questionId, history);
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
