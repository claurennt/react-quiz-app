import { createContext, useContext } from 'react';

const QuestionsContext = createContext();

export const useQuestionsContext = () => useContext(QuestionsContext); // the custom hook

export default QuestionsContext;
