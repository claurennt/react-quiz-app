import React, { useEffect, useState, useCallback } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import QuestionsContext from './Context/QuestionsContext';
import { ThemeContextProvider } from './Context/AppThemeContext';
import Home from './pages/Home';
import Question from './pages/Question';
import Results from './pages/Results';
import './App.css';
import saveToLocalStorage from './utils/saveToLocalStorage';
import getFromLocalStorage from './utils/getFromLocalStorage';

const App = () => {
  const storedQuestions = getFromLocalStorage('questions-storage', []);

  const [questions, setQuestions] = useState(storedQuestions);
  const [answers, setAnswers] = useState([]);
  console.log(storedQuestions);
  const [difficulty, setDifficulty] = useState();

  let { action } = useHistory();

  useCallback(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`
      )
      .then(({ data }) => {
        if (action === 'POP') {
          setQuestions(storedQuestions);
        } else {
          setQuestions(data.results);
        }
      })
      .catch((e) => console.log(e));
  }, [difficulty, action, storedQuestions]);

  useEffect(() => {
    saveToLocalStorage('questions-storage', questions);
  }, [questions]);

  return (
    <ThemeContextProvider>
      <QuestionsContext.Provider
        value={{
          difficulty: { difficulty, setDifficulty },
          questions: questions,
          answers: { answers, setAnswers },
        }}
      >
        <Switch>
          <Route path='/play/:id'>
            <Question />
          </Route>
          <Route path='/game/results'>
            <Results />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </QuestionsContext.Provider>
    </ThemeContextProvider>
  );
};

export default App;
