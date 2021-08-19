import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import QuestionsContext from './Context/QuestionsContext';
import { AppThemeContextProvider } from './Context/AppThemeContext';
import Home from './Components/Home';

const App = () => {
  const [questions, setQuestions] = useState();

  const apiUrl =
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(({ data }) => console.log(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <AppThemeContextProvider>
      <QuestionsContext.Provider value={{ questions, setQuestions }}>
        <Switch>
          {/* <Route path='/play'>
          <Game />
        </Route> */}
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </QuestionsContext.Provider>
    </AppThemeContextProvider>
  );
};

export default App;
