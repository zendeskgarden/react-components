import React from 'react';
import { shallow } from 'enzyme';

import HeaderItemText from './HeaderItemText';

describe('HeaderItemText', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<HeaderItemText />);

    expect(wrapper).toMatchSnapshot();
  });
});
