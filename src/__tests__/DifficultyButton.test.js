import React, { useContext } from 'react';
import { shallow, mount } from '../.config/Enzyme';
import DifficultyButton from '../components/DifficultyButton';
import Home from '../pages/Home';
import { useQuestions, QuestionsContext } from '../context/QuestionsContext';

describe('Home page test suite', () => {
  it('Should mock the context', () => {
    const context = useQuestions();
    jest
      .spyOn(QuestionsContext, 'useQuestions')
      .mockImplementation(() => context);
    const wrapper = shallow(<Home />);
    const buttons = wrapper.find(DifficultyButton);
    expect(buttons.length).toBe(3);
  });
});
