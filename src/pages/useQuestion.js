import { useContext, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import QuestionsContext from '../context/QuestionsContext';

import decodeSpecialCharInString from '../utils/decodeSpecialCharInString';

// custom hook to handle question card logic
const useQuestion = () => {
  const { questions } = useContext(QuestionsContext);

  const [answers, setAnswers] = useState([]);

  //retrieve the id from the url to match the question to display
  const { id } = useParams();
  let history = useHistory();

  // retrieve the object properties needed from the question at the index matching the param of the url
  const { question, correct_answer, category } = questions[Number(id)];

  //save the question in a variable after decoding the special characters if present
  const decodedQuestion = decodeSpecialCharInString(question);

  //   function to submit the answer and update the state
  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    // create new answer object to store it in the state
    const newAnswer = {
      // if question string contains '&quot' replace it with ""
      question: decodedQuestion,
      answer: e.target.id,
      isCorrect: e.target.id === correct_answer ? true : false,
    };

    // populate the state with the new answer and keep the previous state
    setAnswers(answers ? [...answers, newAnswer] : newAnswer);
    console.log(newAnswer);
    // redirect to the next question after 1 second
    setTimeout(() => {
      history.push(`/play/${Number(id) + 1}`);
    }, 2000);
  };

  return { decodedQuestion, category, question, handleSubmitAnswer };
};

export default useQuestion;
