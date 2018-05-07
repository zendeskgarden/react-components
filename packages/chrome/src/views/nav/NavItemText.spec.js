import React from 'react';
import { shallow } from 'enzyme';

import NavItemText from './NavItemText';

describe('NavItemText', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<NavItemText />);

    expect(wrapper).toMatchSnapshot();
  });
});
