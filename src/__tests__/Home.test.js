import React from 'react';

import { shallow, mount } from '../.config/enzyme.config';

import Home from '../pages/Home';
import * as QuestionsContext from '../Context/QuestionsContext';
import App from '../App';

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
  it('Should update difficulty state based on a click event ', () => {
    const wrapper = shallow(<Home />);

    const setDifficulty = jest.fn();
    const handleClick = jest.spyOn(React, 'useState');
    const button = wrapper.find("[data-test='component-level-button']");
    button.simulate('click');
    handleClick.mockImplementation(() => [setDifficulty, 'easy']);
    expect(wrapper.state().difficulty).toEqual('easy');
  });
});
