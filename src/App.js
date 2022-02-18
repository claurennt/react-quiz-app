import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import QuestionsContext from "./Context/QuestionsContext";
import { ThemeContextProvider } from "./Context/AppThemeContext";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Results from "./pages/Results";

import saveToLocalStorage from "./utils/saveToLocalStorage";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [difficulty, setDifficulty] = useState();

  //fetch 10 questions based on difficulty level chosen
  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`
      )
      .then(({ data }) => {
        setQuestions(data.results);
      })
      .catch((e) => console.log(e));
  }, [difficulty]); //triggers the fetch again when difficulty state changes

  useEffect(() => {
    //save fetched questions to local storage
    saveToLocalStorage("questions-storage", questions);
  }, [questions]);

  return (
    <ThemeContextProvider>
      <QuestionsContext.Provider
        value={{
          difficulty,
          setDifficulty,
          questions,
          setQuestions,
          answers,
          setAnswers,
        }}
      >
        <Switch>
          <Route path="/play/:id">
            <Question />
          </Route>
          <Route path="/game/results">
            <Results />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </QuestionsContext.Provider>
    </ThemeContextProvider>
  );
};

export default App;
