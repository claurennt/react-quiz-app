import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import QuestionsContext from './context/QuestionsContext';
import { ThemeContextProvider } from './context/AppThemeContext';
import Home from './pages/Home';
import QuestionComponent from './pages/QuestionComponent';
import './App.css';

const App = () => {
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState([]);

  const [difficulty, setDifficulty] = useState();

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`
      )
      .then(({ data }) => setQuestions(data.results))
      .catch((e) => console.log(e));
  }, [difficulty]);

  console.log(questions);
  return (
    <ThemeContextProvider>
      <QuestionsContext.Provider
        value={{
          difficulty: { difficulty, setDifficulty },
          questions,
          answers: { answers, setAnswers },
        }}
      >
        <Switch>
          <Route path='/play/:id'>
            <QuestionComponent />
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
