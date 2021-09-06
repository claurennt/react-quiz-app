import { global } from '../.config/setup';
import React from 'react';
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
    const wrapper = shallow(<Home />);
    const buttons = wrapper.find(DifficultyButton);
    expect(buttons.length).toBe(3);

    const wrapperButton = render(
      <QuestionsContext>
        {' '}
        <DifficultyButton level={contextValues.difficulty} />
      </QuestionsContext>
    );
    const setDifficulty = jest.fn();
    const handleClick = jest.spyOn(React, 'useState');

    handleClick.mockImplementation((difficulty) => [difficulty, setDifficulty]);
    wrapperButton.at(0).simulate('click');
    expect(setDifficulty).toBeTruthy();
  });
  it('Should update difficulty state on click', () => {});
});
