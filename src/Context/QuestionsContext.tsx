import { createContext, useContext } from "react";

interface QuestionsContextInterface {
  difficulty: string;
  setDifficulty: Function;
  questions: [];
  setQuestions: Function;
  answers: [];
  setAnswers: Function;
}

const QuestionCtxDefault: QuestionsContextInterface = {
  difficulty: null!,
  setDifficulty: () => null,
  questions: [],
  setQuestions: () => null,
  answers: [],
  setAnswers: () => null,
};

const QuestionsContext =
  createContext<QuestionsContextInterface>(QuestionCtxDefault);

export const useQuestionsContext = () => useContext(QuestionsContext); // the custom hook

export default QuestionsContext;
