import React from 'react';
import { shallow } from '../.config/Enzyme';

import App from '../App';

describe('App and pages test suite', () => {
  it('Should render without crashing', () => {
    shallow(<App />);
  });
});
