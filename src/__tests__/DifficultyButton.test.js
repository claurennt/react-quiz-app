// import global from '../.config/setup.js';
// import React from 'react';
// import { shallow, mount } from '../.config/enzyme';
// import DifficultyButton from '../components/DifficultyButton';
// import Home from '../pages/Home';
// import * as QuestionsContext from '../Context/QuestionsContext';

// it('Should update difficulty state on click', () => {
//   const setDifficulty = jest.fn();
//   const wrapper = r(<DifficultyButton onClick={setDifficulty} />);
//   const handleClick = jest.spyOn(React, 'useState');
//   handleClick.mockImplementation((difficulty) => [difficulty, setDifficulty]);

//   wrapper.find('.level-button').simulate('click');
//   expect(setDifficulty).toBeTruthy();
// });
