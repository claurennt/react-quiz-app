import { createContext, useContext } from 'react';

const QuestionsContext = createContext();

const QuestionsContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [difficulty, setDifficulty] = useState();

  return (
    <QuestionsProvider.Provider
      value={{
        difficulty: { difficulty, setDifficulty },
        questions: { questions, setQuestions },
        answers: { answers, setAnswers },
      }}
    >
      {children}
    </QuestionsProvider.Provider>
  );
};
export { QuestionsContextProvider, useQuestions };
