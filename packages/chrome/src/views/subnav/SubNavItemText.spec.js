import React from 'react';
import { shallow } from 'enzyme';

import SubNavItemText from './SubNavItemText';

describe('SubNavItemText', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<SubNavItemText />);

    expect(wrapper).toMatchSnapshot();
  });
});
