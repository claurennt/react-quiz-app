import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import QuestionsContext from './Context/QuestionsContext';
import { ThemeContextProvider } from './Context/AppThemeContext';
import Home from './Components/Home';
import Game from './Components/Game';
import './App.css';

const App = () => {
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState([]);

  const apiUrl =
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(({ data }) => setQuestions(data.results))
      .catch((e) => console.log(e));
  }, []);
  console.log(questions);
  return (
    <ThemeContextProvider>
      <QuestionsContext.Provider
        value={{ questions: questions, answers: { answers, setAnswers } }}
      >
        <Switch>
          <Route path='/play/:id'>
            <Game />
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
