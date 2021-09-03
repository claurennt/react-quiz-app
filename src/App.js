import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
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
  //get data from local storage if there is any and set it to state, else set state  to empty array
  const storedQuestions = getFromLocalStorage('questions-storage', []);

  const [questions, setQuestions] = useState(storedQuestions);
  const [answers, setAnswers] = useState([]);
  const [difficulty, setDifficulty] = useState();

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`
      )
      .then(({ data }) => {
        setQuestions(data.results);
      })
      .catch((e) => console.log(e));
  }, [difficulty]);

  useEffect(() => {
    saveToLocalStorage('questions-storage', storedQuestions);
  }, [storedQuestions]);

  return (
    <ThemeContextProvider>
      <QuestionsContext.Provider
        value={{
          difficulty: { difficulty, setDifficulty },
          questions: { questions, setQuestions, storedQuestions },
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
