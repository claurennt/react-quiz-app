import React from 'react';
import { shallow } from '../.config/Enzyme';

import App from '../App';

describe('App  test suite', () => {
  it('Should render without crashing and not be empty', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should trigger fetch on click', () => {
    const wrapper = shallow(<App />);
    const setDifficulty = jest.fn();
    const handleClick = jest.spyOn(React, 'useState');
    const button = wrapper.find('.level-button');
    button.simulate('click', (level = 'easy')); // 'value' instead of 'num'

    handleClick.mockImplementation((difficulty) => [difficulty, setDifficulty]);
    wrapperButton.at(0).simulate('click');
    expect(wrapper.state().difficulty).toEqual('easy'); // SUCCESS
  });
});
