import React from 'react';
import App from '../App';
import { shallow, mount } from '../.config/Enzyme';
import DifficultyButton from '../components/DifficultyButton';
import Home from '../pages/Home';
import * as QuestionsContext from '../Context/QuestionsContext';

describe('Home page test suite', () => {
  it('Should mock the context', () => {
    const contextValues = {
      difficulty: 'easy' || 'medium' || 'hard',
    };
    jest
      .spyOn(QuestionsContext, 'useQuestionsContext')
      .mockImplementation(() => contextValues);
  });
  it('Should display 3 buttons and each button display a different level', () => {
    const wrapper = shallow(<Home />);
    const buttons = wrapper.find("[data-test='component-level-button']");
    expect(buttons).toHaveLength(3);
    expect(buttons.get(0).props.level).toEqual('easy');
    expect(buttons.get(1).props.level).toEqual('medium');
    expect(buttons.get(2).props.level).toEqual('hard');
  });
});
